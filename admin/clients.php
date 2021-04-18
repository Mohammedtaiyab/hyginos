<?php
require ('include/head.php');
require ('include/header.php');
require ('include/sidebar.php');
if(isset($_GET['id'])){
    echo "Here";
$id=$_GET['id'];
$status=$_GET['status'];
$change=$sections->changestatus($id,$status);
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
									<li class="breadcrumb-item active" aria-current="page">Partners</li>
								</ol>
							</nav>
						</div>
					</div>
					<!--end breadcrumb-->
					<div class="card">
						<div class="card-body">
							<div class="card-title">
								<h4 class="mb-0">Partners</h4>
                                <a href="#clients"  data-toggle='modal' class="btn btn-primary" >Add New Partner</a>
							</div>
							<hr/>
							<div class="table-responsive">
								<table id="example" class="table table-striped table-bordered" style="width:100%">
									<thead>
										<tr>
											<th>SNo:</th>
											<th>Title</th>
											<th>Paragraph</th>
											<th>Image</th>
											<th>Button_link</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<?php
										$i=1;
										$section=$sections->partnerts();
										foreach ($section as $page) {
												echo "<tr>
												<td>".$i."</td>

											<td>".$page['Name']."</td>
											
											<td>";?>
                                            <!-- <img src='<?php echo "../assets/img/clients/".$page['ClientLogo'];?>' alt="" style="width: 24px;"> -->
												<a href="#imageclient" class="imageclient" data-toggle='modal' data-id='<?php echo $page['ClientLogo'];?>'>View</a>
											</td>
											<td>
                                            <?php
                                            if($page['Status']==1){?>
                                                <a href='clients.php?id=<?php echo $page['Id']."&status=0";?>' class="btn btn-primary">Activated</button>
                                            <?php } else { ?>
                                                <a href='clients.php?id=<?php echo $page['Id']."&status=1";?>' class="btn btn-danger">Deactivated</button>
                                           <?php } ?>
                                             </td>
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

<?php
require ('include/modals.php');
?>
<script type="text/javascript">
$(function(){
  $(document).on('click', '.paragraph', function(){
    $('#paragraph').modal('show');
  var id = $(this).data('id');
    // getRow(id);
    $('#para').html(id);
  });
    $(document).on('click', '.imageclient', function(){
    $('#image').modal('show');
  var link = $(this).data('id');
   $("#img").attr("src","../assets/img/clients/"+link);
  });
});
</script>

<?php
require ('include/modals.php');
require ('include/footer.php');
require ('include/script.php');
?>