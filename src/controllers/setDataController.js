// Libs
import fs from 'node:fs/promises';

// Methods
function setDataController (data, path) {
	fs.writeFile(path, JSON.stringify(data));
}

// Out
export default setDataController;