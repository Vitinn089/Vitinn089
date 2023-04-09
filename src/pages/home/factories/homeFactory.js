import HomeController from "../controllers/homeController.js"
import HomeService from "../services/homeService.js"
import config from "../../../config/config.js"

export default {
	initialize() {
		return HomeController({
			service: HomeService({ url: config.URL_API })
		})
	}
}