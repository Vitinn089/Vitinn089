export default ({service}) => {
	const index = async (req, res) => {
		try {
			const response = await service.getDataApi('/projects/').catch(error => {throw error})
			let projects = response.filter(project => project.display)
			
			res.status(200)
			res.render('home/views/index', { projects })
		} catch (error) {
			console.log ('Erro ao fazer requisição.\nError: ' + error)
		}
	}

	return {
		index
	}
}