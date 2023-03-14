
<?php
//This Script is for the toggling of the switches in REALTIME
include("connection.php");

$con = dbconnection();

if ($con->connect_error) {

    die("Connection Error " . $conn->connect_error);
}



if (isset($_POST['toogle_fan'])) {
    $fan = $_POST['toogle_fan'];
    $sql = "UPDATE `sample` SET `fan_status` = '$fan' WHERE `sample`.`id` = 1;";

    $result = $con->query($sql);

    $response = array();



    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            array_push($response, $row);
        }
    }

    $con->close();

    header('Content-Type: application/json');
    echo json_encode($response[0]['fan_status']);
}

if (isset($_POST['toogle_light'])) {
    $light = $_POST['toogle_light'];
    $sql = "UPDATE `sample` SET `light_status` = '$light' WHERE `sample`.`id` = 1;";

    $result = $con->query($sql);

    $response = array();



    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            array_push($response, $row);
        }
    }

    $con->close();

    header('Content-Type: application/json');
    echo json_encode($response[0]['light_status']);
}
if (isset($_POST['toogle_pump'])) {
    $pump = $_POST['toogle_pump'];
    $sql = "UPDATE `sample` SET `pump_status` = '$pump' WHERE `sample`.`id` = 1;";

    $result = $con->query($sql);

    $response = array();



    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            array_push($response, $row);
        }
    }

    $con->close();

    header('Content-Type: application/json');
    echo json_encode($response[0]['pump_status']);
}
if (isset($_POST['toogle_mist'])) {
    $mist = $_POST['toogle_mist'];
    $sql = "UPDATE `sample` SET `mist_status` = '$mist' WHERE `sample`.`id` = 1;";

    $result = $con->query($sql);

    $response = array();



    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            array_push($response, $row);
        }
    }

    $con->close();

    header('Content-Type: application/json');
    echo json_encode($response[0]['mist_status']);
}


?>