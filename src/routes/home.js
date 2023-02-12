import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
	const perfil = await fetch(process.env.URL_GITHUB).then(data => data.json());
    
	res.status(200);
	res.render('pages/index', {avatar: perfil.avatar_url});
});

export default router;