// Libs
import fs from 'node:fs/promises';

// Variables
let data;

// Methods
export default async function getDataController (path) {
	data = await fs.readFile(path ,'utf-8');
	return JSON.parse(data);
}