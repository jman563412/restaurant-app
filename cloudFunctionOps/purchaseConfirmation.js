/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 * In Node.js, the body of the request is automatically parsed based on the content-type header and 
 * made available via your HTTP function's arguments.
 */

//Haven't unit tested these yet, will after implementing OAuth flow with google sign-in


const mysql = require('mysql');

//Receiving request with itemsDict
exports.purchaseConfirmation = (req, res) => {

    let itemsDict = JSON.parse(req.body.itemsDict);
    let specialInstructions = JSON.parse(req.body.specialInstructions);

    let itemString = JSON.stringify(itemsDict);

    //Connecting to DB
    const connection = mysql.createConnection({
                        host: '34.67.223.121',
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
                            //Making 2 queries, 1 to send current order items to kitchen, 1 to update inventory counts

                            //To update outstanding orders table for kitchen, orderId autoincrements, itemString is just varchar
                            let sql = "INSERT INTO testOutstandingOrders(orderId, orderString, timestamp) VALUES (NULL, " + mysql.escape(itemString) + " SI:" + mysql.escape(specialInstructions) + ", " + mysql.escape(Date()) + " ;";
                            
                            //TODO: On payment, remove order from the outstanding orders table using ID to match again
                            connection.query(sql, (error, result) =>{
                                if (error){
                                    console.log(error);
                                }
                                else {
                                    //Extract order Id from returned DB object, we'll return this to web client
                                    let thisOrderId = result.insertId;

                                    //Make the second query to update itemsList
                                    //We must make one request to increment each item the right # of times
                                    //May require babel import
                                    for (let [itemName, itemCount] of Object.entries(itemsDict)){
                                        sql2 = "UPDATE testItemsList SET itemCount = itemCount + " + mysql.escape(itemCount) + " WHERE itemName = " + mysql.escape(itemName); 
                                        connection.query(sql2, (error, result) =>{
                                            if (error){
                                                console.log(error)
                                            }
                                            else {
                                                continue
                                            }
                                        });                      
                                    }

                                    //Send new orderId back to client for storing as state variable
                                    res.body.thisOrderId = thisOrderId;
                                    res.status_code(200).send();    
                                }
                            });
                        }
                    });
                
        connection.end();
    }
    
    