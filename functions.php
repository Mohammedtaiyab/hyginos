<?php
session_start();
require ('admin/database/DBcontroller.php');
require ('admin/database/Blogs.php');
require ('admin/database/Employee.php');
require ('admin/database/Header.php');
require ('admin/database/Sections.php');
require ('admin/database/Services.php');
require ('admin/database/ServiceSection.php');
$db= new DBcontroller;
$blogs=new Blogs($db);
$employee=new Employee($db);
$header=new Header($db);
$sections= new Sections($db);
$services=new Services($db);
$servicesection=new ServiceSection($db);
$succuss='';
$error='';
// require "PHPMailer/PHPMailerAutoload.php";
use PHPMailer\src\Exception;
use PHPMailer\PHPMailer\PHPMailer;
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
function smtpmailer($to, $from, $from_name, $subject, $body,$file)
    {
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->SMTPAuth = true; 
 
        $mail->SMTPSecure = 'SMTP'; 
        $mail->Host = 'smtp.hostinger.in';
        $mail->Port = 587;  
        $mail->Username = 'hr@for-catering.com';
        $protect="SoftEzi@123";
        $mail->Password =  $protect;   
        if(!empty($file)){
     $path = 'cv/'.$file;
     $mail->AddAttachment($path);
        }
   
        $mail->IsHTML(true);
        $mail->From="hr@for-catering.com";
        $mail->FromName=$from_name;
        $mail->Sender=$from;
        $mail->AddReplyTo($from, $from_name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($to);
        if(!$mail->Send())
        {
            $error ="Please try Later, Error Occured while Processing...";
            return $error; 
        }
        else 
        {
            $error = "Thanks You !! Your email is sent.";  
            return $error;
        }
    }
?>