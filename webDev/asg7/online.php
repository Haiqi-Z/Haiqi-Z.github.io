<!DOCTYPE html>
<html>
  <head>
    <title> Web Development Class Work Demonstration </title>
    <link rel="StyleSheet" href="custom.css"/>
    <link rel="stylesheet" media="only screen and (max-width: 480px)" href="../css/mobile.css"/>
    <link rel="stylesheet" media="only screen and (min-width: 481px) and (max-width: 960px)" href="../css/tablet.css"/>
  </head>
  <body>
    <h1 class="addSpace">Web Development and Programming Assignment 7: Receipt Page</h1>
    <?php
      $name = $_POST['name'];
      $email = $_POST['email'];
      $flavor = $_POST['flavor'];
      $num = $_POST['quant'];
      if ($flavor == "Egg Pork Rice Roll(s)")
      {
        $total = $num * 4;
      }
      if ($flavor == "Shrimp Rice Roll(s)")
      {
        $total = $num * 5;
      }
      print("<h2>Thank you for your purchase! Here is your receipt: </h2> <hr> <p id='store'>
        Name: $name <br> email: $email <br> You purchased $num $flavor. The total is $ $total. 
      </p>");
    ?>
  </body>
</html>