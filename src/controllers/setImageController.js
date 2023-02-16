// Libs
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Methods
async function setImageController (url, name, type) {
	https.get(url, (res) => {
		const path = `${__dirname}/../public/images/${name}.${type}`;
		const filePath = fs.createWriteStream(path);
		res.pipe(filePath);
		filePath.on('finish', () => {
			filePath.close();
			console.log(`Download ${name+ '.' + type} completed`);
		});
	});
}

// Out
export default setImageController;