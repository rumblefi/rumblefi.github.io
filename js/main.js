var Main = Main || {};

$(window).on('load', function () {

	setTimeout(function(){

		$("#preloader").addClass('is-loaded');

		$("body").removeClass('overflow');
		
	}, 1000);
	
});

$(function () {
	!!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) && $("body").addClass("_mac"), svg4everybody(), $(".slide-carousel").owlCarousel({
		loop: !0,
		nav: !0,
		dots: !1,
		items: 1
	});
	var e = $(".slide-carousel").find(".owl-item").length;
	$(".slide-carousel").find(".owl-item img").after('<span class="counter">' + e + "</span>"), $(".news-carousel").owlCarousel({
			loop: !0,
			nav: !0,
			dots: !1,
			items: 1
		}), $(".text-carousel").owlCarousel({
			loop: !0,
			nav: !0,
			dots: !1,
			items: 1,
			responsive: {
				320: {
					nav: !0
				}
			}
		}), $(".company-carousel").owlCarousel({
			loop: !0,
			nav: !0,
			dots: !1,
			items: 3,
			autoHeight: !0
		}),
		function () {
			var e = $(".main-page");
			if (e.length) {
				var t = e.find(".intro").outerHeight(),
					s = e.find(".subnavigation"),
					i = 0;
				$(s).each(function () {
					$(this).addClass("toggle-up"), i < $(this).outerHeight() && (i = $(this).outerHeight())
				});
				var o = t - i;
				$(window).on("scroll", function () {
					var e = $(this).scrollTop();
					o <= e ? s.removeClass("toggle-up") : s.addClass("toggle-up")
				})
			}
		}(),
		function () {
			if (!$(".main-page").length) {
				var t = $(".page-header"),
					s = t.outerHeight() + 20;
				$(window).on("scroll", function () {
					var e = $(this).scrollTop();
					s <= e ? t.addClass("sticky") : t.removeClass("sticky")
				})
			}
		}(), $(document).scroll(function () {
			var e, t;
			e = $(document).scrollTop(), t = $(".page-header"), $(".main-page").find(".intro").outerHeight() < e ? t.hasClass("fixed") || (t.addClass("fixed"), $(".right-panel__item").addClass("is-active")) : t.hasClass("fixed") && (t.removeClass("fixed"), $(".right-panel__item").removeClass("is-active"))
		}), $(".js-open").click(function (e) {
			e.preventDefault(), e.stopPropagation();
			var t = $(this);
			t.hasClass("js-open--opened") ? (t.removeClass("js-open--opened"), t.next().slideUp()) : (t.addClass("js-open--opened"), t.next().slideDown())
		});
	var r, c, i;
	$(".js-modal-trigger");
	r = jQuery, c = void 0 !== r("<input/>")[0].multiple, i = /msie/i.test(navigator.userAgent), r.fn.customFile = function () {
			return this.each(function () {
				var n = r(this).addClass("customfile"),
					e = r('<div class="customfile__wrap">'),
					t = void 0 !== n.attr("placeholder") ? n.attr("placeholder") : "",
					a = r('<input type="text"  class="customfile__filename" placeholder="' + t + '"/>'),
					l = r('<button type="button" class="customfile__upload choose-file">прикрепить файл</button>'),
					s = r('<label class="customfile__upload choose-file" for="' + n[0].id + '"></label>');
				$closeButton = r("<div class='customfile__close'></div>"), n.css({
					position: "absolute",
					left: "-9999px"
				}), e.insertAfter(n).append(n, a, $closeButton, i ? s : l), n.attr("tabIndex", -1), l.attr("tabIndex", -1), l.click(function () {
					n.focus().click()
				}), a.click(function () {
					n.focus().click()
				}), n.change(function () {
					var e, t, s = [];
					if (c) {
						for (var i = 0, o = (e = n[0].files).length; i < o; i++) s.push(e[i].name);
						t = s.join(", ")
					} else t = n.val().split("\\").pop();
					a.val(t).text(t).focus(), l.addClass("is-hidden"), $closeButton.addClass("is-active")
				}), $closeButton.on("click", function () {
					a.val(""), l.removeClass("is-hidden"), $closeButton.removeClass("is-active")
				}), a.on({
					blur: function () {
						n.trigger("blur")
					},
					keydown: function (e) {
						if (13 === e.which) i || n.trigger("click");
						else {
							if (8 !== e.which && 46 !== e.which) return 9 === e.which && void 0;
							n.replaceWith(n = n.clone(!0)), n.trigger("change"), a.val("")
						}
					}
				})
			})
		}, c || r(document).on("change", "input.customfile", function () {
			var e = r(this),
				t = "customfile_" + (new Date).getTime(),
				s = e.parent(),
				i = s.siblings().find(".customfile-filename").filter(function () {
					return !this.value
				}),
				o = r('<input type="file" id="' + t + '" name="' + e.attr("name") + '"/>');
			setTimeout(function () {
				e.val() ? i.length || (s.after(o), o.customFile()) : (i.parent().remove(), s.appendTo(s.parent()), s.find("input").focus())
			}, 1)
		}), $("input[type=file]").customFile(), Main.openPopup = function (e) {
			var t = $(".js-modal");
			if ($("#" + e).length) return $.each(t, function () {
				$(this).attr("id") === e && ($(this).addClass("opened"), $("body").addClass("overflow"))
			}), !1
		}, Main.closePopup = function (e) {
			var t = $(".js-modal");
			$.each(t, function () {
				$(this).attr("id") === e && ($(this).removeClass("opened"), $("body").removeClass("overflow"))
			}), $("#player").length && (console.log($("#player").get(0)), $("iframe").attr("src", $("iframe").attr("src")))
		}, $(document).on("click", ".js-modal-trigger", function (e) {
			var t = $(this).attr("data-target");
			e.preventDefault(), Main.openPopup(t)
		}), $(".js-close").on("click", function () {
			var e = $(this).data("target");
			Main.closePopup(e)
		}), $(this).keydown(function (e) {
			27 != e.which || $(".js-modal.opened").is("._check-required") || ($("body").removeClass("overflow"), $(".js-modal").removeClass("opened"))
		}),
		function () {
			var e, t, s = [];
			for ($(".js-modal").each(function () {
					var e = $(this).attr("id");
					s.push(e)
				}), t = 0; t < s.length; t++) "#" + s[t] == window.location.hash && $("#" + s[t]).length && (e = s[t], Main.openPopup(e))
		}();
	var t, s, o = $(window),
		n = $(".js-nav-trigger"),
		a = $(".js-header"),
		l = $(".js-subnav-trigger"),
		d = $(".navigation-list__item");
	(n.on("click", function () {
		a.hasClass("opened") ? (a.removeClass("opened"), $("body").removeClass("overflow")) : (a.addClass("opened"), $("body").addClass("overflow"))
	}), l.on("click", function (e) {
		0 === l.has(e.target).length && ($(this).siblings().removeClass("expanded"), $(this).toggleClass("expanded"))
	}), $(".js-tabs").length) && $(".js-tab-control").on("click", function () {
		var e = $(this).closest(".js-tabs").find(".js-tab"),
			t = $(this).index();
		$(this).siblings().removeClass("active"), $(this).addClass("active"), e.removeClass("active"), $.each(e, function () {
			$(this).index() === t && $(this).addClass("active")
		})
	});
	(o.on("scroll", function () {
		(t = !(50 < $(this).scrollTop())) !== s && (t ? a.removeClass("scrolling") : a.addClass("scrolling")), s = t
	}), $(".js-accordeon-toggler").length) && $(".js-accordeon-toggler").on("click", function () {
		$(this).closest(".accordeon-link").siblings().removeClass("expanded"), $(this).closest(".accordeon-link").toggleClass("expanded")
	});
	768 < o.width() && d.hover(function () {
		a.addClass("scrolling")
	}, function () {
		o.scrollTop() < 50 && a.removeClass("scrolling")
	}), $(".js-press").length && $(".js-press").on("click", function () {
		$(this).closest(".for-press").toggleClass("expanded")
	}), $(".js-clear").length && $(".js-clear").on("click", function () {
		$(this).closest("form")[0].reset()
	}), $("video[autoplay]").lebgth && $("video[autoplay]").each(function () {
		this.play()
	});
	$(".js-btn-more").length && $.each($(".js-btn-more"), function () {
		var t = $(this).closest(".js-items").find(".js-item");
		$.each(t, function () {
			3 < $(this).index() && $(this).hide()
		}), $(this).on("click", function (e) {
			e.preventDefault(), t.show()
		})
	});
	var u = function () {
		if ($(".promo-slider").length && 1024 < o.width()) {
			for (var e = $(".promo-slider").find(".promo-tile__text"), t = [], s = 0; s < e.length; s++) t.push(e[s].offsetHeight);
			var i = Math.max.apply(null, t);
			e.css("min-height", i)
		}
	};
	u(), o.on("resize", function () {
		u()
	});
	new XMLHttpRequest;
	var f, p = document.cookie.match(/csrftoken=([\w-]+)/);
	if (p) p[1];
	! function () {
		var n = $(".one-slider__counter"),
			e = $("#one-news-slider");
		e.on("init reInit afterChange", function (e, t, s, i) {
			var o = (s || 0) + 1;
			n.text(o + " / " + t.slideCount)
		}), e.slick({
			fade: !0,
			prevArrow: ".one-news-slider__prev",
			nextArrow: ".one-news-slider__next",
			responsive: [{
				breakpoint: 769,
				settings: {
					autoplay: !0,
					autoplaySpeed: 5e3
				}
			}]
		});
		var t = 0;
		$(".one-slider__img").each(function () {
			t < $(this).outerHeight() && (t = $(this).outerHeight())
		}), $(".one-slider__counter").css("top", t + 20)
	}(), f = $(".department-slider__counter"), $("#js-department-slider").on("init reInit afterChange", function (e, t, s, i) {
		var o = (s || 0) + 1;
		f.text(o + " / " + t.slideCount)
	}), $("#js-department-slider").slick({
		fade: !0,
		prevArrow: ".department-slider__prev",
		nextArrow: ".department-slider__next",
		responsive: [{
			breakpoint: 769,
			settings: {
				autoplay: !0,
				autoplaySpeed: 5e3
			}
		}]
	}), $(".company-drop__toggler").on("click", function () {
		var e = $(this).closest(".company-drop");
		e.siblings().removeClass("is-active");
		e.toggleClass("is-active")
	}), $.validator.setDefaults({
		submitHandler: function () {
			$(".popup").removeClass('opened');
			$("#popupSendMessageSuccess").addClass('opened');	
			$("body").addClass('overflow')
		}
	}), $("#form").on("submit", function () {
		event.preventDefault()
	}), $(".form").each(function () {
		$(this).validate({
			rules: {
				name: "required",
				message: "required",
				email: {
					required: !0,
					email: !0
				},
				accept: "required"
			},
			messages: {
				name: "поле не заполнено",
				message: "поле не заполнено",
				email: {
					required: "поле не заполнено",
					email: "введите корректный email"
				},
				accept: "нужно ваше согласие"
			}
		})
	}), $(".input-form__input").on("focus", function () {
		$(this).siblings(".input-form__label").addClass("is-active")
	}).on("blur", function () {
		0 === $(this).val().length && $(this).siblings(".input-form__label").removeClass("is-active")
	}), $(".textarea-form__textarea").on("focus", function () {
		$(this).siblings(".textarea-form__label").addClass("is-active")
	}).on("blur", function () {
		0 === $(this).val().length && $(this).siblings(".textarea-form__label").removeClass("is-active")
	}), $("select").select2({
		minimumResultsForSearch: -1
	})
});



$(function () {

	$('.glossary-letters__item').on('click', function () {
		$(this).addClass('is-active').siblings().removeClass('is-active');
	});

	function reponsiveHeightEl(target,prop,ratio) {
		var onePercentHeight = $(window).height() / 100;
		var resVal = ratio / $(window).height() * 100;
		$(target).css(prop, onePercentHeight * resVal)
		
		$(window).on('resize', function() {
			var onePercentHeight = $(window).height() / 100
			$(target).css(prop, onePercentHeight * resVal)
		})
	}

	reponsiveHeightEl(".news-carousel__headline",'font-size',25);

	reponsiveHeightEl(".news-left__vertical",'font-size', 40);

	reponsiveHeightEl(".news-card__bottom",'font-size', 14);

	reponsiveHeightEl(".news-card__rubric",'font-size', 12);

	reponsiveHeightEl(".news-left__link",'font-size', 16);

	reponsiveHeightEl(".news-carousel__bg",'padding-top', 480);

	reponsiveHeightEl(".news-carousel__bg",'padding-top', 480);

	reponsiveHeightEl(".white-block__img",'height', 480);

	$(document).on('contextmenu', function (event) {
		event.preventDefault()
	});

	$(document).on('copy contextmenu', function () {

		if( !$(".contacts-page").length && !$(".js-modal").hasClass('opened') && !$(".error-page").length ) {
			
			$(".copy-tooltip-overlay").addClass('is-active');
		}

	});

	$('.copy-tooltip__close').on('click', function () {
		$(this).closest('.copy-tooltip-overlay').removeClass('is-active');
	});

	$('.search-trigger').on('click', function () {

		$(".js-modal").removeClass('opened');

		$("#popupSearch").addClass('opened');

	});

	$('.popup__btn-close').on('click', function () {

		$(this).closest('.popup').removeClass('opened')
		
	});


})