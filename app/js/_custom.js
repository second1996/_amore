document.addEventListener("DOMContentLoaded", function() {

	var mixer = mixitup('.gallery__container', {
		load: {
			filter: '.category-1'
		}
	});

});

jQuery(function() {

  // Anchors Links
  $('a[data-link^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 0;
    $('body, html').animate({scrollTop: bl_top}, 1000);
    return false;
	});

	// Phone mask for input[type="tel"]
	$('input[type="tel"]').inputmask({"mask": "+38 (999) 99-99-999"});

	// Mobile menu
	$hMenu = $('.header__menu');
	$mNav = $('.mobile-nav');
	$mNavClose = $('.mobile-nav__close');
	$mNavOverlay = $('.mobile-nav__overlay');

	// Open menu
	$hMenu.on('click', function() {
		$mNav.addClass('is-active');
		$mNavOverlay.addClass('is-active');
	});

	// Close button
	$mNavClose.on('click', function() {
		$mNav.removeClass('is-active');
		$mNavOverlay.removeClass('is-active');
	});

	// Hide Header when scrolling down
	$(window).scroll(function(){
		if($(window).scrollTop() >= 150){
			$(".header").addClass('header-light');
		}
		else {
			$(".header").removeClass('header-light');
		}
	});
	$(document).ready(function(){
		if($(window).scrollTop() >= 150){
			$(".header").addClass('header-light');
		}
		else {
			$(".header").removeClass('header-light');
		}
	});

	$('document').ready(function() {

		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('.header').outerHeight();

		$(window).scroll(function(event){
			didScroll = true;
		});

		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);

		function hasScrolled() {
			var st = $(this).scrollTop();

			if (Math.abs(lastScrollTop - st) <= delta)
				return;
			
			if (st > lastScrollTop && st > navbarHeight){
				$('.header').removeClass('header-hide').addClass('header-show');
			} else {
				if(st + $(window).height() < $(document).height()) {
					$('.header').removeClass('header-show').addClass('header-hide');
				}
			}
			
			lastScrollTop = st;
		}
	});

});