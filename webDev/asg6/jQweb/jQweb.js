$(function() 
	{
		$("h1").hide().delay(500).fadeIn(1000);
		$("nav").hide().delay(500).fadeIn(1000);

		$("a").eq(0).click(function()
		{
			let $aText = "<h3>Shenzhen Middle School (SMS) is a well-known educational institution located in Shenzhen, Guangdong Province, China. It is one of the top-ranking and prestigious schools in the region.</h3>";
			$aText+="<br><h3>Founded in 1951, Shenzhen Middle School has a long history and has played a significant role in the educational development of Shenzhen, a city that has experienced rapid growth and transformation over the years. The school is known for its academic excellence, rigorous curriculum, and high standards.</h3>";
			$("#about").html($aText);
			$("#about").show();
			$("#video").hide();
			$("#photos").hide();
		});

		$("a").eq(1).click(function()
		{
			let $video1 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/cxv8CrpaNQY?si=uavio4C2CpcxECkm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
			$("#video").html($video1);
			$("#video").show();
			$("#about").hide();
			$("#photos").hide();
		});

		$("a").eq(2).click(function()
		{
			let $img1 = '<img src="sms1.png" class="image">';
			let $img2 = '<img src="sms5.png" class="image">';
			$("#photos").html($img2 + "<br>" + $img1);
			$("#photos").show();
			$("#about").hide();
			$("#video").hide();
		});
	});