<!DOCTYPE html>
<html>
  <head>
    <title> Web Development Class Work Demonstration </title>
    <link rel="StyleSheet" href="custom.css"/>
    <link rel="stylesheet" media="only screen and (max-width: 480px)" href="../css/mobile.css"/>
    <link rel="stylesheet" media="only screen and (min-width: 481px) and (max-width: 960px)" href="../css/tablet.css"/>
  </head>
  <body>
    <h1 class="addSpace">Web Development and Programming Assignment 7: Madlibs Output</h1>
    <?php
      $adj1 = $_GET['adj1'];
      $adj2 = $_GET['adj2'];
      $noun1 = $_GET['noun1'];
      $verb1 = $_GET['verb1'];
      $noun2 = $_GET['noun2'];
      $num = $_GET['num'];
      $verb2 = $_GET['verb2'];
      $noun3 = $_GET['noun3'];
      print("<p id='madlib'>The $adj1 $noun1 $verb1 the $adj2 house. <br> There she saw a $noun2 $verb2 $num $noun3.  </p>");
    ?>
  </body>
</html>