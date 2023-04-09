import config from "../../../config/config.js"

export default ({service}) => {
	const index = async (req, res) => {
		try {
			let projects
			const response = await service.getDataApi('/api/vitinn/').catch(error => {throw error})
			projects = response.filter(project => project.display)
			
			res.status(200);
			res.render('home/views/index', { avatarUrl:  config.URL_IMAGE, projects})
		} catch (error) {
			console.log ('Erro ao fazer requisição.\nError: ' + error)
		}
	}

	return {
		index
	}
}