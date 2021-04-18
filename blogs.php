<?php
require('include/head.php');

require('include/headstyle.php');

require('include/othernav.php');
?>





<div class='page-header  page-header_align_center' style="background-color:#f4f6fd; height:220px; margin-bottom:50px; padding-top:0px; padding-bottom:0px;">
    <div class='page-header_wrapper'>
        <div class='wgl-container'>  
            <div class='page-header_content'>
                <h1 class='page-header_title' style="color:#252525; font-size:42px; line-height:54px;">Blogs</h1>
                <div class='page-header_breadcrumbs' style="color:#252525; font-size:16px; line-height:34px;">
                    <div class="breadcrumbs"><a href="index.php" class="home">Home</a> <span class="divider"></span> <span class="current">Blogs</span></div><!-- .breadcrumbs -->
                </div>
            </div>
        </div>
    </div>
    <div id="page-title-particles-js" class="particles-js" data-particles-type="hexagons" data-particles-number="30" data-particles-line="false" data-particles-size="5" data-particles-speed="2" data-particles-hover="false" data-particles-hover-mode="bubble" data-particles-colors-type="random_colors" data-particles-color="#ff7e00,#3224e9,#69e9f2"></div>
</div>
<main id="main">
    <div class="wgl-container">
        <div class="row ">
            <div id='main-content' class="wgl_col-8">
                    <div class="articles-wrapper row">
                    <?php 
$blog=$blogs->webblog();
//print_r($blog);

            
              foreach ($blog as $key) {?>

                    <div class="vc_col-sm-6">
                    <div class="article ">
                            <div class="wrap">
                                <div class="source">
                                    <div class="author">
                                        <p class="author-name"><?php echo$key['Category'];?></p>
                                        <p class="author-date"><?php echo$key['Addon'];?></p>
                                    </div>
                                </div>
                                <div class="top" style="background-image: url('assets/img/<?php echo $key['Image'];?>');">
                                    <div class="vignette"></div>
                                    <h5><?php echo$key['Title'];?></h5>
                                </div>
                                <div class="bottom">
                                    <div class="description"><?php echo$key['Blog'];?></div>
                                </div>
                                <div class="hover-area" style="background-image: url(" http://blog.connatix.com/wp-content/uploads/2017/06/pexels-photo-256738.jpeg");">
                                    <div class="flare"></div>
                                   
                                    <a class="apply" href="blog.php?id=<?php echo$key['ID'];?>">Full Article</a>
                                </div>
                            </div>
                        </div>
                    </div>



                   <?php   }   ?>
                  
                    </div>



            </div>

        </div>
    </div>

</main>













<?php
require('include/footer.php');
require('include/footerscript.php');
?>