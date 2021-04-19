<?php
require ('include/head.php');
require ('include/header.php');
require ('include/sidebar.php');
if(isset($_GET['id'])){
  $id=$_GET['id'];
  $status=$_GET['status'];
  $change=$employee->jobstatus($id,$status);
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
                  <li class="breadcrumb-item active" aria-current="page">Career</li>
                </ol>
              </nav>
            </div>
          </div>
          <!--end breadcrumb-->
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h4 class="mb-0">Jobs</h4>
                  <a href='add_job.php' class="btn btn-primary" >Add New Vacancy</a>
              </div>
              <hr/>
              <div class="table-responsive">
                <table id="example" class="table table-striped table-bordered" style="width:100%">
                  <thead>
                    <tr>
                      <th>SNo:</th>
                      <th>Date</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Company</th>
                      <th>Tags</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php
                    $i=1;
                    $blog=$employee->getAllData();
                    foreach ($blog as $page) {
                        echo "<tr>
                        <td>".$i."</td>
                      <td>".$page['Addon']."</td>";?>

                       <td style="
             overflow: hidden;
             display: inline-block;
             white-space: word-wrap;">
        <div style="white-space: normal; word-wrap: break-word; word-break: break-word;">
                      <?php echo $page['Title'];?></td></div>
                      <?php echo "<td>";?>
                        <a href="#paragraph" class="paragraph" data-toggle='modal' data-id='<?php echo $page['Description'];?>'>View</a>
                      </td>
                        <?php echo"
                      <td>".$page['Company']."</td>";?>
                         <td style="
             overflow: hidden;
             display: inline-block;
             white-space: word-wrap;
             border: 0;">
        <div style="white-space: normal; word-wrap: break-word; word-break: break-word;"><?php echo $page['Tags'];?></div>


      </td>
                
                  
                      <td>
                      <?php
                                            if($page['Status']==1){?>
                                                <a href='career.php?id=<?php echo $page['ID']."&status=0";?>' class="btn btn-primary">Activated</button>
                                            <?php } else { ?>
                                                <a href='career.php?id=<?php echo $page['ID']."&status=1";?>' class="btn btn-danger">Deactivated</button>
                                           <?php } ?>
                      <a href='job_edit.php?id=<?php echo $page['ID'];?>' class="btn btn-primary">Edit</button></td>
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
            <div class="card">
						<div class="card-body">
						
							<div class="card-title">
								<h4 class="mb-0">Applications</h4>
							</div>
							<hr/>
							<div class="table-responsive">
								<table id="example" class="table table-striped table-bordered" style="width:100%">
									<thead>
										<tr>
											<th>SNo:</th>
											<th>Full Name</th>
											<th>Email</th>
											<th>Phone</th>
											<th>CV</th>
											<th>Applying for</th>
											<th>Message</th>
										
										</tr>
									</thead>
									<tbody>
										<?php
										$i=1;
										$events=$header->getjobs();
										foreach ($events as $page) {
											echo "<tr><td>".$i."</td><td>".$page['Name']."</td><td>".$page['Email']."</td><td>"
											.$page['Phone']."</td><td><a href='../cv/".$page['CV']."' download>view</a></td><td>" .$page['State']."</td><td>".$page['Messege'].
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
      </div>
      <!--end page-content-wrapper-->
    </div>

<?php
require ('include/modals.php');
require ('include/footer.php');
require ('include/script.php');
?>