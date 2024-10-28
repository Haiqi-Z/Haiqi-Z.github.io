<!DOCTYPE html>
<html>
  <head>
    <title> Web Development Class Work Demonstration </title>
    <link rel="StyleSheet" href="custom.css"/>
    <link rel="stylesheet" media="only screen and (max-width: 480px)" href="../css/mobile.css"/>
    <link rel="stylesheet" media="only screen and (min-width: 481px) and (max-width: 960px)" href="../css/tablet.css"/>
  </head>
  <body>
    <h1 class="addSpace">Web Development and Programming Assignment 7: Quiz Result</h1>
    <?php
      $num_correct = 0;
      $q1_answer = $_GET["q1"];
      $q2_answer = $_GET["q2"];
      $q3_answer = $_GET["q3"];
      $q4_answer = $_GET["q4"];
      if ($q1_answer == "300")
      {
        $num_correct++;
      }
      if ($q2_answer == "12")
      {
        $num_correct++;
      }
      if ($q3_answer == "1854")
      {
        $num_correct++;
      }
      if ($q4_answer == "1966")
      {
        $num_correct++;
      }
      $score = $num_correct/4*100;
      print("
        <h3 class='resultQ'>How many student clubs and organizations are there in NYU?</h3>
        <p class='quizR smallSpace'>Your answer is: $q1_answer. The correct answer is 300+. 
        </p>
        <h3 class='resultQ'>How many study away sites does NYU have?</h3>
        <p class='quizR smallSpace'>Your answer is: $q2_answer. The correct answer is 12. 
        </p>
        <h3 class='resultQ'>When was NYU Tandon founded?</h3>
        <p class='quizR smallSpace'>Your answer is: $q3_answer. The correct answer is 1854.
        </p>
        <h3 class='resultQ'>When was NYU Tandon CSSA founded?</h3>
        <p class='quizR smallSpace'>Your answer is: $q4_answer. The correct answer is 1966.
        </p>
        <hr>
        <p class='quizR'>
        You got $num_correct question(s) correct. And your score is $score%.
        </p>
        ");
    ?>
  </body>
</html>