// Libs
import { express } from '../server.js';
import handleDataJson from '../middleware/handleDataJson.js';

// Variables
const router = express.Router();

// Methods
router.get('/repos', async (req, res) => {
	handleDataJson(process.env.PATH_REPOS).then(repos => {
		res.status(200);
		res.json(repos);
	});
});

// Out
export default router;