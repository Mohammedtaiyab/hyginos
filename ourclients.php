<?php
require('include/head.php');
require('include/headstyle.php');
require('include/othernav.php');
?>



<div class='page-header  page-header_align_center' style="background-color:#f4f6fd; height:220px; margin-bottom:50px; padding-top:0px; padding-bottom:0px;">
   <div class='page-header_wrapper'>
      <div class='wgl-container'>
         <div class='page-header_content'>
            <h1 class='page-header_title' style="color:#252525; font-size:42px; line-height:54px;">Our Clients</h1>
            <div class='page-header_breadcrumbs' style="color:#252525; font-size:16px; line-height:34px;">
               <div class="breadcrumbs"><a href="index.php" class="home">Home</a> <span class="divider"></span> <span class="current">Our Clients</span></div>
               <!-- .breadcrumbs -->
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
            <section class="vc_section">
               <div class="vc_row wpb_row vc_row-fluid">


               <?php $project=$sections->getAllprojectsweb();

             
               foreach ($project as $key) {?>
            
                  <div class="wpb_column vc_column_container vc_col-sm-4">
                     <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                           <div class="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_flipInX flipInX  scroll_image">
                              <h2 class="wpb_heading wpb_singleimage_heading"><?php echo$key['Title'];?></h2>
                              <figure class="wpb_wrapper vc_figure">
                                 <a href="<?php echo$key['Paragraph'];?>" target="_blank" class="vc_single_image-wrapper   vc_box_border_grey">
                                 <img width="540" height="1080" src="assets/img/<?php echo$key['Bg_img'];?>" class="vc_single_image-img attachment-full" alt="" loading="lazy"  sizes="(max-width: 540px) 100vw, 540px" /></a>
                              </figure>
                           </div>
                        </div>
                     </div>
                  </div>
                  <?php } ?>
           
                
               </div>



            </section>
         </div>
      </div>
   </div>
</main>





<?php
require('include/footer.php');
require('include/footerscript.php');
?>