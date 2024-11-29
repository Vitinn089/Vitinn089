// Libs
import showProject from './functions/showProject.js';
import sessionStorage from './factories/sessionStorage.js';

// Variables
const optionsNavigation = document.querySelectorAll('.menu-selection');
const cardsConteiner = document.querySelector('.cards')
const cards = document.querySelectorAll('.card');
const projectsSessionStore = sessionStorage('projects')

//Loading
if (!projectsSessionStore.get())
	projectsSessionStore.set(projects)

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
		showProject(projectsSessionStore.get());
	});
});



showProject(projectsSessionStore.get());