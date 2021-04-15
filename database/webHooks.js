const request = require('request');

export default class webHooks{

    constructor(){
        let request = new request();
    }

    purchaseConfirmation(itemsDict, specialInstructions){

        //Endpoint for purchaseConfirmation, increments itemsList and updates outstandingOrders tables
        request.post('https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation', (err, res, body) =>{
            
            //Catch error
            if (err){
                console.log(err);
                console.log(res.statusCode);
            }

            //If success, do nothing
            //Kitchen will delete correct row from the table 
            else if (res){
                console.log(res);
            }
        });

    }

    
    //TODO: Operation for removing item from kitchen when completed
    //Submission done by @click on x for a given order in the kitchen



    }


