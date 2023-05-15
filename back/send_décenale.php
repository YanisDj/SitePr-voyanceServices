<?php

require_once 'PHPMailer-5.2-stable/PHPMailerAutoload.php';
if (isset($_POST['submit'])) {
    $to = 'contact@prevoyanceservices.com';
    $subject = 'Devis Décennale';
    $name = htmlentities($_POST['name'], ENT_QUOTES);
    $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlentities($_POST['message'], ENT_QUOTES);
    $phone = htmlentities($_POST['telephone'], ENT_QUOTES); 

    // Crée un objet PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Configure les paramètres du serveur SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'user@example.com';
        $mail->Password = 'password';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Configure les destinataires et le contenu du message
        $mail->setFrom($from, $name);
        $mail->addAddress($to);
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "Nom: $name <br> Email: $from <br> Téléphone: $phone <br> Message: <br> $message";

        // Envoie le message
        $mail->send();
        echo 'Votre message a été envoyé avec succès.';
    } catch (Exception $e) {
        echo 'Une erreur s\'est produite lors de l\'envoi de votre message : ' . $mail->ErrorInfo;
    }
}
?>