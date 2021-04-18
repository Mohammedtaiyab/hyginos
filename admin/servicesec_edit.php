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
            <div class="breadcrumb-title pr-3">Headers</div>
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
          $service=$services->servicessectionbyid($_GET['id']);
          
          ?>
          <div class="card radius-15">
            <div class="card-body">
              <div class="card-title">
                <h4 class="mb-0">Edit</h4>
              </div>
              <hr/>
              <div class="row">
								<div class="col-md-6">
             <form action="function.php" method="POST" enctype="multipart/form-data">
											<input type="hidden" name="id" value='<?php echo $service[0]['ID'];?>'>
											<div class="input-group mb-3">
								<div class="input-group-prepend">	<span class="input-group-text" id="basic-addon1">Title</span>
								</div>
<input type="text" class="form-control" name="title" value='<?php echo $service[0]['Title']; ?>' aria-label="Username" aria-describedby="basic-addon1">
							</div>
<label for="basic-url">Short_Description</label>
							<div class="input-group mb-3">
							<!-- 	<div class="input-group-prepend">
									<span class="input-group-text">Paragraph</span>
								</div> -->	
								<textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea"><?php echo $service[0]['Description']; ?></textarea>	<script>
		CKEDITOR.replace( 'paragraph' );
	</script>
							</div>


							
								<button class="btn btn-primary"  type="submit" name="Updatesersec">Update</button>
										
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
        <img id='img-upload' src='../assets/img/pages/<?php echo $service[0]['Image']; ?>' style="width: 100%;">
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
require ('include/footer.php');
require ('include/script.php');
?>