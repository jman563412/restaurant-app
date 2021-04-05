The functions in this folder are all hosted in the google cloud and are activated when you make an HTTP request to the specific endpoint

The new form of connection we're using is intended for END USERS, technically anyone using the app could call this function but they'd have to order something through our app first

NO JSON CERTS NEEDED, NO PROXY ETC.

The cloud functions we're using do the operations that were in the original mysql class (now removed)

We will have a separate OAuth client ID for each cloud function:

Currently we have: customer for purchaseConfirmation
With each client ID object we have: clientId, clientSecret
These NEVER CHANGE ^

Then, to authorize a user to make the call to the endpoint:
1: User signs into their google account from a prompt in our app
2: Successful sign in returns us an ID *TOKEN* (different from client_id for app, it's an object for this app user instance with >=6 fields)
3: We take the ID token and add it as a request header like this => Authorization: Bearer [IDtokengoeshere]
    3a: We make the request to the cloud function endpoint using that header ^ as a POST request
    3b: We pass the parameters for the DB query in the body of the request (the entire request body is a JSON object)
4: We process the response from the cloud function(if we expect one to be returned) 

Endpoint for purchaseConfirmation:
https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation
