<?php
$errorMSG = "";



if (empty($_POST["email"])) {
    $errorMSG = "Email is required ";
} else {
    $email = $_POST["email"];
}

$EmailTo = "jaddinternasional@gmail.com";
$Subject = "New Subscriber";

// prepare email body text
$Body = "";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
    echo "success";
 }else{
     if($errorMSG == ""){
         echo "Something went wrong :(";
     } else {
         echo $errorMSG;
     }
 }
?>