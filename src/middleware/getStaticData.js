// Libs
import fs from 'node:fs';
import path from 'node:path';
import setImageController from '../controllers/setImageController.js';
import setDataController from '../controllers/setDataController.js';
import getDataController from '../controllers/getDataController.js';



// Variables
import projectsImgs from '../db/db.js';
let avatarUrl;
let projects;
let paths = {
	avatar: 'images/avatar.png',
	perfil: 'db/perfil.json',
	repos: 'db/repos.json'
};

// Methods
export async function cachingData() {
	try {
		const perfil = await fetch(process.env.URL_GITHUB).then(async data => await data.json());
		const repos = await fetch(perfil.repos_url).then(data => data.json());
		setDataController(perfil, 'src/' + paths.perfil);
		setDataController(repos, 'src/' + paths.repos); 
		setImageController(perfil.avatar_url, 'avatar', 'png');
	} catch (error) {
		console.log('Erro no metodo: cachingData()\n', error);
	}
}

export default async function getStaticData () {
	const isExistsFiles = !fs.existsSync(path.resolve('src/public', paths.avatar)) || !fs.existsSync(path.resolve('src/', paths.perfil)) || !fs.existsSync(path.resolve('src/', paths.repos));
	console.log(path.resolve('src/', paths.avatar));

	if (isExistsFiles)
		await cachingData();

	avatarUrl = paths.avatar;
	projects = await getDataController('src/' + paths.repos);

	return {avatarUrl, projects, projectsImgs};
}