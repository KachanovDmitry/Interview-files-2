
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides (n) {
	showSlides(slideIndex += n);
}
function showSlides (n) {
	var i;
	var reviews = document.querySelectorAll('.reviews-content');
	
	if (n > reviews.length-1) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = reviews.length-1;
	}
	for (var i = 0; i < reviews.length; i++) {
		reviews[i].style.display = 'none';	
	}
	reviews[slideIndex-1].style.display = 'grid';
	reviews[slideIndex].style.display = 'grid';
}

var serviceBtn = document.querySelector('#services-btn');
var serviceModal = document.querySelector('#services-modal');
var serviceClose = document.querySelector('.services-modal-content__close');

serviceBtn.onclick = function () {
	serviceModal.style.display = 'block';
}

serviceClose.onclick = function () {
	serviceModal.style.display = 'none';
}

window.onclick = function (event) {
	if (event.target == serviceModal) {
		serviceModal.style.display = 'none';
	}
}

$('.header-nav__icon').on('click', function() {
	$(this).closest('.header').toggleClass('nav-open');
	$('.header-nav').slideToggle(500)
});