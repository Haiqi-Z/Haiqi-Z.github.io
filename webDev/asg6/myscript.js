$(function()
{

	$("#changeStyles").click(function()
	{
		$("#highlight").css("background-color","yellow");
		$("p").each(function()
		{
			$(this).css("width", "150px");
			$(this).css("background-color", "#BCEABE");
			$(this).css("color", "white");
			alert($(this).html());
		});
		$("#special").css("color","green");
	});

	$("#show").click(function()
	{
		$("#img1").show();
	});

	$("#hide").click(function()
	{
		$("#img1").hide();
	});

	$("#fadeOut").click(function()
	{
		$("#img1").fadeOut(3000);
	});

	$("#animateBtn").click(function()
	{
		$("#animate").animate({
			left: '300px',
			opacity: '0.5',
			height: '+=100px',
			width: '+=100px'
		});
	});

	$("#username").blur(function()
	{
		let $pwd = $("#password").val();
		let $usn = $("#username").val();
		if ($usn=="")
		{
			$("#username").css("background-color","yellow");
			alert("You must enter your username!");
			return;
		}
		else if($pwd=="")
		{
			$("#password").css("background-color","yellow");
			alert("You must enter your password!");
			return;
		}
		else
		{
			$("#demo").html("<h3> Username: " + $usn + "</h3>" +"<h3> Password: " + $pwd + "</h3>")
		}
	});
	$("#password").blur(function()
	{
		let $pwd = $("#password").val();
		let $usn = $("#username").val();
		if ($pwd=="")
		{
			$("#password").css("background-color","yellow");
			alert("You must enter your password!");
			return;
		}
		else if($usn=="")
		{
			$("#username").css("background-color","yellow");
			alert("You must enter your username!");
			return;
		}
		else
		{
			$("#demo").html("<h3> Username: " + $usn + "</h3>" +"<h3> Password: " + $pwd + "</h3>")
		}
	});
});