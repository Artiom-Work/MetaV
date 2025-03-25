const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');

menuSwitcher.addEventListener('change', (e) => {
	if (e.target.checked) {
		bodyLock();
		menuSwitcher.labels[0].title = 'close';
	} else if (!e.target.checked) {
		bodyUnlock();
		menuSwitcher.labels[0].title = 'mobile menu';
	}
});
mobileMenu.addEventListener('click', (e) => {
	menuSwitcher.checked = false;
	bodyUnlock();
});

function bodyLock() {
	// const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + "px";
	// document.body.style.paddingRight = lockPaddingValue;
	document.body.classList.add('lock-body');
}
function bodyUnlock() {
	// document.body.style.paddingRight = '0px';
	document.body.classList.remove('lock-body');
}