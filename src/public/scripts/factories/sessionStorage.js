export default (name) => {
	const get = () => {
		return sessionStorage.getItem(name)
	}

	const set = (data) => {
		if (!sessionStorage.getItem(name))
			sessionStorage.setItem(name, JSON.stringify(data))
	}
	
	const update = (data) => {
		if (sessionStorage.getItem(name))
			sessionStorage.setItem(name, JSON.stringify(data))
	}
	
	const remove = () => {
		if (sessionStorage.getItem(name))
			sessionStorage.removeItem(name)
	}
	return {
		get,
		set,
		update,
		remove
	}
}