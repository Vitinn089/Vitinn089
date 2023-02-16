// Variables
const optionsNavigation = document.querySelectorAll('.menu-selection');

// Events
optionsNavigation.forEach(option => {
	option.addEventListener('click', () => {
		document.querySelector('.menu-selection[data-selected]').removeAttribute('data-selected');
		option.setAttribute('data-selected', 'true');
	});
});