// Libs
import { express } from '../server.js';

// Variables
const router = express.Router();

// Methods
router.get('/', (req, res) => {
	res.status(200);
	res.render('pages/about');
});

// Out
export default router;