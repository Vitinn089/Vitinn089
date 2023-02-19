import getDataController from '../controllers/getDataController.js';

export default async function handleDataJson (path) {
	const repos =  await getDataController('src/' + path);
	const projectsImages = await getDataController('src/db/projectsImages.json');

	let obj = repos.map(async (repo) => {
		let images = projectsImages.filter(project => project.name == repo.name)[0];

		return {
			id: repo.id,
			name: repo.name,
			description: repo.description,
			url: repo.html_url,
			languages: await fetch(repo.languages_url).then(res => res.json()),
			...images
		};
	});
	
	return await Promise.all(obj);
}