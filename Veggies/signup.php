<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "signup";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST")
{

    $username =$_POST['username'];
    $email =$_POST['email'];
    $password =$_POST['password'];
    $confirm =$_POST['confirm'];
    $sql = "INSERT INTO `registration` (`username`, `email`, `password`, `confirm`) VALUES ('$username', '$email', '$password', '$confirm')";

    if ($conn->query($sql) === TRUE) 
    {
     echo "New record created successfully";
     header('Location: login.html');
    } 
    else 
   {
    echo "Error: " . $sql . "<br>" . $conn->error;
   }

}
    
?>