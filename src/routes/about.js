import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200);
	res.render('pages/about');
});

export default router;