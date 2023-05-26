<?php

require_once 'PHPMailer-5.2-stable/PHPMailerAutoload.php';
if (isset($_POST['submit'])) {
    $to = 'contact@prevoyanceservices.com';
    $subject = 'Devis Habitation';
    $name = htmlentities($_POST['name'], ENT_QUOTES);
    $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlentities($_POST['message'], ENT_QUOTES);
    $phone = htmlentities($_POST['telephone'], ENT_QUOTES); 

    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "Nom: $name <br> Email: $email <br> Téléphone: $phone <br> Message: <br> $message";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Votre message a été envoyé avec succès.';
    } else {
        echo 'Une erreur s\'est produite lors de l\'envoi de votre message.';
    }
}
?>