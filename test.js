const fetch = require("node-fetch");

async function getHook(){
    var itemsDict = {eggs:"4", bread:"5", cheese: "6"};

    const response = await fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/test', {
    
    method: 'POST',
    mode:'cors',
    credentials: 'same-origin',
    headers: {
        //'Authorization': "bearer ",
        'Content-Type':'text/plain'
    },
    body: "hello"
}).then(res =>{
    console.log(res.body);
}).catch(err =>{
    console.log(err);
});
}

getHook();

//https://www.serverless.com/blog/cors-api-gateway-survival-guide


//other trigger: https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation