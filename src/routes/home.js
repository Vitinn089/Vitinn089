// Libs
import { express } from '../server.js';
import getStaticData from '../middleware/getStaticData.js';

// Variables
const router = express.Router();

// Methods
router.get('/', async (req, res) => {
	const { avatarUrl, projects, projectsImgs } = await getStaticData();

	res.status(200);
	res.render('pages/index', {avatarUrl, projects, projectsImgs});
});

// Out
export default router;