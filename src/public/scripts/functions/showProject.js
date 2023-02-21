export default function showProject () {
	const cardSelected = document.querySelector('.card[data-selected');
	const projectSelected = cardSelected.getAttribute('data-project');
	const currentProject = JSON.parse(localStorage.repos).filter(project => projectSelected == project.name ? true : false)[0];


	const languageMsg = Object.keys(currentProject.languages).reduce((text, lang, i, a) => {
		i == (a.length-1) ?  text += lang : text += lang + ' // ';
		return text;
	}, '');

	document.querySelector('.board-header img').setAttribute('src', `/images/inicio-${currentProject.name}.png`);
	document.querySelector('.board-header-content h2').textContent = currentProject.title;
	document.querySelector('.board-header-content p').textContent = languageMsg;
	document.querySelector('.board-content p').textContent = currentProject.description;
	// let ul = document.querySelector('.desc-content ul');
}