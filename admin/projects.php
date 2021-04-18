<?php
require ('include/head.php');
require ('include/header.php');
require ('include/sidebar.php');
if(isset($_GET['id'])){
  $id=$_GET['id'];
  $status=$_GET['status'];
  $change=$sections->changeproject($id,$status);
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
                  <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
                </ol>
              </nav>
            </div>
          </div>
          <!--end breadcrumb-->
          <div class="card">
            <div class="card-body">
              <div class="card-title">
                <h4 class="mb-0">Portfolio</h4>
                  <a href='add_project.php' class="btn btn-primary" >Add New Portfolio</a>
              </div>
              <hr/>
              <div class="table-responsive">
                <table id="example" class="table table-striped table-bordered" style="width:100%">
                  <thead>
                    <tr>
                      <th>SNo:</th>
                      <th>Title</th>
                      <th>Link</th>
                      <th>Bg-image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php
                    $i=1;
                    $blog=$sections->getAllprojects();
                    foreach ($blog as $page) {
                        echo "<tr>
                        <td>".$i."</td>";?>

                       <td style="
             overflow: hidden;
             display: inline-block;
             white-space: word-wrap;">
        <div style="white-space: normal; word-wrap: break-word; word-break: break-word;">
                      <?php echo $page['Title'];?></td></div>
                      <?php echo "<td>";?>
                        <a href="<?php echo $page['Paragraph'];?>" >Goto</a>
                      </td><td>
                        <a href="#image" class="image" data-toggle='modal' data-id='<?php echo $page['Bg_img'];?>'>View</a>

                        <?php echo"</td>";?>
                         
                  
                      <td>
                      <?php
                                            if($page['Status']==1){?>
                                                <a href='projects.php?id=<?php echo $page['ID']."&status=0";?>' class="btn btn-primary">Activated</button>
                                            <?php } else { ?>
                                                <a href='projects.php?id=<?php echo $page['ID']."&status=1";?>' class="btn btn-danger">Deactivated</button>
                                           <?php } ?>
                      <a href='edit_project.php?id=<?php echo $page['ID'];?>' class="btn btn-primary">Edit</button></td>
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
require ('include/footer.php');
require ('include/script.php');
?>