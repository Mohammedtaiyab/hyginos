<?php
require('include/head.php');

require('include/headstyle.php');
require('include/othernav.php');
?>



<div class='page-header  page-header_align_center' style="background-color:#f4f6fd; height:220px; margin-bottom:50px; padding-top:0px; padding-bottom:0px;">
	<div class='page-header_wrapper'>
		<div class='wgl-container'>
			<div class='page-header_content'>
				<h1 class='page-header_title' style="color:#252525; font-size:42px; line-height:54px;">Contact Us</h1>
				<div class='page-header_breadcrumbs' style="color:#252525; font-size:16px; line-height:34px;">
					<div class="breadcrumbs"><a href="index.php" class="home">Home</a> <span class="divider"></span> <span class="current">Contact Us</span></div><!-- .breadcrumbs -->
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
				<div class="vc_row wpb_row vc_row-fluid">
					<div class="wpb_column vc_column_container vc_col-sm-6">
						<div class="vc_column-inner ">
							<div class="wpb_wrapper">
								<div id=seofy_dbl_60657eeee2c54 class="seofy_module_double_headings aleft ">
									<div class="heading_title" style="font-size:36px; line-height:1.333; font-weight:800; "><span class="heading_divider"></span>
										<div>Get in Touch</div>
									</div>
								</div>
								<div class="seofy_module_spacing">
									<div class="spacing_size spacing_size-initial" style="height:20px;"></div>
								</div>
								<div class="seofy_module_text" style="font-size:18px;line-height:30px;">HYGINOS is a IT company , that deliver<br />
									IT services to companies worldwide. Contact<br />
									us today to find out how we can help you.</div>
								<div class="seofy_module_spacing">
									<div class="spacing_size spacing_size-initial" style="height:26px;"></div>
								</div>
								<div id=seofy_infobox_60657eeee314d class="seofy_module_infobox type_default layout_left infobox_alignment_left ">
									<div class="infobox_wrapper">
										<div class="infobox_icon_wrapper" style="margin-right:25px; ">
											<div class="infobox_icon_container" style="width:50px; height:50px; "><i class="infobox_icon flaticon-map" style="font-size:25px;"></i></div>
										</div>
										<div class="infobox_content_wrapper">
											<?php $about = $employee->aboutus(); ?>
											<h3 class="infobox_title" style="font-size:18px; font-weight:700; margin-bottom:0px; ">Head office / registered office:</h3>
											<div class="infobox_content" style="font-size:18px; width:50%"><?php echo $about[0]['Headoffice']; ?></div>
										</div>
									</div>
								</div>
								<div class="seofy_module_spacing">
									<div class="spacing_size spacing_size-initial" style="height:21px;"></div>
								</div>
								<div id=seofy_infobox_60657eeee3509 class="seofy_module_infobox type_default layout_left infobox_alignment_left ">
									<div class="infobox_wrapper">
										<div class="infobox_icon_wrapper" style="margin-right:25px; ">
											<div class="infobox_icon_container" style="width:50px; height:50px; "><i class="infobox_icon flaticon-map" style="font-size:25px;"></i></div>
										</div>
										<div class="infobox_content_wrapper">
											<h3 class="infobox_title" style="font-size:18px; font-weight:700; margin-bottom:0px; ">Branch:</h3>
											<div class="infobox_content" style="font-size:18px; width:50%"><?php echo $about[0]['Branchoffice']; ?></div>
										</div>
									</div>
								</div>
								<div class="seofy_module_spacing">
									<div class="spacing_size spacing_size-initial" style="height:21px;"></div>
								</div>
								<div id=seofy_infobox_60657eeee3892 class="seofy_module_infobox type_default layout_left infobox_alignment_left ">
									<div class="infobox_wrapper">
										<div class="infobox_icon_wrapper" style="margin-right:25px; ">
											<div class="infobox_icon_container" style="width:50px; height:50px; "><i class="infobox_icon flaticon-mail" style="font-size:25px;"></i></div>
										</div>
										<div class="infobox_content_wrapper">
											<h3 class="infobox_title" style="font-size:18px; font-weight:700; margin-bottom:0px; ">Mail Us:</h3>
											<div class="infobox_content" style="font-size:18px; "><?php echo $about[0]['Email']; ?></div>
										</div>
									</div>
								</div>
								<div class="seofy_module_spacing">
									<div class="spacing_size spacing_size-initial" style="height:21px;"></div>
								</div>
								<div id=seofy_infobox_60657eeee3892 class="seofy_module_infobox type_default layout_left infobox_alignment_left ">
									<div class="infobox_wrapper">
										<div class="infobox_icon_wrapper" style="margin-right:25px; ">
											<div class="infobox_icon_container" style="width:50px; height:50px; "><i class="infobox_icon flaticon-phone" style="font-size:25px;"></i></div>
										</div>
										<div class="infobox_content_wrapper">
											<h3 class="infobox_title" style="font-size:18px; font-weight:700; margin-bottom:0px; ">Call Us:</h3>
											<div class="infobox_content" style="font-size:18px;"><?php echo $about[0]['Phone']; ?></div>

										</div>
									</div>
								</div>
								<div class="seofy_module_spacing">
									<div class="spacing_size spacing_size-initial" style="height:21px;"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="wpb_column vc_column_container vc_col-sm-6">
						<div class="vc_column-inner vc_custom_1542726949648">
							<div class="wpb_wrapper">
								<div class="wpb_text_column wpb_content_element  vc_custom_1542726008557 box-shadow">
									<div class="wpb_wrapper">
										<h4 style="margin-bottom: 30px;"><span style="font-weight: bold;" class="custom-weight">Drop Us a Line</span></h4>
										<div role="form" class="" id="" lang="en-US" dir="ltr">
											<div class="screen-reader-response">
												<p role="status" aria-live="polite" aria-atomic="true"></p>
												<ul></ul>
											</div>
											<form action="contactus.php" method="post" class="wpcf7-form init" >
												
												<div class='row'>
													<div class='wgl_col-12'><span class="wpcf7-form-control-wrap text-759"><input type="text" name="name" value="" size="40" class="" placeholder="Name *" /></span></div>
													<div class='wgl_col-12'><span class=""><input type="text" name="phone" value="" size="40" class="" placeholder="Phone No. *" /></span></div>
													 <div class='wgl_col-12'><span class="wpcf7-form-control-wrap "><input type="email" name="email" value="" size="40" class="wpcf7-form-control  " placeholder="Email *" /></span></div>
													<div class='wgl_col-12'><span class="wpcf7-form-control-wrap ">
													<select name="required" class="wpcf7-form-control" aria-required="true">
                                                            <option value="">Type Of Service Required</option>
                                                            <option value="Web Development">Web Development</option>
                                                            <option value="Mobile Application">Mobile Application </option>
															<option value="Digital Marketing">Digital Marketing</option>
                                                            <option value="Cloud Computing">Cloud Computing</option>
															<option value="Artifical Intelligence">Artifical Intelligence</option>
                                                            <option value="Machine Learning">Machine Learning</option>
															<option value="IT Consultancy">IT Consultancy</option>
                                                            <option value="Software Testing">Software Testing</option>
															<option value="UI/UX Designing">UI/UX Designing</option>
                                                            <option value="Internet Of Things">Internet Of Things</option>
                                                        </select>	

													</span></div>
													
													<div class='wgl_col-12'><span class="wpcf7-form-control-wrap textarea-378"><textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" placeholder="Message..."></textarea></span></div> 
												</div>
												<p><input type="submit" name="contact" value="SEND A MESSAGE" class="" /></p>
												<div class="wpcf7-response-output" aria-hidden="true"></div>
											</form>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</main>



<?php

if(isset($_POST['contact'])){
  $name=$_POST['name'];
  $phone=$_POST['phone'];
  $email=$_POST['email'];
  $required=$_POST['required'];
  $msg=$_POST['message'];
  $contact=$header->savecontact($name,$phone,$email,$required,$msg);
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