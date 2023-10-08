<?php

$con = mysqli_connect('localhost','root');

if($con){
	echo "Details Recorded, We Will Reach Back To You Shortly";
}else{
	echo "No connection";
}

mysqli_select_db($con, 'signupuserdata');

$name = $_POST['name'];
$username = $_POST['username'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$password = $_POST['password'];


$query = "insert into signupdata (name, username, email, mobile, password)
values ('$name', '$username', '$email', '$mobile', '$password') ";

mysqli_query($con, $query);

header('location: index.html');

?>

