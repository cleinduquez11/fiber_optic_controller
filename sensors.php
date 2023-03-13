<?php

include("connection.php");

$con = dbconnection();


if (isset($_GET["temp"])) {

    $temp = $_GET["temp"];

}
else {
    return;
}

 
$query= "UPDATE `sample` SET `temperature` = '$temp' WHERE `sample`.`id` = 1;";
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

if ($response[0]['temperature'] >= 20 && $response[0]['fan_status'] == "OFF") {
  echo("FALSE");
}
else{
    echo("TRUE");
}

// header('Content-Type: application/json');
// echo json_encode("Temperature: ".$response[0]['temperature']);
// echo ( "<br>");
// echo json_encode("Light-Status: ". $response[0]['light_status']);

?>