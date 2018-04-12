require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const twilio = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

app.use(bodyParser.json());

app.post('/api/twilio', function(req, res){
    let numbers = req.body.numbers;
    let message = req.body.message;

    const limit = numbers.length;
    let results = {};
    let count = 0;


        numbers.forEach((n) => {
            twilio.messages.create({
                to: n,
                from: process.env.TWILIO_FROM_NUMBER,
                body: message
            })
            .then(messages => {
                count++;
                results[n] = 'success!';
                console.log(`Messages sent to ${n}`);

                if(count === limit) res.send({ results });
            })
            .catch(err => {
                count++;
                results[n] = err.message;
                console.error(err);

                if(count === limit) res.send({ results });
            });
        });
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`)
});