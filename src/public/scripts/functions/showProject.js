export default function showProject (projects) {
	const cardSelected = document.querySelector('.card[data-selected');
	const projectSelected = cardSelected.getAttribute('data-project');
	const currentProject = JSON.parse(projects).filter(project => projectSelected == project.name ? true : false)[0];

	document.querySelector('.board-header img').setAttribute('src', `/images/inicio-${currentProject.name}.png`);
	document.querySelector('.board-header-content h2').textContent = currentProject.title;
	document.querySelector('.board-header-content p').textContent = currentProject.languages;
	document.querySelector('.board-header').setAttribute('href', currentProject.repository);
	document.querySelector('.board-content p').textContent = currentProject.description;
	document.querySelector('.board-content ul').innerHTML = '';
	currentProject.topics.forEach(topic => document.querySelector('.board-content ul').innerHTML += `<li><span>${topic.toUpperCase()}</span></li>`);
}