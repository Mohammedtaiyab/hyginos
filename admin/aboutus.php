<?php
require ('include/head.php');
require ('include/header.php');
require ('include/sidebar.php');
?>

<div class="page-wrapper">
			<!--page-content-wrapper-->
			<div class="page-content-wrapper">
				<div class="page-content">
					<!--breadcrumb-->
					<div class="page-breadcrumb d-none d-md-flex align-items-center mb-3">
						<div class="breadcrumb-title pr-3">Dashboard</div>
						<div class="pl-3">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb mb-0 p-0">
									<li class="breadcrumb-item"><a href="javascript:;"><i class='bx bx-home-alt'></i></a>
									</li>
									<li class="breadcrumb-item active" aria-current="page">Address</li>
								</ol>
							</nav>
						</div>
					</div>
					<!--end breadcrumb-->

<section id="tabs" class="project-tab">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
					<div class="card">
						<div class="card-body">
							<div class="card-title">
								<h4 class="mb-0">Address</h4>
							</div>
							<hr/>
							<?php $head=$employee->aboutus();
							?>
							<div class="row">
								<div class="col-md-6">
										<form action="function.php" method="POST" enctype="multipart/form-data">
											<input type="hidden" name="id" value='<?php echo $head[0]['ID'];;?>'>
											<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">Email</span>
								</div>
<input type="email" class="form-control" name="email" value='<?php echo $head[0]['Email']; ?>' aria-label="Username" aria-describedby="basic-addon1">
							</div>
<label for="basic-url">Head Office Address</label>
							<div class="input-group mb-3">
							<!-- 	<div class="input-group-prepend">
									<span class="input-group-text">Paragraph</span>
								</div> -->	
								<textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea" rows="3"><?php  echo $head[0]['Headoffice']; ?></textarea>
							</div>


							
								<button class="btn btn-primary"  type="submit" name="aboutus">Update</button>
										
								</div>
									<div class="col-md-6">
									<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">Phone no:</span>
								</div>
<input type="text" class="form-control" name="phone" value='<?php echo $head[0]['Phone']; ?>' aria-label="Username" aria-describedby="basic-addon1">
							</div>
										 <div class="form-group">
										 <label for="basic-url">Branch Office Address</label>
							<div class="input-group mb-3">
							<!-- 	<div class="input-group-prepend">
									<span class="input-group-text">Paragraph</span>
								</div> -->	
								<textarea class="form-control" id="paragraph" name="bnchaddress" aria-label="With textarea" rows="3"><?php  echo $head[0]['Branchoffice']; ?></textarea>
							</div>
       
    </div>
									</div>
									</form>
							</div>
						</div>
					</div>
                   
                       
								
								
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


				</div>
			</div>
			<!--end page-content-wrapper-->
		</div>

<?php
require ('include/modals.php');
?>

<?php
require ('include/footer.php');
require ('include/script.php');
?>