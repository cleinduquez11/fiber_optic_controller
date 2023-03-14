<?php

//This Script is for deciding the automation and manual override of the FAN

include("connection.php");

$con = dbconnection();


if (isset($_GET["temp"])) {

    $temp = $_GET["temp"];
} else {
    return;
}



$query = "UPDATE `sample` SET `temperature` = '$temp' WHERE `sample`.`id` = 1;";
$sql = "SELECT * FROM `sample` WHERE `id` = 1";

$result = $con->query($query);
$result1 = $con->query($sql);

$response = array();



if ($result1->num_rows > 0) {

    while ($row = $result1->fetch_assoc()) {
        array_push($response, $row);
    }
}

$con->close();



if ($response[0]['temperature'] >= 26 && $response[0]['fan_status'] == "ON") {
    echo "ON";
} 
else {
    echo "OFF";
}
