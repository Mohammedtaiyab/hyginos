<?php
require('include/head.php');
require('include/header.php');
require('include/sidebar.php');
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
							<li class="breadcrumb-item active" aria-current="page">Gallery</li>
						</ol>
					</nav>
				</div>

			</div>
			<!--end breadcrumb-->

			<div class="card radius-15">
				<div class="card-body">
					<div class="card-title">
						<h4 class="mb-0">Edit</h4>
					</div>
					<div class="row">
						<div class="col-md-6">
							<hr />
							<?php
							$head = $sections->getprojectid($_GET['id']);
							?>
							<form action="function.php" method="POST" enctype="multipart/form-data">
								<input type="hidden" name="id" value='<?php echo $head[0]['ID'];; ?>'>
								<div class="input-group mb-3">
									<div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">Title</span>
									</div>
									<input type="text" class="form-control" name="title" value='<?php echo $head[0]['Title']; ?>' aria-label="Username" aria-describedby="basic-addon1">
								</div>

								<div class="input-group mb-3">
									<div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">Link</span>
									</div>
									<input type="text" class="form-control" name="paragraph" value='<?php echo $head[0]['Paragraph']; ?>' aria-label="Username" aria-describedby="basic-addon1">
								</div>


								<button class="btn btn-primary" type="submit" name="updateproject">Update</button>

						</div>
						<div class="col-md-6">

							<div class="form-group">
								<label>Upload Image</label>
								<div class="input-group">
									<span class="input-group-btn">
										<span class="btn btn-default btn-file">
											Browse… <input type="file" id="imgInp" name="image">
										</span>
									</span>
								</div>
								<img id='img-upload' src='../assets/img/<?php echo $head[0]['Bg_img']; ?>' style="width: 100%;">
							</div>
						</div>
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
require('include/footer.php');
?>
<script type="text/javascript">
	$('select').change(function() {
		if ($('select option:selected').text() == "Add") {
			$('html select').after("<label class='input-group-text' style='margin-left: 17px;padding: 0px;'>Add Category<input class='form-control' name='newcat'></input></label>");
		} else {
			$('label').remove();
		}

	});

	$('#blogs').on('keypress', function(e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode === 13) {
			e.preventDefault();
			return false;
		}
	});
</script>
<?php
require('include/script.php');
?>