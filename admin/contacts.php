<?php
require ('include/head.php');
require ('include/header.php');
require ('include/sidebar.php');
$chero=$header->getcontacthead();
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
									<li class="breadcrumb-item active" aria-current="page">Contact</li>
								</ol>
							</nav>
						</div>
					</div>
					<!--end breadcrumb-->

					<div class="card">
					<div class="card-body">
					
							</div>
						<div class="card-body">
						
							<div class="card-title">
								<h4 class="mb-0">Enquries</h4>
							</div>
							<hr/>
							<div class="table-responsive">
								<table id="example" class="table table-striped table-bordered" style="width:100%">
									<thead>
										<tr>
											<th>SNo:</th>
											<th>Full Name</th>
											<th>Age</th>
											<th>Gender</th>
											<th>Email</th>
											<th>Phone</th>
											<th>CV</th>
											<th>Address</th>
											<th>Message</th>
										
										</tr>
									</thead>
									<tbody>
										<?php
										$i=1;
										$events=$header->getevents();
										foreach ($events as $page) {
											echo "<tr><td>".$i."</td><td>".$page['Name']."</td><td>".$page['Age']."</td><td>"
											.$page['Gender']."</td><td>".$page['Email']."</td><td>".$page['Phone']."</td><td><a href='../cv/".$page['proficient']."'>view</a></td><td>".$page['City']."" .$page['State']."</td><td>".$page['Messege'].
											"</td></tr>";
											
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
require ('include/footer.php');
require ('include/script.php');
?>