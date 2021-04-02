const mysql = require('mysql');

export class DBOperations{
    
    //Constructor simply opens up connection to DB
    constructor(){
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'admin',
            password: 'calculatedchaoticcode61320!!!',
            database: 'cscerestaurantapp'
        });
        //Actually opening up the connection
        connection.connect((err) =>{
            if (err){
                console.log(err.message);
            }
            else{
                console.log('Connected to DB');
            }
        });
    }

    //Called upon order confirmation on payment page (button click rn), sending food items to outstanding orders table
    addOutstandingOrder(orderString, specialInstructions = ''){
        sql = 'INSERT INTO testoutstandingOrders (NULL, ';
        
        //Building string that meets the syntax defined in README_2 in database folder
        sql = sql + '{';
        sql = sql + orderString
        sql = sql + ' SI: ' + specialInstructions + '});'
        
        //Table automatically gives order an orderId and takes a string
        connection.query(sql, function(err, result, fields){
            //Handle an error if it occurred
            if (err){
                console.log(err);
            }
            else{
                console.log("Outstanding order insert successful");
                console.log(result);
            }
            //Else we query again for the order number and put in local storage if it doesn't already exist?
        });
    }

    //Increments the items ordered appropriately in the itemsOrderedTable
    incrementItemsList(itemsDict){
        //For each item in the order:
        //Query to determine the itemID from testItemSales table
        //Use the itemName to increment the count by 1
        for(let i = 0; i < Object.keys(itemsDict).length; i++){
            
            sql = "UPDATE testitemsList SET ordercount = orderCount + " + itemsDict[i] + "WHERE itemName=\"" + Object.keys(itemsDict[i]) +"\";";
            connection.query(sql, function(err, result,fields){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(result);
                    console.log("Insert on itemsList successful")
                }
            });
        }
    }
}