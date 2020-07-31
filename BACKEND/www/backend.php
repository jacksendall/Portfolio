<?php

if (isset($_POST['submit-message'])) {

    require_once 'dbh.inc.php';

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $mail = $_POST['mail'];

    

    if (empty($name) || empty($subject) || empty($mail) || empty($message)) {
        header("Location: http://localhost:4200/?error=emptyfields");
        exit();
    }
    else if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://localhost:4200/?error=invalidmail");
        exit();
    } 
    else {
        $sql = "INSERT INTO messages (Cname, Csubject, Cmessage, mail) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: http://localhost:4200/?error=sqlerror");
            exit();
        }
        else {

            mysqli_stmt_bind_param($stmt, "ssss", $name, $subject, $message, $mail);
            mysqli_stmt_execute($stmt);
            header("Location: http://localhost:4200/message-sent");
            exit();
        }
    }
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}
    header("Location: ");
    exit();

