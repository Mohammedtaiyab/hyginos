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
									<li class="breadcrumb-item active" aria-current="page">Head</li>
								</ol>
							</nav>
						</div>
					</div>
					<!--end breadcrumb-->
	<div class="card">
						<div class="card-body">
							<div class="card-title">
								<h4 class="mb-0">Head</h4>
							</div>
							<hr/>
							<?php $header=$header->getallhead(); ?>
								<div class="row">
								<div class="col-md-8">
							<form action="function.php" method="POST" enctype="multipart/form-data" id="head">
											<input type="hidden" name="id" value='<?php echo $header[0]['ID'];?>'>
								<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">Title</span>
								</div>
							<input type="text" class="form-control" name="title" value='<?php echo $header[0]['Title'];?>' aria-label="Username" aria-describedby="basic-addon1">
							</div>
								<div class="input-group mb-3">
								<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">keywords</span>
								</div>	
								<input type="text" value='<?php echo $header[0]['keywords'];?>' name="keywords" data-role="tagsinput" class="form-control" />
								</div>
								<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">Description</span>
								</div>
							 <textarea type="text" class="form-control" name="description" value='' aria-label="Description" aria-describedby="basic-addon1"><?php echo $header[0]['Description'];?></textarea>
								</div>
								<div class="input-group mb-3">
								<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Robots</span>
								</div>	
								<input type="text" value='<?php echo $header[0]['Robots'];?>' name="robots" data-role="tagsinput" class="form-control" />
								</div>
								<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">&lt;script&gt;</span>
								</div>
								<textarea type="text" class="form-control" name="script" value='' aria-label="Description" aria-describedby="basic-addon1"><?php echo $header[0]['Script'];?></textarea>
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">&lt;/script&gt;</span>
								</div>
								</div>
									<div class="input-group mb-3">
								<input type="file" class="form-control" name="file" aria-label="file" aria-describedby="basic-addon2">
								<div class="input-group-append">	<span class="input-group-text" id="basic-addon2">Upload File</span>

								</div>
	<span style="position: absolute;padding-top: 30px;"><small>Add File to the File Manager</small></span>
							</div>

								<button class="btn btn-primary"  type="submit" name="head">Update</button>
							</form>
							</div>
							</div>
						</div>
						</div>


				</div>
			</div>
			<!--end page-content-wrapper-->
		</div>

<?php
require ('include/footer.php');
?>
<script type="text/javascript">
		$('#head').on('keypress', function(e) {
     var keyCode = e.keyCode || e.which;
  if (keyCode === 13) { 
    e.preventDefault();
    return false;
  }
});
</script>
<?php
require ('include/script.php');
?>