<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "payment";

// create 
$conn = new mysqli($servername, $username, $password, $dbname);
// check
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST")
{

    $fullname =$_POST['fullname'];
    $email =$_POST['email'];
    $address =$_POST['address'];
    $city =$_POST['city'];
    $state =$_POST['state'];
    $code =$_POST['code'];
    $sql = "INSERT INTO `billing` (`fullname`,`email`,`address`,`city`,`state`,`code`) VALUES ('$fullname','$email','$address','$city','$state','$code')";

    if ($conn->query($sql) === TRUE) 
    {
     echo "Registration Succesfull";
     header('location: http://localhost/PROJECT%202/module1.html');
    } 
    else 
   {
    header("http://localhost/PROJECT%202/signup.html");
   }

}
    
?>