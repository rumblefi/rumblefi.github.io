$(function () {

	function getWindowWidth() {
		return $(window).width()
	}

	$(".header").css('width', getWindowWidth())

	function addIngredientInput() {
		let numberClicked = 1

		$('.form__ingidient-button').on('click', function () {
			const template = $(".form__ingidient-wrapper").filter(':hidden')
			const clonedTemplate = template.clone(true)
			const input = clonedTemplate.find('.form__field')
			const closedIcon = clonedTemplate.find('.form__ingidient-close')
			const container = $(".form__ingridients")
			container.append(clonedTemplate)
			clonedTemplate.show()
			closedIcon.addClass('is-shown')
			input.attr('name', `ingredient${numberClicked}`)
			numberClicked++
		});
	}

	addIngredientInput()


	function removeIngrediment() {
		const that = $(this)
		const parent = that.closest('.form__ingidient-wrapper')
		parent.remove()
	}

	$('.form__ingidient-close').on('click', removeIngrediment);


	function handleSubmitForm() {
		event.preventDefault()

		$('.form__field--ingredient').each(function () {
			$(this).rules("add", {
				required: true,
				minlength: 5,
				messages: {
					required: "Please enter ingredient",
					minlength: "Ingredient must consist at least 5 characters"
				}
			})
		});

		//if form submitted
		if ($(this).validate().form()) {
			alert('submitted')
		}
	}

	$("#form").on('submit', handleSubmitForm)

	$("#form").validate({
		rules: {
			title: {
				required: true,
				minlength: 5
			},
			description: {
				required: true,
				minlength: 26
			},
			imageURL: {
				required: true,
				url: true
			},
			instructions: {
				required: true,
				minlength: 26
			},
		},
		messages: {
			title: {
				required: "Please enter title",
				minlength: "Title must consist at least 5 characters"
			},
			description: {
				required: "Please provide description",
				minlength: "Description must consist at least 26 characters"
			},
			imageURL: {
				required: "Please provide image URL",
				url: "Please provide valid URL"
			},
			instructions: {
				required: "Please provide instructions",
				minlength: "instructions must consist at least 26 characters"
			},
		}
	});

	
	function closePopup() {
		return $.fancybox.close(true)
	}

	$('.js-close-popup').on('click', closePopup);


	function showDeletePopup() {
		return $.fancybox.open({
			src  : '#delete-popup',
			type : 'inline',
			opts : {
				touch: false
			}
		});
	}

	$('.js-delete-recipe').on('click', showDeletePopup);

});