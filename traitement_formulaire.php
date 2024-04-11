<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $sujet = $_POST["sujet"];
    $message = $_POST["message"];

    // Adresse email de destination
    $destinataire = "brockliam528@gmail.com";

    // Sujet de l'email
    $sujetEmail = "Nouveau message de $nom : $sujet";

    // Contenu de l'email
    $contenuEmail = "Nom : $nom\n";
    $contenuEmail .= "Email : $email\n";
    $contenuEmail .= "Sujet : $sujet\n";
    $contenuEmail .= "Message :\n$message";

    // Envoi de l'email
    if (mail($destinataire, $sujetEmail, $contenuEmail)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
} else {
    echo "Une erreur s'est produite. Veuillez réessayer.";
}
?>
