<!DOCTYPE html>
<html>
  <head>
    <title> Web Development Class Work Demonstration </title>
    <link rel="StyleSheet" href="custom.css"/>
    <link rel="stylesheet" media="only screen and (max-width: 480px)" href="../css/mobile.css"/>
    <link rel="stylesheet" media="only screen and (min-width: 481px) and (max-width: 960px)" href="../css/tablet.css"/>
  </head>
  <body>
    <h1 class="addSpace">Web Development and Programming Assignment 7: Calculator Output</h1>
    <?php
      $num1 = floatval($_GET['num1']);
      $num2 = floatval($_GET['num2']);
      $operator = $_GET['operator'];
      if ($operator == '+')
      {
        $result = $num1 + $num2;
      }
      if ($operator == '-')
      {
        $result = $num1 - $num2;
      }
      if ($operator == '*')
      {
        $result = $num1 * $num2;
      }
      if ($operator == '/')
      {
        $result = $num1 / $num2;
      }
      print("<p id='calculator'>$num1 $operator $num2 = $result</p>");
    ?>
  </body>
</html>