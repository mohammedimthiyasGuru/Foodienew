$(document).ready(function () {
	$('#HomdeSlider').carousel({
		interval: false,
		wrap: false
	});
	$('#HomdeSlider').on('slid.bs.carousel', '', function () {
		var $this = $(this);

		if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
			$('.carousel-control-next').hide();
		}
		else if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
			$('.carousel-control-prev').hide();
		}
		else {
			$('.carousel-control-next').show();
			$('.carousel-control-prev').show();
		}
	});

	if (window.innerWidth <= 768) {
		$(document).on('click', '#toggleMenu', function () {
			$('.vertical-nav').toggleClass('vertical-nav-opened');
		});
	}
})

$(document).on('click', '.collapse-menu', function () {
	$(this).find('i').toggleClass('icon-cross2');
	$('.vertical-nav').toggleClass('vertical-nav-sm');
	$('.dashboard-wrapper').toggleClass('dashboard-wrapper-lg');
})

/*
var tid = setInterval(function () {
	if (document.readyState !== 'complete') return;
	clearInterval(tid);
	var querySelector = document.querySelector.bind(document);
	var nav = document.querySelector('.vertical-nav');

	// Minify menu on menu_minifier click
	querySelector('.collapse-menu').onclick = function () {
		nav.classList.toggle('vertical-nav-sm');
		$('.dashboard-wrapper').toggleClass(('dashboard-wrapper-lg'), 200);
		$("i", this).toggleClass("icon-menu2 icon-cross2");
	};

	// Toggle menu click
	querySelector('.toggle-menu').onclick = function () {
		nav.classList.toggle('vertical-nav-opened');
	};

}, 1000);*/