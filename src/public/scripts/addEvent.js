// Libs
import showProject from './functions/showProject.js';
import sessionStorage from './factories/sessionStorage.js';

// Variables
const optionsNavigation = document.querySelectorAll('.menu-selection');
const cardConteiner = document.querySelector('.cards')
const cards = document.querySelectorAll('.card');
const projectsSessionStore = sessionStorage('projects')
const header = document.querySelector('header');
const projetContent = document.querySelector('.projects-content')
const articles = document.querySelectorAll('article')
const board = document.querySelector('.board')

// console.log(articles)
// console.log(scrollY)

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

if(window.innerWidth > 1040){
	projetContent.classList.add('container'); // Esconde o header
}

window.addEventListener('resize', () => {
	if(window.innerWidth > 1040){
		projetContent.classList.add('container'); // Esconde o header
	} else {
		projetContent.classList.remove('container')
	}
})

	
window.addEventListener('scroll', () => {
	// console.log(window.scrollY)
	// Verifica se a página está no topo
	if (window.scrollY < 100) {
	header.classList.add('oculted'); // Esconde o header
	} else {
	header.classList.remove('oculted'); // Mostra o header
	}
});


showProject(projectsSessionStore.get());



// Obeserver
const observerOptions = {
	root: null, // Usa o viewport como referência
	rootMargin: '0px', // Margem adicional ao redor do root
	threshold: 0.1 // Executa o evento quando 10% do elemento está visível
};

//articles
const addArticlesAnimation = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			if (!entry.target.classList.contains('right')) {
				entry.target.classList.add('to-right')
			}
			else {
				entry.target.classList.add('to-left')
			}
		} else {
			entry.target.classList.remove('to-right', 'to-left')
		}
	})
}


// Cria o observador
const observerArticles = new IntersectionObserver(addArticlesAnimation, observerOptions);

// Observa cada elemento
articles.forEach(article => {
	observerArticles.observe(article)
})

// Projects
const addCardsAnimation = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('scale-up')
		} else {
			entry.target.classList.remove('scale-up')
		}
	})
}

const observerProjects = new IntersectionObserver(addCardsAnimation, observerOptions);
const projectElement = [...cards, board]

projectElement.forEach(e => {
	observerProjects.observe(e)
})