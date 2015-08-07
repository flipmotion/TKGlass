$(document).ready(function() {
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		}, 1000);
		return false;
	});
	$('.toggle-button').click(function(){
		$(this).toggleClass('active');
		$('.header-lvl-2').toggleClass('active');
	});
	/*$("#call").on('hidden.bs.modal', function (e) {
		$('.form-send')[2].reset();
	});
	*/
	
	var owlMain = $('[data-item="slider-main"]');
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'><i class='glyphicon glyphicon-menu-left'></i></i>",
		  "<i class='my-arrow-right'><i class='glyphicon glyphicon-menu-right'></i></i>"
		],
		dots: true,
	});
	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
	var owlMainT = $('[data-item="slider-item-two"]');
	var scroll_r = $(this).scrollTop();
	owlMainT.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		dotsContainer:'#navigation-slider',
		navText: [
			"<i class='my-arrow-left'></i>",
			"<i class='my-arrow-right'></i>"
		],
		dots: true,
	});
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
	
	$('.map-toggle .switch').click(function() {
		$(this).closest('.contact').toggleClass('toggle-active');
		$(this).toggleClass('toggle-active');
	});
});


function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}
function menuTop(){
	if ( $(this).scrollTop() > 85 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 85 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
