// Libs
import { express } from '../server.js';
import getStaticData from '../middleware/getStaticData.js';

// Variables
const router = express.Router();

// Methods
router.get('/', async (req, res) => {
	const { avatarUrl, projects } = await getStaticData();

	res.status(200);
	res.render('pages/index', {avatarUrl, projects});
});

// Out
export default router;