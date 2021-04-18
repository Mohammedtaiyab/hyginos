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
            <div class="breadcrumb-title pr-3">Why Us</div>
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
          $section=$header->whyusid($_GET['id']);
          
          ?>
          <div class="card radius-15">
            <div class="card-body">
              <div class="card-title">
                <h4 class="mb-0">Edit</h4>
              </div>
              <hr/>
              <form action="function.php" method="POST" enctype="multipart/form-data">
              <input type="hidden" name="id" value='<?php echo $section[0]['ID']; ?>'>
              
            
               <div class="input-group mb-3">
                <div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">Title</span>
                </div>
                <input type="text" class="form-control" value='<?php echo $section[0]['Title']; ?>' name="title" aria-label="Section" aria-describedby="basic-addon1">
              </div>
            <label for="basic-url">Paragraph</label>
              <div class="input-group mb-3"> 
                <textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea"><?php echo $section[0]['Paragraph']; ?></textarea>  
              </div>
              <div class="input-group mb-3">
								<input type="file" class="form-control" name="iconimage" aria-label="bgimage" aria-describedby="basic-addon2">
								<div class="input-group-append">	<span class="input-group-text" id="basic-addon2">Image</span>
								</div>
                <a href="#image" class="image" data-toggle='modal' data-id='<?php echo $section[0]['icon_img'];?>'>View</a>
							</div>
                <button class="btn btn-primary"  type="submit" name="whyusupdate">Update</button>
              </form>
            </div>
          </div>
        
        </div>
      </div>
      <!--end page-content-wrapper-->
    </div>
<?php
require ('include/modals.php');
require ('include/footer.php');
require ('include/script.php');
?>