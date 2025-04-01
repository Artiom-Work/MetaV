'use strict';

$("#popup").iziModal({
	bodyOverflow: true
});

$('.open-popup').click((e) => {
	e.preventDefault();
	$("#popup").iziModal('open');
});