<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Create the email content
    $to = "your-email@example.com";  // Replace with your email address
    $email_subject = "Nowa wiadomość z formularza kontaktowego: $subject";
    $email_body = "Otrzymałeś nową wiadomość.\n\n".
                  "Imię i nazwisko: $name\n".
                  "Email: $email\n".
                  "Telefon: $phone\n".
                  "Temat: $subject\n".
                  "Wiadomość:\n$message\n";

    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send the email
    mail($to, $email_subject, $email_body, $headers);

    // Redirect to a thank you page or display a success message
    echo "Dziękujemy za kontakt! Twoja wiadomość została wysłana.";
} else {
    // If the form is not submitted, redirect to the form page
    header("Location: form_page.html");
    exit;
}
?>
