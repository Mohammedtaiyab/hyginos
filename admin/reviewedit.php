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
						<div class="breadcrumb-title pr-3">Reviewss</div>
						<div class="pl-3">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb mb-0 p-0">
									<li class="breadcrumb-item"><a href="javascript:;"><i class='bx bx-home-alt'></i></a>
									</li>
									<li class="breadcrumb-item active" aria-current="page">Edit</li>
								</ol>
							</nav>
						</div>
				
					</div>
					<!--end breadcrumb-->
					<?php 
					$indexhead=$services->getreviewid($_GET['id']);
					
					?>
					<div class="card radius-15">
						<div class="card-body">
							<div class="card-title">
								<h4 class="mb-0">Edit</h4>
							</div>
							<hr/>
							<form action="function.php" method="POST" enctype="multipart/form-data">
								
							
							<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">Rate</span>
								</div>
								
								<input type="text" class="form-control" value='<?php echo $indexhead[0]['Rate']; ?>' name="rate" aria-label="Username" aria-describedby="basic-addon1">
							</div>

								<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">Review by</span>
								</div>
								<input type="hidden" name="id" value='<?php echo $indexhead[0]['ID']; ?>'>
								<input type="text" class="form-control" name="reviewby" value='<?php echo $indexhead[0]['Give_by']; ?>' aria-label="Username" aria-describedby="basic-addon1">
							</div>
<label for="basic-url">Review</label>
							<div class="input-group mb-3">
							<!-- 	<div class="input-group-prepend">
									<span class="input-group-text">Paragraph</span>
								</div> -->	
								<textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea"><?php echo $indexhead[0]['Review']; ?></textarea>	<script>
		CKEDITOR.replace( 'paragraph' );
	</script>
							</div>
						
								<button class="btn btn-primary"  type="submit" name="reviewupdate">Update</button>
							</form>
						</div>
					</div>
				
				</div>
			</div>
			<!--end page-content-wrapper-->
		</div>
<?php
require ('include/footer.php');
require ('include/script.php');
?>