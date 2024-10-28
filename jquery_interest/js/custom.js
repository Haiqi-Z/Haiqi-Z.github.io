$(document).ready(function(){

	$("#cloth h1").velocity("callout.tada");
	$("#cloth").animate({
		"top":"-=100vh",
	},6000);
	


	$("#close").click(function(){
		$("#cookie").css("display","none");
	});

	$("#notebook").click(function(){
		var cstmHTML = "<ul>"
		cstmHTML += "<li><a href='signup.html'>signup/login</a></li>"
		cstmHTML += "<li>create new collection</li>"
		cstmHTML += "<li>view my collection</li>"
		cstmHTML += "</ul>"
		cstmHTML += "<i class='bi bi-x-circle' id='close_note'></i>"

		$("#notebook_box").html(cstmHTML);
		$("#notebook_box ul").css("list-style","none");
		$("#notebook_box").css("display","flex");
		$("#close_note").click(function(){
			$("#notebook_box").css("display","none");
		});

	});
});