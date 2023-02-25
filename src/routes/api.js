// Libs
import { express } from '../server.js';
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