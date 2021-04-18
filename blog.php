<?php
require('include/head.php');

require('include/headstyle.php');
?>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
<style>
* Text Centering Shortcut */
.horizontal-center {
  text-align: center;
}
.table {
  display: table;
}
.table-row {
  display: table-row;
}
.vertical-center {
  position: relative;
  display: table-cell;
  vertical-align: middle;
}

/* Navbar */
#navbar {
  margin-bottom: 0;
  font-family: 'ubuntu';
}

/* Page title */
.bg {
  position: absolute; 
  top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%;
}
.bg img {
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
}
#page-title {
  position: relative;
  width: 100%;
  color: white;
  background-color: #1f4a6f;
  font-family: 'ubuntu';
  overflow: hidden;
}
#title-image {
  filter:alpha(opacity=80);
  opacity: 0.8;
  -moz-opacity:0.8;
}
#page-title .container {
  min-height: 350px;
  display: table;
}
#page-title .article-title, #page-title .article-subtitle {
  text-shadow: 0px 0px 40px black;
}

/* Article */
article {
  font-family: 'roboto';
  font-size: 1.1em;
}
article h2, article h3 {
  font-family: 'ubuntu'
}
.author {
  margin-top: 15px;
  margin-bottom: 15px;
}
.author-image {
  margin-right: 10px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.author-name {
  font-size: 1.3em;
}

/* Pager */
.pager {
  font-family: 'ubuntu';
}



/* Social Button List */
.social-cont {
  margin-top: 20px;
}

/* Image List */
.image-list {
  list-style: none;
  padding-left: 0;
}
.image-list li {
  padding-bottom: 5px;
  display: table-row;
}
.image-list img {
  width: 40px;
  height: 40px;
}
.image-list .vertical-center {
  padding-bottom: 6px;
}

/* Tag List */
.tag-cont .btn {
  margin-right: 4px;
  margin-bottom: 7px;
  color: #333;
}
.tag-cont .btn:hover {
  background-color: #eee;
}

</style>
<?php
require('include/othernav.php');
?>







<?php $id=$_GET['id'];
          $blog=$blogs->getDatabyid($id);
    
          ?>

<div class='page-header  page-header_align_center' style="background-color:#f4f6fd; height:220px; margin-bottom:50px; padding-top:0px; padding-bottom:0px;">
    <div class='page-header_wrapper'>
        <div class='wgl-container'>  
            <div class='page-header_content'>
                <h1 class='page-header_title' style="color:#252525; font-size:42px; line-height:54px;">  <?php echo $blog[0]['Title'];?></h1>
                <div class='page-header_breadcrumbs' style="color:#252525; font-size:16px; line-height:34px;">
                <div class="breadcrumbs"><a href="index.php" class="home">Home</a> <span class="divider"></span> <a href="blogs.php" class="home">Blogs</a> <span class="divider"></span><span class="current">Blog</span> </div><!-- .breadcrumbs -->
                </div>
            </div>
        </div>
    </div>
    <div id="page-title-particles-js" class="particles-js" data-particles-type="hexagons" data-particles-number="30" data-particles-line="false" data-particles-size="5" data-particles-speed="2" data-particles-hover="false" data-particles-hover-mode="bubble" data-particles-colors-type="random_colors" data-particles-color="#ff7e00,#3224e9,#69e9f2"></div>
</div>
<div class="container foreground">
  <div class="row">
    <div class="col-lg-12">
      <div class="bs-component">
        <article>
        <?php echo $blog[0]['Blog'];?>

  
          <div class="horizontal-center">
            <div class="author">
              <a href="#">
                <img src="assets/img/<?php echo $blog[0]['Image'];?>" class="">
              </a>
            </div>
            <div class="date-published">
            <?php echo $blog[0]['Category']."    ".$blog[0]['Addon'];?>
            </div>
          </div>
        </article>
      </div>

    
    </div>
  </div>
</div>

<footer>
  <div class="container">
    <div class="row">
    <div class="col-sm-4">
        <h3><i class="fa fa-tags"></i> Categories</h3>
        <div class="tag-cont"><?php
        $cate=$blogs->getcategory();
//print_r($blog);

            
              foreach ($cate as $key) {?>
        
          <button type="submit" class="btn"><?php echo$key['Category'];?></button>
          <?php } ?>
        
        </div>
      </div>
      <div class="col-sm-4">
        <h3><i class="fa fa-newspaper-o"></i> Recent Posts</h3>

        <div class="recent-posts-cont">
          <ul class="image-list">
          <?php 
$blog=$blogs->recenblog();
//print_r($blog);

            
              foreach ($blog as $key) {?>
            <li class="table">
              <a href="blog.php?id=<?php echo$key['ID'];?>" class="table-row">
                <div class="vertical-center">
                  <img src="assets/img/<?php echo$key['Image'];?>" class="author-image">
                </div>
                <div class="vertical-center article-title">
                <?php echo$key['Title'];?>
                </div>
              </a>
            </li>
           <?php } ?>
          </ul> 
        </div>

      </div>
      <div class="col-sm-4">
        <h3><i class="fa fa-tags"></i> Tags</h3>
        <div class="tag-cont"><?php
           $tages=explode(',',$blog[0]['Tags']);
           $length = count($tages);
           for ($i = 0; $i < $length; $i++) { ?>
          <button type="submit" class="btn"><?php echo $tages[$i] ?></button>

          <?php  } ?>
         
        </div>
      </div>
    </div>
  </div>
</footer>



<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<?php
require('include/footer.php');
require('include/footerscript.php');
?>