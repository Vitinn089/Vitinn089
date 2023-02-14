// Libs
import fs from 'node:fs';
// import setImageController from '../controllers/setImageController';
// import setDataController from '../controllers/setDataController';

// Methods
const getStaticData = async () => {
	let user
	const avatar

if (!fs.existsSync('../public/images/avatar.png')){
	setImageController(avatar, 'avatar', 'png');
}
if (!fs.existsSync('../public/db/dataGitHub.json')){
	
}
	
	console.log();


	// const user = await fetch(process.env.URL_GITHUB).then(data =>data.json());
	// const avatar = await fetch(user.avatar_url).then(data =>data.json());

	// setDataController(user, '../db/data-gitHub.json');
	
};

getStaticData();

// Out
export default getStaticData;