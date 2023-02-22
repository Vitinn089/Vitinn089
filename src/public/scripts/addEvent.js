// Libs
import setLocalStorage from './functions/setLocalStorage.js';
import showProject from './functions/showProject.js';

// Variables
const optionsNavigation = document.querySelectorAll('.menu-selection');
const cards = document.querySelectorAll('.card');

// Events
optionsNavigation.forEach(option => {
	option.addEventListener('click', () => {
		document.querySelector('.menu-selection[data-selected]').removeAttribute('data-selected');
		option.setAttribute('data-selected', 'true');
	});
});

cards.forEach((card, index) => {
	if (index == 0)
		card.setAttribute('data-selected', 'true');

	card.addEventListener('click', () => {
		document.querySelector('.card[data-selected]').removeAttribute('data-selected');
		card.setAttribute('data-selected', 'true');
		showProject();
	});
});

await setLocalStorage();
showProject();