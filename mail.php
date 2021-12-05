<?php
//get data from form  

$name = $_POST['firstname'];
$email= $_POST['email'];
$message= $_POST['message'];
$to = "nakulgopinath1925@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
if($email!=NULL){
    echo "Inside IF"
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location: index.html");
?>