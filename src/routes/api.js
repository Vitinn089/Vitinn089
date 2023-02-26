// Libs
import { express } from '../../api/index.js';
import getStaticData from '../middleware/getStaticData.js';

// Variables
const router = express.Router();

// Methods
router.get('/repos', async (req, res) => {
	getStaticData().then(({projects}) => {
		res.status(200);
		res.json(projects);
	});
});

// Out
export default router;