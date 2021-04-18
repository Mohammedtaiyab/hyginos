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
									<li class="breadcrumb-item active" aria-current="page">About Us</li>
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
								<h4 class="mb-0">About US</h4>
							</div>
							<hr/>
							<?php $head=$header->getallData();
							?>
							<div class="row">
								<div class="col-md-6">
										<form action="function.php" method="POST" enctype="multipart/form-data">
											<input type="hidden" name="id" value='<?php echo $head[0]['ID'];;?>'>
										
<label for="basic-url">Title</label>
							<div class="input-group mb-3">
							<!-- <div class="input-group-prepend"><span class="input-group-text">Paragraph</span></div> -->	
	<textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea"><?php  echo $head[0]['Title']; ?></textarea>	<script>CKEDITOR.replace( 'paragraph' );</script>
							</div>


							
								<button class="btn btn-primary"  type="submit" name="home">Update</button>
										
								</div>
									<div class="col-md-6">

										 <div class="form-group">
        <label>Upload background Image</label>
        <div class="input-group">
            <span class="input-group-btn">
                <span class="btn btn-default btn-file">
                    Browse… <input type="file" id="imgInp" name="image">
                </span>
            </span>
        </div>
        <img id='img-upload' src='../assets/img/<?php echo $head[0]['Bg_img'];?>' style="width: 100%;">
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