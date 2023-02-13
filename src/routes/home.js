import express from 'express';
import projectsImgs from '../functions/db.js';
const router = express.Router();


router.get('/', async (req, res) => {
	// const perfil = await fetch(process.env.URL_GITHUB).then(data => data.json());
	// const projects = await fetch(perfil.repos_url).then(data => data.json());

	const perfil = {};
	const projects = [];

    
	res.status(200);
	res.render('pages/index', {avatar: perfil.avatar_url, projects, projectsImgs});
});

export default router;