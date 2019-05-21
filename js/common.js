$(function () {

	AOS.init({
		disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		duration: 600, // values from 0 to 3000, with step 50ms
		once: true, // whether animation should happen only once - while scrolling down
		offset: 0 // offset (in px) from the original trigger point
	});

	const HEADER = $(".header")
	const HEADER_HEIGHT = getHeaderHeight()
	const BODY = $("body")
	const NAV = $(".nav")

	function getHeaderHeight() {
		return HEADER.outerHeight()
	}

	function toggleMenu() {
		const that = $(this)
		that.toggleClass('burger--close')
		NAV.toggleClass('is-active')
		BODY.toggleClass('is-overfloved')
	}

	$('.burger').on('click', toggleMenu);

	function checkInitiallyLandscape() {
		return window.innerWidth > window.innerHeight
	}

	function setPaddintTopForBody() {
		return BODY.css('padding-top', HEADER_HEIGHT)
	}

	setPaddintTopForBody()

	$('.digital-tabs-list__item').on('mouseenter', function () {
		const that = $(this)
		that
			.addClass('is-active')
			.siblings()
			.removeClass('is-active')
	});

	function tabs() {
		const that = $(this)
		const target = $(that.attr('data-target'))
		that
			.addClass('is-active')
			.siblings()
			.removeClass('is-active')
		target
			.addClass('is-active')
			.siblings()
			.removeClass('is-active')
	}

	$('.js-tabs-button').on('click', tabs);

	// работа с Masonry
	function customMasonry(selector) {

		$(selector).masonry({
			itemSelector: '.masonry-item',
			horizontalOrder: true
		});

	}

	customMasonry('.masonry-items');
	customMasonry('.projects-items');


	$(window).on('resize', customMasonry);

	function handlePopupFields() {
		const that = $(this)
		const valLength = that.val().length
		return valLength > 0 ? that.addClass('is-active') : that.removeClass('is-active')
	}

	$('.popup__field').on('input', handlePopupFields);


	function showPopup(target) {
		$.fancybox.open($(target), {
			touch: false
		});
	}

	$('.js-show-popup').on('click', function () {
		showPopup('#popup')
	});


	function closePopup() {
		$.fancybox.close(true);
	}

	$('.js-popup-close').on('click', closePopup);

	function customPaging() {
		return function (slick, index) {
			return '<div class="dot" ></div>';
		}
	}

	$('#js-issues-slider').slick({
		prevArrow: '#js-issues-prev',
		nextArrow: '#js-issues-next',
		dots: true,
		appendDots: '#issues-dots',
		pauseOnHover: false,
		pauseOnDotsHover: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		customPaging: customPaging(),
	})


	function handleSliderControls() {
		const that = $(this)
		const wrapper = that.closest('.js-slider-controls')
		const otherSliderControls = wrapper.find('.slider-control')
		otherSliderControls.removeClass('is-active')
		that.addClass('is-active')
	}

	$(document).on('click', '.slider-control', handleSliderControls);


	$('#js-project-about-slider').slick({
		prevArrow: '#js-project-about-prev',
		nextArrow: '#js-project-about-next',
		pauseOnHover: false,
		pauseOnDotsHover: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		customPaging: customPaging(),
	})


	$('#js-subscribe-instagram').slick({
		slidesToShow: 4,
		prevArrow: '#js-subscribe-instagram-prev',
		nextArrow: '#js-subscribe-instagram-next',
		pauseOnHover: false,
		pauseOnDotsHover: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	})


	$('.filter-btn').on('click', function () {
		const that = $(this)
		const closest = that.closest('.js-filter-btns-wrapper')
		const otherButtons = closest.find('.filter-btn')
		otherButtons.removeClass('is-active')
		that.addClass('is-active')
	});

	$('#nearestEventButton').on('click', function () {
		const that = $(this)
		const target = $(that.attr('data-target'))
		const slider1 = target.find("#dates-slider")
		const slider2 = target.find('#js-glossary-letters')
		slider1.slick('setPosition');
		slider2.slick('setPosition');
	});

	$('#glossaryFilterBtn').on('click', function () {
		const that = $(this)
		const target = $(that.attr('data-target'))
		const slider1 = target.find('#js-glossary-letters')
		slider1.slick('setPosition');
	});

	$('.glossary-letters__item').on('click', function () {
		const that = $(this)
		that.addClass('is-active').siblings().removeClass('is-active')
	});

	$('.js-drop-toggler').on('click', function () {
		const that = $(this)
		const parent = that.closest('.js-drop')
		const parentSiblings = parent.siblings('.js-drop')
		const drop = parent.find('.js-drop-content')
		if (!parent.hasClass('is-active')) {
			parent.addClass('is-active')
			drop.slideDown()
			parentSiblings.removeClass('is-active')
			parentSiblings.find('.js-drop-content').slideUp()
		} else {
			parent.removeClass('is-active')
			drop.slideUp()
		}
	});


	function test() {
		moment.locale('ru');
		$("#lineCLNDR").clndr({
			template: $('#lineCLNDR-template').html(),
			lengthOfTime: {
				months: null,
				days: 1,
				interval: 1
			},
			clickEvents: {
				click: function (target) {
					console.log(target)
				},
			},
		})
	}

	function smoothScroll(that) {
		const target = $(that.attr('data-target'))

		if (target) {
			const targetOffsetTop = target.offset().top
			that.addClass('is-active').siblings().removeClass('is-active')
			$('html, body').animate({
				scrollTop: targetOffsetTop - HEADER_HEIGHT
			}, 'slow')
		}
	}

	$(document).on('click', '.navigator-list__item', function () {
		smoothScroll($(this))
	});

	$(document).on('click', '.header-nav__link', function (event) {
		const that = $(this)
		const target = $(that.attr('data-target'))
		if (target.length) event.preventDefault()
		const targetOffsetTop = target.offset().top
		that.addClass('is-active').siblings().removeClass('is-active')
		$('html, body').animate({
			scrollTop: targetOffsetTop - HEADER_HEIGHT
		}, 'slow')
	});

	$(document).on('click', '.js-smooth-scroll-btn', function () {
		smoothScroll($(this))
	});

	$(document).on('click', '.navigator__control--prev', function () {
		const lastClickedSectionArr = JSON.parse(sessionStorage.getItem('lastClickedSection'))

		if (lastClickedSectionArr.length > 0) {

			const lastIndex = lastClickedSectionArr.length - 1
			const {
				pathname,
				clickedSectionId
			} = lastClickedSectionArr[lastIndex]

			if (pathname && clickedSectionId) {
				lastClickedSectionArr.splice(lastIndex, 1)
				sessionStorage.setItem('lastClickedSection', JSON.stringify(lastClickedSectionArr))

				if (clickedSectionId.indexOf('hero') > -1) {
					location.href = pathname //to top
				} else {
					location.href = `${pathname}#${clickedSectionId}`
				}

			}

		}

	});

	$('a').on('click', function (event) {
		const that = $(this)
		const clickedSectionId = $(that.closest(('.js-section'))).attr('id')
		const obj = {
			pathname: location.pathname,
			clickedSectionId
		}

		if (sessionStorage.getItem('lastClickedSection')) {
			const lastClickedSectionArr = JSON.parse(sessionStorage.getItem('lastClickedSection'))
			lastClickedSectionArr.push(obj)
			sessionStorage.setItem('lastClickedSection', JSON.stringify(lastClickedSectionArr))
		} else {
			sessionStorage.setItem('lastClickedSection', JSON.stringify([obj]))
		}

	});

	function toTop() {
		$('html, body').animate({
			scrollTop: 0
		}, 'slow')
	}

	$(document).on('click', '.navigator__control--next', toTop);


	function highlightMenuItems() {
		const menuItems = $(".navigator-list__item")
		const scrolledSections = menuItems.map(function () {
			const section = $($(this).attr("data-target"))
			return section
		})

		menuItems.on('click', function () {
			const that = $(this)
			const target = $(that.attr('data-target'))
			const offsetTop = target.offset().top
			that.addClass('is-active').siblings().removeClass('is-active')
			$('html, body').animate({
				scrollTop: offsetTop - HEADER_HEIGHT
			}, 'slow');
		});

		$(window).on('scroll', function () {
			const that = $(this)
			const scrollTop = that.scrollTop()
			const fromTop = scrollTop + HEADER_HEIGHT + 1
			const docHeight = $(document).height()
			const winScrolled = $(window).height() + scrollTop // Sum never quite reaches
			const currentScrolledSections = scrolledSections.map(function () {
				const that = $(this)
				const offsetTop = that.offset().top
				if (offsetTop < fromTop) {
					return that
				}
			})
			const currentSection = currentScrolledSections[currentScrolledSections.length - 1]
			const currentSectionId = currentSection[0].id
			const currentMenuItem = $(menuItems.filter(`[data-target="#${currentSectionId}"]`)[0])
			const lastMenuItem = $(menuItems[menuItems.length - 1])
			if (currentSection) {
				if (docHeight - winScrolled < 150) {
					lastMenuItem.addClass('is-active').siblings().removeClass('is-active')
				} else {
					currentMenuItem.addClass('is-active').siblings().removeClass('is-active')
				}

			}
		});

	}

	highlightMenuItems()


	function parallaxScene() {

		if ($(window).width() > 992) {

			document.querySelectorAll('.scene').forEach((elem) => {
				const modifier = elem.getAttribute('data-modifier')
				basicScroll.create({
					elem: elem,
					from: 0,
					to: 519,
					direct: true,
					props: {
						'--translateY': {
							from: '0',
							to: `-${ 10 * modifier }px`
						}
					}
				}).start()
			})

		}

	}

	parallaxScene()

	function parallaxContactSection() {

		if ($(window).width() > 992) {
			document.querySelectorAll('.contact-section-figure').forEach((elem) => {
				const modifier = elem.getAttribute('data-modifier')
				basicScroll.create({
					elem: elem,
					from: 'top-bottom',
					to: 'bottom-top',
					direct: true,
					props: {
						'--translateY': {
							from: '0',
							to: `-${ 10 * modifier }px`
						}
					}
				}).start()
			})
		}

	}

	parallaxContactSection()

	function parallaxEaseBox() {
		if ($(window).width() > 992) {
			const easeBoxes = []
			document.querySelectorAll('.easeBox').forEach((elem, i) => {
				const timing = elem.getAttribute('data-timing')
				const dataTo = elem.getAttribute('data-to')
				easeBoxes.push(basicScroll.create({
					elem: elem,
					from: 'top-bottom',
					to: 'top-top',
					direct: true,
					props: {
						'--ty': {
							from: '0',
							to: `${dataTo}px`,
							timing: timing
						}
					}
				}))
			})
			easeBoxes.forEach((easeBox) => easeBox.start())
		}
	}

	parallaxEaseBox()

	function animateCSS(element, animationName, callback) {
		const node = $(element)
		node.addClass(`animated ${animationName}`)

		function handleAnimationEnd() {
			node.removeClass(`animated ${animationName}`)
			node.off('animationend', handleAnimationEnd)

			if (typeof callback === 'function') callback()
		}

		node.on('animationend', handleAnimationEnd)
	}


	function mobileSlider() {

		/* Slick needs no get Reinitialized on window Resize after it was destroyed */
		$(window).on('load resize orientationchange', function () {
			$('.js-mobile-slider').each(function () {
				var $carousel = $(this);
				if ($(window).width() > 992) {
					if ($carousel.hasClass('slick-initialized')) {
						$carousel.slick('unslick');
					}
				} else {
					if (!$carousel.hasClass('slick-initialized')) {
						$carousel.slick({
							slidesToShow: 1,
							slidesToScroll: 1,
							mobileFirst: true,
							arrows: false
						});
					}
				}
			});
		});

	}

	mobileSlider()

	function setBiggestHeight(target) {
		var mh = 0;
		$(target).each(function () {
			if (mh < $(this).height()) {
				mh = $(this).height()
			}
		})
		$(target).height(mh);
	}

	setBiggestHeight('.digital-tabs-list__item')

	$('#dates-slider').slick({
		slidesToShow: 5,
		prevArrow: '.dates-slider__arrow--prev',
		nextArrow: '.dates-slider__arrow--next',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}, ]
	})

	$(document).on('click', '.terms-table-body__item', function () {
		const that = $(this)
		const index = that.index()
		const nextAll = that.nextAll('.terms-table-body__item')
		if (index === 1) { //second

			if (!that.hasClass('is-active')) {
				nextAll.slideDown()
				that.addClass('is-active')
			} else {
				nextAll.slideUp()
				that.removeClass('is-active')
			}
		}
	});


	function glossarySlider() {

		$(window).on('load resize orientationchange', function () {
			$('#js-glossary-letters').each(function () {
				var $carousel = $(this);
				if ($(window).width() > 992) {
					if ($carousel.hasClass('slick-initialized')) {
						$carousel.slick('unslick');
					}
				} else {
					if (!$carousel.hasClass('slick-initialized')) {
						$carousel.slick({
							arrows: false,
							slidesToShow: 10,
							slidesToScroll: 10
						});
					}
				}
			});
		});

	}

	glossarySlider()


	$('#js-instruments-slider').slick({
		prevArrow: '#js-instruments-prev',
		nextArrow: '#js-instruments-next'
	})


	$("#js-partners-slider").slick({
		slidesToShow: 5,
		prevArrow: '#js-partners-slider-prev',
		nextArrow: '#js-partners-slider-next',
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			}
		}, ]
	})

	const rotateBox = basicScroll.create({
		elem: document.querySelector('.rotateBox'),
		from: 'top-middle',
		to: 'top-top',
		props: {
			'--r': {
				from: '0',
				to: '1turn'
			}
		}
	})

	rotateBox.start()


	$('.nav-list__link').on('click', function (event) {
		$(".nav").removeClass('is-active')
		$(".burger").removeClass('burger--close')
		smoothScroll($(this))
	});


	//demo
	$('.terms__load-more').on('click', function () {
		const that = $(this)
		const parent = that.closest('.white-block')
		const items = parent.find('.terms-table-body__partial').filter(':hidden')
		items.slideDown()
	});

	function digitalMobileTabs() {
		$('#digital-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
			const index = (currentSlide ? currentSlide : 0);
			$('.digital-tabs-content__partial').eq(index).addClass('is-active').siblings().removeClass('is-active')
		});
	}

	digitalMobileTabs()

	function digitalMobileSlider(landscapeMode) {

		$('#digital-slider').each(function () {

			var $carousel = $(this);
			if ($(window).width() > 992 || landscapeMode) {
				if ($carousel.hasClass('slick-initialized')) {
					$carousel.slick('unslick');
				}
			} else {
				if (!$carousel.hasClass('slick-initialized')) {
					$carousel.slick({
						slidesToShow: 1,
						slidesToScroll: 1,
						mobileFirst: true,
						prevArrow: '#js-digital-prev',
						nextArrow: '#js-digital-next'
					});
				}
			}
		});

	}

	digitalMobileSlider(checkInitiallyLandscape())

	$(window).on('orientationchange', function () {
		const {
			angle
		} = screen.orientation
		if (angle !== 0) { //landscape
			digitalMobileSlider(true) //landscape
			customMasonry('.projects-items');
		} else {
			digitalMobileSlider(false)
			customMasonry('.projects-items');
		}
	});

	function customVanillaTilt() {
		const elements = document.querySelectorAll("[data-tilt]");

		if ($(window).width() < 992) {
			elements.forEach(element => {
				element.vanillaTilt.destroy();
			});
		}

	}

	customVanillaTilt()

});