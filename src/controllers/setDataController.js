// Libs
import fs from 'node:fs/promises';

// Methods
export default async function setDataController (data, path) {
	try {
		await fs.writeFile(path, JSON.stringify(data));
	} catch (error) {
		console.log('erro no metodo: setDataController()\n', error);
	}
}