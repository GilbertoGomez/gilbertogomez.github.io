
window.$ = window.jQuery=require("jquery")


$(document).ready(function(){
	$('.modal-trigger').leanModal();

	$('#main').addClass('animated zoomIn');


	var options = [
	   {selector: '.fadeIn1', offset: 100, callback: 'Materialize.fadeInImage(".fadeIn1")' },
	   {selector: '#educacion', offset: 200, callback: '$("#educacion").addClass("animated bounce")'},
	   {selector: '.experiencia', offset: 200, callback: '$(".experiencia").addClass("animated bounce")'},
	 ];
	 Materialize.scrollFire(options);	
	 $(".button-collapse").sideNav();	
});


