<?php


if (isset($_POST['submit'])) {
    $to = 'contact@prevoyanceservices.com';
    $subject = 'Devis Décennale';
    $name = htmlentities($_POST['name'], ENT_QUOTES);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlentities($_POST['message'], ENT_QUOTES);
    $phone = htmlentities($_POST['telephone'], ENT_QUOTES); 

     // Vérification des champs obligatoires
     if (empty($subject) || empty($name) || empty($email) || empty($message) || empty($phone)) {
        http_response_code(400); // Code de réponse HTTP 400 (Bad Request)
        exit; // Arrête l'exécution du script si des champs sont manquants.
    }

    // Validation de l'e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(350); // Code de réponse HTTP 400 (Bad Request)
        exit; // Arrête l'exécution du script si l'e-mail est invalide.
    }
    
    // Validation du numéro de téléphone
    if (!preg_match('/^[0-9]{10}$/', $phone)) {
        http_response_code(370); // Code de réponse HTTP 400 (Bad Request)
        exit; // Arrête l'exécution du script si le numéro de téléphone est invalide.
    }
    
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "Nom: $name <br> Email: $email <br> Téléphone: $phone <br> Message: <br> $message";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // Code de réponse HTTP 200 (OK)
    } else {
        http_response_code(500); // Code de réponse HTTP 500 (Internal Server Error)
    }
}
?>