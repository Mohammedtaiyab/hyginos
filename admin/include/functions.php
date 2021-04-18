<?php
session_start();
require ('database/DBcontroller.php');
require ('database/Blogs.php');
require ('database/Employee.php');
require ('database/Header.php');
require ('database/Sections.php');
require ('database/Services.php');
require ('database/ServiceSection.php');
$db= new DBcontroller;
$blogs=new Blogs($db);
$employee=new Employee($db);
$header=new Header($db);
$sections= new Sections($db);
$services=new Services($db);
$servicesection=new ServiceSection($db);
$succuss='';
$error='';
?>