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
                            <li class="breadcrumb-item active" aria-current="page">Blogs</li>
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
                    <hr />
                    <?php
                    $blog = $employee->getDatabyid($_GET['id']);
                    ?>
                    <form action="function.php" method="POST" enctype="multipart/form-data" id="blogs">

                        <input type="hidden" name="id" value='<?php echo $blog[0]['ID']; ?>'>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">Title</span>
                            </div>
                            <input type="text" class="form-control" name="title" value='<?php echo $blog[0]['Title']; ?>' aria-label="Username" aria-describedby="basic-addon1">
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">Title</span>
                            </div>
                            <input type="text" class="form-control" name="company" value='<?php echo $blog[0]['Company']; ?>' aria-label="Username" aria-describedby="basic-addon1">
                        </div>

                        <label for="basic-url">Description</label>
                        <div class="input-group mb-3">
                            <!-- 	<div class="input-group-prepend">
									<span class="input-group-text">Paragraph</span>
								</div> -->
                            <textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea">'<?php echo $blog[0]['Description']; ?>'</textarea>
                            <script>
                                CKEDITOR.replace('paragraph');
                            </script>
                        </div>

                        <div class="input-group mb-3">
                            <div class="input-group-prepend"> <span class="input-group-text" id="basic-addon1">Tags</span>
                            </div>
                            <input type="text" value='<?php echo $blog[0]['Tags']; ?>' name="tags" data-role="tagsinput" class="form-control" />
                        </div>

                        <button class="btn btn-primary" type="submit" name="updatejob">Update</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
    <!--end page-content-wrapper-->
</div>
<?php
require('include/footer.php');
?>

<?php
require('include/script.php');
?>