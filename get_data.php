
<?php


//This Script is use to fetch the updated values of the status of the sensors. In conjunction for the realtime 
// and no Reload nature of the Web

include("connection.php");

$con = dbconnection();

if ($con->connect_error) {

    die("Connection Error " . $conn->connect_error);
}

$sql = "SELECT * FROM `sample` WHERE `id` = 1";

$result = $con->query($sql);

$response = array();

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
        array_push($response, $row);
    }
}

$con->close();

header('Content-Type: application/json');
echo json_encode($response);


?>
