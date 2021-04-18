<?php
require ('include/head.php');
require ('include/header.php');
require ('include/sidebar.php');
if(isset($_GET['id'])){
	$id=$_GET['id'];
	$status=$_GET['status'];
	$change=$services->reviewstatus($id,$status);
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
									<li class="breadcrumb-item active" aria-current="page">Reviews</li>
								</ol>
							</nav>
						</div>
					</div>
					<!--end breadcrumb-->
					<div class="card">
						<div class="card-body">
							<div class="card-title">
								<h4 class="mb-0">Reviews</h4>
							</div>
							<div class="card-body">
							<button type="button" class="btn btn-primary m-2" data-toggle="modal" data-target="#addreview">Add New</button>
							</div>
							<hr/>
							<div class="table-responsive">
								<table id="example" class="table table-striped table-bordered" style="width:100%">
									<thead>
										<tr>
											<th>SNo:</th>
											<th>Rate</th>
											<th>Review</th>
											<th>Review By</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<?php
										$i=1;
										$header=$services->reviews();
									
										foreach ($header as $page) {
												echo "<tr>
												<td>".$i."</td>
											<td>".$page['Rate']."</td>
											<td>";?> 
												<?php echo $page['Review'];?>
											</td><td>
											<?php echo $page['Give_by'];?>
											<td>
											<?php	if($page['Status']==1){?>
                                                <a href='reviews.php?id=<?php echo $page['ID']."&status=0";?>' class="btn btn-primary">Activated</button>
                                            <?php } else { ?>
                                                <a href='reviews.php?id=<?php echo $page['ID']."&status=1";?>' class="btn btn-danger">Deactivated</button>
                                           <?php } ?>
											<a href='reviewedit.php?id=<?php echo $page['ID'];?>' class="btn btn-primary">Edit</button></td>
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
		<div class="modal fade" id="addreview" tabindex="-1" role="dialog" aria-hidden="true">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title">Add New Review</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">	<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
										<form action="function.php" method="POST"  enctype="multipart/form-data">
										
														<div class="input-group mb-3">
														<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Rate</span></div>
														<input type="number" class="form-control" name="rate" value='' aria-label="Username" aria-describedby="basic-addon1" placeholder="Rate Out of 5">
														</div>
														<div class="input-group mb-3">
														<div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Review By</span></div>
														<input type="text" class="form-control" name="revby" value='' aria-label="Username" aria-describedby="basic-addon1">
														</div>
														<label for="basic-url">Paragraph</label>
														<div class="input-group mb-3">
														<textarea class="form-control" id="paragraph" name="paragraph" aria-label="With textarea"></textarea>
														<script>CKEDITOR.replace( 'paragraph' );</script>
														</div>
												
											
													
									</div>
										<div class="modal-footer">
										<input type="submit" name="addreviews" class="btn btn-primary"></button>
														</form>	
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
											
										</div>
									</div>
								</div>
							</div>

<script >
$(function(){
  $(document).on('click', '.mypara', function(){
	  
    $('#paragraph').modal('show');
  var id = $(this).data('id');
    // getRow(id);
	alert(id);
    $('#para').html(id);
  });
</script>

<?php
require ('include/modals.php');
require ('include/footer.php');
require ('include/script.php');
?>