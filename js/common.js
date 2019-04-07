$(window).on('load', function () {

	setTimeout(() => {

		$("#preloader").addClass('is-loaded')

		$('#js-hero-slider').slickAnimation()

	}, 1000);

});

$(function () {

	const getElHeight = (target) => $(target).outerHeight()

	const header = $('.header')

	const getHeaderHeight = (target) => getElHeight(header)

	const headerHeight = getHeaderHeight()


	$(window).on('scroll', (event) => {

		const scrollTop = $(event.currentTarget).scrollTop()

		if (headerHeight <= scrollTop) {
			header.addClass('is-active')
		} else {
			header.removeClass('is-active')
		}

	})

	const getWWindowWidth = () => $(window).width()

	const setHeaderWidth = () => header.css('width', getWWindowWidth())

	setHeaderWidth()

	$(window).on('resize', setHeaderWidth)

	const customPaging = () => {
		return function (slick, index) {
			return '<div class="slider-nav__dot" ></div>';
		}
	}

	$('#js-hero-slider').slick({
		prevArrow: '.hero-slider__prev',
		nextArrow: '.hero-slider__next',
		dots: true,
		appendDots: '.hero-slider__dots',
		customPaging: customPaging(),
		draggable: false,
		// autoplay: true,
		autoplaySpeed: 5000
	});


	$(".custom-scroll--y").mCustomScrollbar({
		scrollInertia: 0,
		mouseWheel: {
			preventDefault: true
		},
	});

	$('.opportunities-tabs-list__item').on('click', function () {
		const that = $(this);
		const parent = that.closest('.opportunities')
		const target = $( that.attr('data-target') )
		const slider = target.find('.opportunities-tabs-slider')
		parent.find('.opportunities-tabs-list__item').not( that ).removeClass('is-active')
		that.addClass('is-active')
		target.addClass('is-active').siblings().removeClass('is-active')
		slider.slick('setPosition');
	});


	function erpTabsSlider() {
		$('.opportunities-tabs-content__item').each(function () {
			const that = $(this)
			const slider = that.find('.opportunities-tabs-slider')
			const prevArrow = that.find('.opportunities-tabs__prev')
			const nextArrow = that.find('.opportunities-tabs__next')
			const dotsContainer = that.find('.opportunities-tabs__dots')

			slider.slick({
				prevArrow: prevArrow,
				nextArrow: nextArrow,
				dots: true,
				appendDots: dotsContainer,
				customPaging: customPaging(),
			});

		})
	}

	erpTabsSlider()


	const showPopup = (target) => {
		$.fancybox.open({
			src: target,
			type: 'inline',
			touch: false
		});
	};

	$('#contact-popup').on('submit', function (event) {
		event.preventDefault()
		setTimeout(() => {
			showPopup('#success-popup')
		}, 200);
	});

	$.fancybox.defaults.closeExisting = true;

	$('.burger').on('click', function () {
		const that = $(this)
		const menu = $(".header-nav")
		that.toggleClass('burger--close')
		menu.toggleClass('is-active')
		$('body').toggleClass('is-overflowed')
	});

	function setHeightNavMobile() {
		if ($(window).width() < 993) {
			return $(".header-nav").css('height', window.innerHeight)
		}
	}

	setHeightNavMobile()


	function setHeroHeight() {
		return $(".hero").css('height', window.innerHeight)
	}

	setHeroHeight()


	$('.js-subnav-toggler').on('click', function () {

		if ($(window).width() < 993) {
			const that = $(this)
			const drop = that.next('.header-subnav')
			const parent = that.closest('.js-drop')
			that.toggleClass('is-active')
			drop.slideToggle()
			parent.siblings().find('.js-subnav-toggler').next('.header-subnav').slideUp()
			parent.siblings().find('.js-subnav-toggler').removeClass('is-active')
		}

	});


	function mobileSlider(target) {
		$(window).on('load resize orientationchange', function () {
			$(target).each(function () {
				const $carousel = $(this);
				const $carouselWrapper = $(this).closest('.js-mobile-slider-wrapper');
				const $carouselDotsContainer = $carouselWrapper.find('.js-mobile-slider-dots');
				const $prev = $carouselWrapper.find('.js-mobile-slider-prev');
				const $next = $carouselWrapper.find('.js-mobile-slider-next');
				if ($(window).width() > 992) {
					if ($carousel.hasClass('slick-initialized')) {
						$carousel.slick('unslick');
					}
				} else {
					if (!$carousel.hasClass('slick-initialized')) {
						$carousel.slick({
							slidesToShow: 1,
							prevArrow: $prev,
							nextArrow: $next,
							dots: true,
							appendDots: $carouselDotsContainer,
							customPaging: customPaging(),
							// autoplay: true,
							autoplaySpeed: 5000,
							pauseOnFocus: false,
							pauseOnHover: false,
							pauseOnDotsHover: false,
						});
					}
				}
			});
		});
	}

	mobileSlider('.js-mobile-slider')

});