<?php
error_reporting(0);
$EmailFrom = "j@gilbertogomez.mx";
$EmailTo = "j@gilbertogomez.mx";
$Subject = "Mensaje desde Pagina web";

$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

$headers = "From: $EmailFrom \r\n";
$headers .= "Reply-To: $EmailFrom \r\n";
$headers .= "Return-Path: $EmailFrom\r\n";
$headers .= "X-Mailer: PHP \r\n";
$headers .= "MIME-Version: 1.0" . "\r\n"; 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

$Body = "";
$Body .= "Nombre: ";
$Body .= $Name;
$Body .= "<br>";
$Body .= "Correo: ";
$Body .= $Email;
$Body .= "<br>";
$Body .= "Mensaje: ";
$Body .= $Message;
$Body .= "<br>";

if ($Name != '' && $Email != '' && $Message != '' ){
	$success = mail($EmailTo, $Subject, $Body, $headers);
	echo "<div class='label alert alert-success' role='alert'>Mensaje enviado Correctamente</div>";
}else{
	echo "<div class='label alert alert-warning' role='alert'>Verifique la Informacion</div>";
}

?>