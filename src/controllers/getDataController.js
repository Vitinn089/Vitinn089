import fs from 'node:fs/promises';

let data;

async function getDataController (path) {
	data = await fs.readFile(path ,'utf-8');
	return JSON.parse(data);
}

export default getDataController;