<?php

function dbconnection()
{
$conn = mysqli_connect('localhost', 'root', '', 'try');
return $conn;
}
