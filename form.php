<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta name="author" content="AnonyminHack5">
    
    <title>Subscription Form | TermuxHackz</title>
    
   
    <link rel="stylesheet" href="css/style.css">
    
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    
     <link rel="shortcut icon" href="favicon_io/favicon.ico" type="image/x-icon">
  
  <link rel="shortcut icon" href="favicon_io/android-chrome-192x192.png" type="image/x-icon">
  
  <link rel="shortcut icon" href="favicon_io/android-chrome-512x512.png" type="image/x-icon">
  
  <link rel="shortcut icon" href="favicon_io/apple-touch-icon.png" type="image/x-icon">
  
  <link rel="shortcut icon" href="favicon_io/favicon-16x16.png" type="image/x-icon">
  
  <link rel="shortcut icon" href="favicon_io/favicon-32x32.png" type="image/x-icon">
  
  <link rel="stylesheet" type="text/css" href="css/themify-icons.css">
  
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">

  <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
  
  <link rel="stylesheet" type="text/css" href="vendor/owl-carousel/owl.carousel.css">
  
  <link rel="stylesheet" type="text/css" href="vendor/perfect-scrollbar/css/perfect-scrollbar.css">
  
  <link rel="stylesheet" type="text/css" href="vendor/nice-select/css/nice-select.css">
  
  <link rel="stylesheet" type="text/css" href="vendor/fancybox/css/jquery.fancybox.min.css">
  
  <link rel="stylesheet" type="text/css" href="css/virtual.css">
  
  <link rel="stylesheet" type="text/css" href="css/topbar.virtual.css">
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js">
</script>

</head>
<body>
  <noscript>
    <div class="popup" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); z-index: 9999;">
      <div class="popup-content" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background-color: #fff;">
        <h2 style="color: red;">Oops!!, JavaScript disabled in your browser!</h2>
        <p style="color: black;">This site uses Javascript, Please enable JavaScript from your browser settings to use this website.</p>
      </div>
    </div>
  </noscript>
<body oncontextmenu="return false;">
  <style>
  p {
  user-select: none;
  }
  body {
  user-select: none;
  }
  </style>
  
  <input type="checkbox" id="toggle">
  <label for="toggle" class="show-btn">Show Modal</label>
  <div class="wrapper">
    <label for="toggle">
    <i class="cancel-icon fas fa-times"></i>
    </label>
    <div class="icon"><i class="far fa-envelope"></i></div>
    <div class="content">
      <header>Become a Subscriber</header>
      <p>Subscribe to our blog and get the latest updates straight to your inbox.</p>
    </div>
    <form action="form.php" method="POST" autocomplete="on">
    <?php 
    $userEmail = ""; //first we leave email field blank
    if(isset($_POST['subscribe'])){ //if subscribe btn clicked
      $userEmail = $_POST['email']; //getting user entered email
      if(filter_var($userEmail, FILTER_VALIDATE_EMAIL)){ //validating user email
        $subject = "Thanks for Subscribing us - TermuxHackz";
        $message = "Thanks for subscribing to our blog. You'll always receive updates from us. And we won't share and sell your information.";
        $sender = "From: AnonyminHack5@protonmail.com";
        //php function to send mail
        if(mail($userEmail, $subject, $message, $sender)){
          ?>
           <!-- show sucess message once email send successfully -->
          <div class="alert success-alert">
            <?php echo "Thanks for Subscribing us." ?>
          </div>
          <?php
          $userEmail = "";
        }else{
          ?>
          <!-- show error message if somehow mail can't be sent -->
          <div class="alert error-alert">
          <?php echo "Failed while sending your mail!" ?>
          </div>
          <?php
        }
      }else{
        ?>
        <!-- show error message if user entered email is not valid -->
        <div class="alert error-alert">
          <?php echo "$userEmail is not a valid email address!" ?>
        </div>
        <?php
      }
    }
    ?>
      <div class="field">
        <input type="text" class="email" name="email" placeholder="Email Address" required value="<?php echo $userEmail ?>">
      </div>
      <div class="field btn">
        <div class="layer"></div>
        <button type="submit" name="subscribe">Subscribe</button>
      </div>
    </form>
    <div class="text">We do not share your information.</div>
    <div class="text">Click <a href="index.html">here</a> to back.</div>
  </div>

<script src="js/jquery-3.5.1.min.js"></script>
    
  <script src="js/bootstrap.bundle.min.js"></script>
    
  <script src="vendor/owl-carousel/owl.carousel.min.js"></script>
    
  <script src="vendor/perfect-scrollbar/js/perfect-scrollbar.js"></script>
    
  <script src="vendor/isotope/isotope.pkgd.min.js"></script>
    
  <script src="vendor/nice-select/js/jquery.nice-select.min.js"></script>
    
  <script src="vendor/fancybox/js/jquery.fancybox.min.js"></script>

  <script src="vendor/wow/wow.min.js"></script>

  <script src="vendor/animateNumber/jquery.animateNumber.min.js"></script>

  <script src="vendor/waypoints/jquery.waypoints.min.js"></script>

  <script src="js/google-maps.js"></script>
    
  <script src="js/topbar-virtual.js"></script>
  

</body>
</html>
