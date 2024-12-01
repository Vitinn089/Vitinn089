export default function showProject (projects) {
	const cardSelected = document.querySelector('.card[data-selected');
	const projectSelected = cardSelected.getAttribute('data-project');
	const currentProject = JSON.parse(projects).filter(project => projectSelected == project.name ? true : false)[0];
	const languages = currentProject.languages.map(language => language.name) ;


	document.querySelector('.board-header img').setAttribute('src', `/images/projects/inicio-${currentProject.name}.png`);
	document.querySelector('.board-header img').setAttribute('alt', `Imagem da capa do projeto.`);
	document.querySelector('.board-header-content h2').textContent = currentProject.title;
	document.querySelector('.board-header-content p').textContent = languages.join(", ")
	document.querySelector('.board-header').setAttribute('href', currentProject.site);
	document.querySelector('.board-content p').textContent = currentProject.description;
	document.querySelector('.board-content ul').innerHTML = '';
	currentProject.topics.forEach(topic => document.querySelector('.board-content ul').innerHTML += `<li><span>${topic.name.toUpperCase()}</span></li>`);
}