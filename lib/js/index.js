function move(id, tiempo){
	tiempo = tiempo || 1000;
	$("html, body").animate({ scrollTop: $(id).offset().top-50 }, tiempo);
}
$(".sendmail").on("click", function(e){
	e.preventDefault(),
	$.ajax({
		url: "send.php",
		type: "POST",
		data: $("#form").serialize()
	}).done(function(mensaje){
		$('.g-recaptcha').attr('disabled', true);
		grecaptcha.reset();
		$("#form")[0].reset();
		$(".mensajes").append(mensaje);
		setTimeout(()=>{
			$(".mensajes").empty();
		},2000)
	})
})
$("#navhelou").on("click", function(e){
	move('#jelou',500);
})
$("#navportafolio").on("click", function(e){
	move('#portafolio',700);
})
$("#naveducacion").on("click", function(e){
	move('#edu',800);
})
$("#navexperiencia").on("click", function(e){
	move('#exp',900);
})
window.onscroll = function(){
	y = window.scrollY;
	if( window.scrollY >= 770  ){
		$("nav").removeClass("color1");
		$("nav").addClass("bg-dark");
	}
	if( window.scrollY >= 2030 || window.scrollY <= 770){
		$("nav").removeClass("bg-dark");
		$("nav").addClass("color1");
	}
};

window.onsubmit = function (token){
	if (token) {
		$('#recaptcha').attr('data-token', token);
		getData();
	}
};
const onExpire = () => {
	$('#recaptcha').attr('data-token','');
	getData();
	grecaptcha.reset();
};
const onloadCallback = () => {
	grecaptcha.render('recaptcha', {
		'sitekey': '6LdzJl8jAAAAAIv60NzaK95ViFLPw5EbasV2tHgJ',
		'callback': onsubmit,
		'expired-callback': onExpire
	});
};

const chekbtn = function(a,b,c,d){
	if((a!= '' && a!= null) && (b!= '' && b!= null) && (c!= '' && c!= null) && (d!= '' && d!= null)){
		$('.g-recaptcha').attr('disabled', false);
	}else{
		$('.g-recaptcha').attr('disabled', true);
	}
}

const getData = function(){
	let nombre = $('#nombreContacto').val();
	let email = $('#emailContacto').val();
	let mensaje = $('#comentarioContacto').val();
	let token = $('#recaptcha').attr('data-token');
	chekbtn(nombre,email,mensaje,token);
}
$('#nombreContacto').on('keyup', function(e){
	getData();
});
$('#emailContacto').on('keyup', function(e){
	getData();
});
$('#comentarioContacto').on('keyup', function(e){
	getData();
});

window.onloadCallback = onloadCallback;
window.onExpire = onExpire;
