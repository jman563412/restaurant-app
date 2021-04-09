// const fetch = require("node-fetch");

// async function getHook(){
//     var itemsDict = {eggs:"4", bread:"5", cheese: "6"};

//     const response = await fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/test', {
    
//     method: 'POST',
//     mode:'cors',
//     credentials: 'same-origin',
//     headers: {
//         //'Authorization': "bearer ",
//         'Content-Type':'text/plain'
//     },
//     body: JSON.stringify({"testMessage": 5, "othashit": 6});
// }).then(res =>{
//     console.log(res.body);
// }).catch(err =>{
//     console.log(err);
// });
// }

let itemsDict = {"eggs": 5, "cheese":6, "beans": 7};

console.log(itemsDict);

let jsonedDict = JSON.stringify(itemsDict);
console.log(jsonedDict);

let unjsonedDict = JSON.parse(jsonedDict);
console.log(unjsonedDict);

requestOptions = {
    method: 'POST',
    headers: {
        'Authorization': 'aJWT'
    },
    
    body: jsonedDict

}

// promisethingy = await fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation', requestOptions);
// console.log(promisethingy);


//other trigger: https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation