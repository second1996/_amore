document.addEventListener("DOMContentLoaded", function() {

	// Mixitup init
	if (document.querySelector(".gallery__container")) {
		var mixer = mixitup('.gallery__container', {
			load: {
				filter: '.category-1'
			}
		});
	}

});

jQuery(function() {

	// Wow.js init
	new WOW().init();

	// Service Modal init
	$('#serviceModal').on('show.bs.modal', function (event) {
		var link = $(event.relatedTarget) // Button that triggered the modal
		var sContent = link.data('content') // Extract info from data-* attributes
		var sTitle = link.data('title') // Extract info from data-* attributes
		var modal = $(this)
		modal.find('.modal-title').text(sTitle)
		modal.find('.modal-body').html(sContent)
		// return false;
	});

	// Order Modal init
	$('#orderModal').on('show.bs.modal', function (event) {
		var orderLink = $(event.relatedTarget) // Button that triggered the modal
		var orderTitle = orderLink.data('title') // Extract info from data-* attributes
		var modal = $(this)
		modal.find('.modal-title').html('Замовити <b>' + orderTitle + '</b>')
		modal.find('.order-name').val(orderTitle)
		// return false;
	});

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
	$hPhone = $('.callback__icon');
	$hPhoneNum = $('.callback__phone');
	$mNav = $('.mobile-nav');
	$mNavAnchor = $('[data-link="anchor"]');
	$mNavClose = $('.mobile-nav__close');
	$mNavOverlay = $('.mobile-nav__overlay');

	// Open menu
	$hMenu.on('click', function() {
		$mNav.addClass('is-active');
		$mNavOverlay.addClass('is-active');
	});

	// Close menu after click on link anchor
	$mNavAnchor.on('click', function() {
		$mNav.removeClass('is-active');
		$mNavOverlay.removeClass('is-active');
	});

	// Close button
	$mNavClose.on('click', function() {
		$mNav.removeClass('is-active');
		$mNavOverlay.removeClass('is-active');
	});

	// Show phone numbers
	if(window.matchMedia('(max-width: 767.98px)').matches) {
		$hPhone.on('click', function() {
			if ($hPhoneNum.hasClass('is-active')) {
				$hPhoneNum.removeClass('is-active');
			} else {
				$hPhoneNum.addClass('is-active');
			}
		});
	};

	// Hide Header when scrolling down
	$(window).scroll(function(){
		if($(window).scrollTop() >= 110){
			$(".header").addClass('header-light');
			$hPhoneNum.removeClass('is-active');
		}
		else {
			$(".header").removeClass('header-light');
		}
	});
	$('document').ready(function(){
		if($(window).scrollTop() >= 110){
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
				$('.header').removeClass('header-show').addClass('header-hide');
			} else {
				if(st + $(window).height() < $(document).height()) {
					$('.header').removeClass('header-hide').addClass('header-show');
				}
			}
			
			lastScrollTop = st;
		}
	});

	// Wedding Gallery Masonry
	$(document).ready(function() {
		$('.w-gallery__grid').masonry({
			itemSelector: '.w-gallery__grid-item'
		});
	});

});