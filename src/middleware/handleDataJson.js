import getDataController from '../controllers/getDataController.js';

let headers = {
	Authorization: process.env.TOKEN_GITHUB
};

export default async function handleDataJson (path) {
	const repos =  await getDataController('src/' + path);
	const configs = await getDataController('src/db/config.json');

	let obj = repos.map(async (repo) => {
		let images = configs.filter(project => project.name == repo.name)[0];
		let languages = Object.keys(await fetch(repo.languages_url, {headers}).then(res => res.json())).reduce((text, lang, i, a) => {
			i == (a.length-1) ?  text += lang : text += lang + ' // ';
			return text;
		}, '');

		return {
			id: repo.id,
			name: repo.name,
			description: repo.description,
			url: repo.html_url,
			languages,
			topics: repo.topics,
			...images
		};
	});
	
	return await Promise.all(obj);
}