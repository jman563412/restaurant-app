<?php
//Conn credentials
$serverName = "localhost";
$userName = "admin";
$password = "calculatedchaoticcode61320!!!";
$dbName = "cscerestaurantapp";

//Creating connection
$con=mysqli_connect($serverName, $userName, $password, $dbName);

if(mysqli_connect_errno()){
    echo "Failed to connect to DB"
    exit();
}

echo "Connection successful"

