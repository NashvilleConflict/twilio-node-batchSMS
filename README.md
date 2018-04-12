
## Twilio Node Batch SMS API


### Setup

install dependencies:

```
npm Install
```

Get `.env` file add it to the top level of application for environment variables.

### Run application
```
node server.js
```

### Current Endpoint

POST request  to `/api/twilio` with body:
```
{
    "numbers": [],
    "message": "Hello!"
}
```

RESPONSE object:

```
{
    "results" : {
        "1112223333" : "Success!",
        "6786786" : "The 'To' number 6786786 is not a valid phone number."
    }
}
```



 