import 'swiper/css';
import Swiper from 'swiper';

function initSwiper() {
	if (window.innerWidth >= 768) {
		const swiper = new Swiper('.previewSwiper', {
			direction: 'horizontal',
			slidesPerView: 'auto',
			spaceBetween: 54,
			centeredSlides: true,

			on: {
				sliderMove: function () {
					document.querySelectorAll('.swiper-slide video').forEach(video => {
						video.style.pointerEvents = 'none';
					});
				},
				touchEnd: function () {
					document.querySelectorAll('.swiper-slide video').forEach(video => {
						video.style.pointerEvents = 'auto';
					});
				}
			}
		});
		return swiper;
	}
	return null;
}

let swiperInstance = initSwiper();

window.addEventListener('resize', () => {
	if (window.innerWidth >= 768 && !swiperInstance) {
		swiperInstance = initSwiper();
	} else if (window.innerWidth < 768 && swiperInstance) {
		swiperInstance.destroy(true, true);
		swiperInstance = null;
	}
});

function debounce(func, timeout = 300) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => { func.apply(this, args); }, timeout);
	};
}

window.addEventListener('resize', debounce(() => {
	if (window.innerWidth >= 768 && !swiperInstance) {
		swiperInstance = initSwiper();
	} else if (window.innerWidth < 768 && swiperInstance) {
		swiperInstance.destroy(true, true);
		swiperInstance = null;
	}
}));