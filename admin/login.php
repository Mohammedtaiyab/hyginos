<?php
require('include/functions.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
	<title></title>
	<!--favicon-->
<!-- 	<link rel="icon" href="assets/images/favicon-32x32.png" type="image/png" /> -->
	<!-- loader-->
	<link href="assets/css/pace.min.css" rel="stylesheet" />
	<script src="assets/js/pace.min.js"></script>
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="assets/css/bootstrap.min.css" />
	<!-- Icons CSS -->
	<link rel="stylesheet" href="assets/css/icons.css" />
	<!-- App CSS -->
	<link rel="stylesheet" href="assets/css/app.css" />
</head>

<body class="bg-lock-screen">
	<!-- wrapper -->
	<div class="wrapper">
		<div class="authentication-lock-screen d-flex align-items-center justify-content-center">
			<div class="card shadow-none bg-transparent">
				<div class="card-body p-md-5 text-center">
					<?php date_default_timezone_set('Asia/Calcutta');?>
					<h2 class="text-white"><?php echo date('h:i A');?></h2>
			<h5 class="text-white"><?php echo date('l jS \of F Y ');?></h5>
					<div class="">
						<img src="assets/images/icons/user.png" class="mt-5" width="120" alt="" />
					</div>
					<p class="mt-2 text-white">Administrator</p>

					<form action="function.php" method ="POST">
						<div class="form-group mt-3">
						<input type="password" name="password" class="form-control" placeholder="Password"/>
						<span style="color: white;"><?php if(isset($_GET['login'])){echo "Password Invalid!";} ?></span>
					</div>
					<button type="submit" class="btn btn-light btn-block" name="login">Login</button>

					</form>
					
				</div>
			</div>
		</div>
	</div>
	<!-- end wrapper -->
</body>
</html>