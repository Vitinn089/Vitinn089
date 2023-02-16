const cardSelected = document.querySelector('.card[data-selected');
const projectSelected = cardSelected.getAttribute('data-project');
const descriptionProject = cardSelected.querySelector('.description');


export default function alterProject (projectSelected, projectImages) {
	console.log('cheguei');
	const currentProjectsImages = projectImages.filter(project => projectSelected.name == project.name ? true : false);

	let image = document.querySelector('.desc-header img');
	let h2 = document.querySelector('.desc-header-content h2');
	let p = document.querySelector('.desc-header-content p');
	let p2 = document.querySelector('.desc-content p');
	let ul = document.querySelector('.desc-content ul');

	image.setAttribute('src', currentProjectsImages.imageUrl);
	h2.innerHTML = currentProjectsImages.title;
	p2.textContent = projectSelected.description;
}

