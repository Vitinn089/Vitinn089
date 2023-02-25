// Libs
import fs from 'node:fs';
import path from 'node:path';
import setImageController from '../controllers/setImageController.js';
import setDataController from '../controllers/setDataController.js';
import handleDataJson from './handleDataJson.js';

// Variables
let avatarUrl;
let projects;
let paths = {
	avatar: 'images/avatar.png',
};

let headers = {
	Authorization: process.env.TOKEN_GITHUB
};

// Methods
export async function cachingData() {
	try {
		console.log('\nRealizando fetch\n');
		const perfil = await fetch(process.env.URL_GITHUB,{headers} ).then(async data => await data.json());
		const repos = await fetch(perfil.repos_url, {headers}).then(data => data.json());
		setDataController(perfil, 'src/' + paths.perfil);
		setDataController(repos, 'src/' + paths.repos); 
		setImageController(perfil.avatar_url, 'avatar', 'png');
	} catch (error) {
		console.log('Erro no metodo: cachingData()\n', error);
	}
}

export default async function getStaticData () {
	paths.perfil = process.env.PATH_PERFIL;
	paths.repos = process.env.PATH_REPOS;
	
	const isExistsFiles = !fs.existsSync(path.resolve('src/public', paths.avatar)) || !fs.existsSync(path.resolve('src/', paths.perfil)) || !fs.existsSync(path.resolve('src/', paths.repos));

	if (isExistsFiles)
		await cachingData();

	avatarUrl = paths.avatar;
	projects = await handleDataJson(paths.repos);

	return {avatarUrl, projects};
}