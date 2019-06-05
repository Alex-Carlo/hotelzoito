$(document).ready(function(){
    $(".dropdown-toggle").dropdown();
  });
  
	$(function() {
		var selectedClass = "";
		$(".filter").click(function(){
		selectedClass = $(this).attr("data-rel");
		$("#gallery").fadeTo(100, 0.1);
		$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
		setTimeout(function() {
		$("."+selectedClass).fadeIn().addClass('animation');
		$("#gallery").fadeTo(300, 1);
		}, 300);
		});
		});
 
$(document).ready(main);
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};




function cambiaDePag(){

    location.href="https://www.booking.com/hotel/co/zoe.es.html";


}

/*MENSAJE GMAIL*/

$(document).ready(function(){
	$("#benviar").click(function() {
			var email=$("#correo").val();
			var nom=$("#nombre").val();
			var obser=$("#obs").val();
			//alert(email+nom+obser);
			Email.send({
					Host : "smtp.elasticemail.com",
					Username : "grupometrico@gmail.com",
					Password : "a6d88825-6de7-4145-8826-41226be5c1a0",
					To : email,
					From : "grupometrico@gmail.com",
					Subject : "Notificación",
					Body : "Sr(a): " + nom + "Notificación: "+obser
			}).then(
				message => alert(message)
			);   
	})})

	$(function(){
		var	btn = $(".slider__btn");
		
		btn.on("click",function(){
			$(".slider__item").first().clone().appendTo(".slider");
			$(".slider__image").first().css({transform: "rotateX(-180deg)", opacity: 0});
			setTimeout(function(){
				$(".slider__item").first().remove();
			},200);
		});
	});