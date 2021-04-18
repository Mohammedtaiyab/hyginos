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
									<li class="breadcrumb-item active" aria-current="page">Sections</li>
								</ol>
							</nav>
						</div>
					</div>
					<!--end breadcrumb-->
					<div class="card">
						<div class="card-body">
							<div class="card-title">
								<h4 class="mb-0">Page Headers</h4>
							</div>
							<hr/>
							<div class="table-responsive">
								<table id="example" class="table table-striped table-bordered" style="width:100%">
									<thead>
										<tr>
											<th>SNo:</th>
											<th>Page</th>
											<th>Section</th>
											<th>Paragaph</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<?php
										$i=1;
										$section=$sections->getAllData();
										foreach ($section as $page) {
												echo "<tr>
												<td>".$i."</td>

											<td>".$page['Page']."</td>
											<td>".$page['Section']."</td>
											<td>";?>
												<a href="#paragraph" class="paragraph" data-toggle='modal' data-id='<?php echo $page['Paragraph'];?>'>View</a>
											</td>
											<td><a href='section_edit.php?id=<?php echo $page['ID'];?>' class="btn btn-primary">Edit</button></td>
											<?php echo "
												</tr>
												";
												$i++;
										}
									?>
									</tbody>
									<tfoot>
										<tr>
											<th>SNo:</th>
											<th>Page</th>
											<th>Section</th>
											<th>Paragaph</th>
											<th>Action</th>
										</tr>
									</tfoot>
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
    $(document).on('click', '.image', function(){
    $('#image').modal('show');
  var link = $(this).data('id');
   $("#img").attr("src","assets/images/bg-images/"+link);
  });
});
</script>
<?php
require ('include/footer.php');
require ('include/script.php');
?>