<?php

$con = mysqli_connect('localhost','root');

if($con){
	echo "Details Recorded, We Will Reach Back To You Shortly";
}else{
	echo "No connection";
}

mysqli_select_db($con, 'websiteuserdata');

$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$date = $_POST['date'];
$message = $_POST['message'];



$query = "insert into userinfodata (name, username, email, mobile, date, message)
values ('$name', '$username', '$email', '$mobile', '$date', '$message') ";

mysqli_query($con, $query);

header('location: index.html');

?>

