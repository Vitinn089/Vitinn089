export default ({ url }) => {
	const getDataApi = async (path) => {
		const response = await fetch(url + path).then(data => data.json());
		return response;
	}

	return {
		getDataApi
	}
}