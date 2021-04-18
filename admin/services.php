<?php
require ('include/head.php');
require ('include/header.php');
require ('include/sidebar.php');
if(isset($_GET['id'])){
	$id=$_GET['id'];
	$status=$_GET['status'];
	$change=$services->servicestatus($id,$status);
	}
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
									<li class="breadcrumb-item active" aria-current="page">Services</li>
								</ol>
							</nav>
						</div>
					</div>
					<!--end breadcrumb-->
					<div class="card">
						<div class="card-body">
							<div class="card-title">
								<h4 class="mb-0">Services</h4>

							</div>
							<div class="card-body">
							<button type="button" class="btn btn-primary m-2" data-toggle="modal" data-target="#addservice">Add New</button>
							</div>
							<hr/>
							<div class="table-responsive">
								<table id="example" class="table table-striped table-bordered" style="width:100%">
									<thead>
										<tr>
											<th>SNo:</th>
											<th>Title</th>
											<th>Paragaph</th>
											<th>Bg-image</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<?php
										$i=1;
										$header=$services->services();
										foreach ($header as $page) {
												echo "<tr>
												<td>".$i."</td>
											<td>".$page['Title']."</td>
											<td>";?>
												<a href="#paragraph" class="paragraph" data-toggle='modal' data-id='<?php echo $page['Paragraph'];?>'>View</a>
											</td><td>
												<a href="#image" class="image" data-toggle='modal' data-id='<?php echo $page['Image'];?>'>View</a>

											
											<td>
										<?php	if($page['Status']==1){?>
                                                <a href='services.php?id=<?php echo $page['ID']."&status=0";?>' class="btn btn-primary">Activated</button>
                                            <?php } else { ?>
                                                <a href='services.php?id=<?php echo $page['ID']."&status=1";?>' class="btn btn-danger">Deactivated</button>
                                           <?php } ?>
											<a href='service_edit.php?id=<?php echo $page['ID'];?>' class="btn btn-primary">Edit</button></td>
											<?php echo "
												</tr>
												";
												$i++;
										}
									?>
									</tbody>
							
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--end page-content-wrapper-->
		</div>
<!-- Modal -->
<div class="modal fade" id="addservice" tabindex="-1" role="dialog" aria-hidden="true">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title">Add New Service</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">	<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
										<form action="function.php" method="POST"  enctype="multipart/form-data">
										
														<div class="input-group mb-3">
														<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Title</span></div>
														<input type="text" class="form-control" name="title" value='' aria-label="Username" aria-describedby="basic-addon1">
														</div>
														<label for="basic-url">Paragraph</label>
														<div class="input-group mb-3">
														<textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea"></textarea>
														<script>CKEDITOR.replace( 'paragraph' );</script>
														</div>
														<div class="input-group mb-3">
														<div class="input-group-append">	
                            							<span class="input-group-text" id="basic-addon2">Image</span></div>
														<input type="file" class="form-control" name="imageicon" aria-label="bgimage" aria-describedby="basic-addon2">
														</div>
											</div>
										<div class="modal-footer">
										<input type="submit" name="addservice" class="btn btn-primary"></button>
														</form>	
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
											
										</div>
									</div>
								</div>
							</div>
<?php
require ('include/modals.php');
require ('include/footer.php');
require ('include/script.php');
?>