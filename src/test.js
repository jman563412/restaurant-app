const mysql = require('mysql');


const connection = mysql.createPool({
    connectionLimit: 1,
    host: '127.0.0.1',
    user: 'admin',
    password: 'calculatedchaoticcode61320!!!',
    database: 'restaurantapp'
});


connection.query("INSERT INTO testitemsList(itemName, itemType, alcoholic, price, orderCount) VALUES(NULL, ?, ?, ?, ?, 0)", [itemName, itemType, alcoholic, price], function(err,result){
    if (err){
        console.log(err)
    }
    else {
        var theResult = result;
        console.log(theResult);
    }
});