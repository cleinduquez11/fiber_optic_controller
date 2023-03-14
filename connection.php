<?php
// This Script is for the connection of the Web to MYSQL database
function dbconnection()
{
$conn = mysqli_connect('localhost', 'root', '', 'try');
return $conn;
}
