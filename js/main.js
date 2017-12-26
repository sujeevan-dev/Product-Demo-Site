// When the DOM is ready, run this function
$(document).ready(function() {

  //Set the carousel options
  $('#quote-carousel').carousel({
    pauseOnHover: true,
    interval: 1700,
  });

  	//Scroll Reveal Effects
	window.sr = ScrollReveal();
	sr.reveal('.navbar', {
	duration: 3000,
	origin: 'bottom'
  });

	
	sr.reveal('.showcase-left', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
  });

	sr.reveal('.showcase-right', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
  });

	sr.reveal('.btn', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
  });

	sr.reveal('#offer', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px'
  });

	sr.reveal('.description-left', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
  });

	sr.reveal('.description-right', {
	duration: 2000,
	origin: 'top',
	distance: '300px'
  });

	sr.reveal('#description4', {
	duration: 2000,
	origin: 'bottom',
	distance: '300px'
  });

	sr.reveal('#contact', {
	duration: 2000,
	origin: 'right',
	distance: '300px'
  });

$(function(){
	$('a[href*="#"]:not([href="#"])').click(function(){
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){ 
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;

				}
			}
		
		});
	});

});




	