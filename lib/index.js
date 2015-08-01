
window.$ = window.jQuery=require("jquery")
require("bootstrap")

$(window).load(function(){
	$("#1").on("mouseover", function() {
	$(this).css("background","#F3F781");
	});
	$("#2").on("mouseover", function() {
	$(this).css("background","#81BEF7");
	});
	$("#3").on("mouseover", function() {
	$(this).css("background","#F5A9A9");
	});
	$("#4").on("mouseover", function() {
	$(this).css("background","#D0A9F5");
	});
	$("#5").on("mouseover", function() {
	$(this).css("background","#9FF781");
	});


	$(".correo").click(function() {
		//onclick=location.target="_blank".href="http://www.google.com";
		window.location=$(this).find("a").attr("href");
		return false;
	   });
	$(".face").click(function() {
		//onclick=location.target="_blank".href="http://www.google.com";
		window.location=$(this).find("a").attr("href");
		return false;
	   });
	$(".twet").click(function() {
		//onclick=location.target="_blank".href="http://www.google.com";
		window.location=$(this).find("a").attr("href");
		return false;
	   });
});