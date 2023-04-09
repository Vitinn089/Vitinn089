// Libs
import { express } from '../server.js';	
import homeFactory from '../pages/home/factories/homeFactory.js'

// Variables
const router = express.Router()


// Methods
router.get('/', (req, res) => {
	const controller = homeFactory.initialize()
	
	controller.index(req, res)
})

// Out
export default router