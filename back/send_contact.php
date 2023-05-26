<?php
if (isset($_POST['submit'])) {
    $to = 'devis@prevoyanceservices.fr';
    $subject = htmlentities($_POST['sujet'], ENT_QUOTES);
    $name = htmlentities($_POST['name'], ENT_QUOTES);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlentities($_POST['message'], ENT_QUOTES);
    $phone = htmlentities($_POST['telephone'], ENT_QUOTES);
    
    // Vérification des champs obligatoires
    if (empty($subject) || empty($name) || empty($email) || empty($message) || empty($phone)) {
        // Vous pouvez également rediriger l'utilisateur vers le formulaire avec un message d'erreur, si nécessaire.
        echo 'error';
        exit; // Arrête l'exécution du script si des champs sont manquants.
    }
    
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "Nom: $name <br> Email: $email <br> Téléphone: $phone <br> Message: <br> $message";

    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}
?>