<?php
$nombre_usuario=$_POST['nombre'];
$email_usuario=$_POST['email'];
$consulta_usuario=$_POST['mensaje'];


$destino="isabelmunozq@gmail.com";

$asunto="Consulta enviada desde www.isabelmunozq.com";

$mensaje="Tu Nombre es: ".$nombre_usuario."\r\n";
$mensaje.="Tu Email es: ".$email_usuario."\r\n";
$mensaje.="Consulta: ".$consulta_usuario."\r\n";

$remitente="From: algo@jonylif.com.ar";

mail($destino, $asunto, $mensaje, $remitente);


header("Location:index.php?i=ok");

?>
