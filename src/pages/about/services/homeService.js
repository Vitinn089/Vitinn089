export default ({ url }) => {
	const getDataApi = async (path) => {
		const response = await fetch(url + path).then(data => data.json()).catch(err => console.log(err));
		return response;
	}

	return {
		getDataApi
	}
}