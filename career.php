<?php
require('include/head.php');
?>
<link rel="stylesheet" href="build.css" />
<style>
    .formsub{
        vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    outline: 0;
    padding: 0;
    margin: 0;
    border: 0;
    }
</style>
<?php
require('include/headstyle.php');

require('include/othernav.php');
?>





<div class='page-header  page-header_align_center' style="background-color:#f4f6fd; height:220px; margin-bottom:50px; padding-top:0px; padding-bottom:0px;">
    <div class='page-header_wrapper'>
        <div class='wgl-container'>
            <div class='page-header_content'>
                <h1 class='page-header_title' style="color:#252525; font-size:42px; line-height:54px;">Career</h1>
                <div class='page-header_breadcrumbs' style="color:#252525; font-size:16px; line-height:34px;">
                    <div class="breadcrumbs"><a href="index.php" class="home">Home</a> <span class="divider"></span> <span class="current">Career</span></div><!-- .breadcrumbs -->
                </div>
            </div>
        </div>
    </div>
    <div id="page-title-particles-js" class="particles-js" data-particles-type="hexagons" data-particles-number="30" data-particles-line="false" data-particles-size="5" data-particles-speed="2" data-particles-hover="false" data-particles-hover-mode="bubble" data-particles-colors-type="random_colors" data-particles-color="#ff7e00,#3224e9,#69e9f2"></div>
</div>
<main id="main">
    <div class="wgl-container">
        <div class="row ">
            <div id='main-content' class="wgl_col-12">
                <div class="row">











                <?php
									
                $jobs=$employee->webjob();

                foreach ($jobs as $job) {
?>
                    <div class="col-md-4">
                        <div class="Box m-4">
                            <div class="Box-row Box-row--unread">
                                <div class="CircleBadge CircleBadge--small bg-green float-left d-block mr-3 text-center">
                                    <img src="wp-content/uploads/2021/02/Hyginos_Logo_white.png" alt="">
                                </div>
                                <h4><?php echo $job['Title'];?></h4>
                                <span><?php echo $job['Company'];?></span><br />
                                <span><?php
                                $tages=explode(',',$job['Tags']);
           $length = count($tages);
           for ($i = 0; $i < $length; $i++) { ?>
            <label class="Label Label--gray mr-1"><?php echo $tages[$i] ?></label>

          <?php  } ?>
                                 
                                </span>
                            </div>
                            <div class="Box-row">
                            <?php echo $job['Description'];?>
                            </div>
                        </div>

                    </div>


<?php } ?>










                </div>

                <section class="vc_section">
                    <div class="vc_row wpb_row vc_row-fluid wgl-row-animation">
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">
                                    <div id=seofy_dbl_60657fb199445 class="seofy_module_double_headings acenter   wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                        <div class="heading_title" style="font-size:36px; line-height:1.333; font-weight:800; "><span class="heading_divider"></span>
                                            <div>Join Our Team</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="particles_60657fb199525" class="particles-js" style="top:0%; left:0%; width:100%; height:100%; " data-particles-type="particles" data-particles-number="50" data-particles-color="#ff7e00,#3224e9,#69e9f2" data-particles-line="false" data-particles-size="10" data-particles-speed="2" data-particles-hover="true" data-particles-hover-mode="grab" data-particles-colors-type="random_colors"></div>
                    </div>
                </section>
                <div class="vc_row wpb_row vc_row-fluid">
                    <div class="wpb_column vc_column_container vc_col-sm-12">
                        <div class="vc_column-inner ">
                            <div class="wpb_wrapper">
                                <div class="vc_empty_space" style="height: 32px"><span class="vc_empty_space_inner"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="vc_section">
                    <div class="vc_row wpb_row vc_row-fluid wpb_animate_when_almost_visible wpb_flipInX flipInX wgl-row-animation">
                        <div class="wpb_column vc_column_container vc_col-sm-12">
                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">


                                    <div role="form" class="formsub" id="wpcf7-f2557-p2553-o1" lang="en-US" dir="ltr">
                                        
                                    <div class="screen-reader-response">
                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                            <ul></ul>
                                        </div>
                                        <form action="" method="post" class="wpcf7-form init" enctype="multipart/form-data" >

                                            <p><label> Your Name<br />
                                                    <span class="wpcf7-form-control-wrap your-name"><input type="text" name="name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-group" aria-required="true" aria-invalid="false" /></span> </label></p>
                                                    <p><label> Your Phone No.<br />
                                                    <span class="wpcf7-form-control-wrap your-name"><input type="text" name="phone" value="" size="40" class="wpcf7-form-control wpcf7-text input-group" aria-required="true" aria-invalid="false" /></span> </label></p>
                                                    <p><label> Your Email:<br />
                                                    <span class="wpcf7-form-control-wrap your-email"><input type="email" name="email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-group" aria-required="true" aria-invalid="false" /></span> </label></p>
                                            <p><label> Position: <span class="wpcf7-form-control-wrap post_name"><select name="position" class="wpcf7-form-control wpcf7-select wpcf7-validates-as-required input-group" aria-required="true" aria-invalid="false">
                                                            <option value="">---</option>
                                                            <?php foreach ($jobs as $job) { ?>
                                                                <option value="<?php echo $job['Title'];?>"><?php echo $job['Title'];?></option>
                                                                <?php } ?>
                                                           
                                                           
                                                        </select></span> </label></p>
                                            <p><label> Upload Resume <small style="color:red;">* (2 MB Limit)</small>: <span class="wpcf7-form-control-wrap resume_file"><input type="file" name="cv" size="40" class="wpcf7-form-control wpcf7-file wpcf7-validates-as-required input-group" accept=".pdf" aria-required="true" aria-invalid="false" /></span> </label></p>
                                            <p><label> Any Note (optional):<br />
                                                    <span class="wpcf7-form-control-wrap your-message"><textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea input-group" aria-invalid="false"></textarea></span> </label></p>
                                            <p>
                                                <center><input type="submit" value="Submit" name="jobsubmit" class="wpcf7-form-control wpcf7-submit" /></center>
                                            </p>
                                            <div class="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="particles_60657fb19a80f" class="particles-js" style="top:0%; left:0%; width:100%; height:100%; " data-particles-type="particles" data-particles-number="50" data-particles-color="#ff7e00,#3224e9,#69e9f2" data-particles-line="false" data-particles-size="10" data-particles-speed="2" data-particles-hover="true" data-particles-hover-mode="grab" data-particles-colors-type="random_colors"></div>
                    </div>
                </section>
            </div>

        </div>
    </div>

</main>





<?php

if(isset($_POST['jobsubmit'])){
  $name=$_POST['name'];
  $phone=$_POST['phone'];
  $email=$_POST['email'];
  $position=$_POST['position'];
  $msg=$_POST['message'];
  $filename = $_FILES['cv']['name'];
	if(!empty($filename)){
				$ext = pathinfo($filename, PATHINFO_EXTENSION);
				$new_filename = rand(10,10000)."_".$name.'.'.$ext;
				move_uploaded_file($_FILES['cv']['tmp_name'], 'cv/'.$new_filename);	
			}
			else{
				$new_filename = '';
			}
  $contact=$header->jobapply($name,$phone,$email,$position,$msg,$new_filename);
  $to=$email;
  $from=$name;
  $name= "hr@for-catering.com";
  $subj ="Contact Enquiry";
  //$mssg = $msg."<br>Name:-".$name."<br>Phone:-".$phone."<br>Address:-".$city." ".$state; 
  $new_filename="";
  //$error=smtpmailer($to,$from, $name ,$subj, $mssg,$new_filename);
}
?>







<?php
require('include/footer.php');
require('include/footerscript.php');
?>