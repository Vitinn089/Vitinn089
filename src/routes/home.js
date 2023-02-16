import express from 'express';
import getStaticData from '../middleware/getStaticData.js';

const router = express.Router();


router.get('/', async (req, res) => {

	const { avatarUrl, projects, projectsImgs } = await getStaticData();


	res.status(200);
	res.render('pages/index', {avatarUrl, projects, projectsImgs});
});

export default router;