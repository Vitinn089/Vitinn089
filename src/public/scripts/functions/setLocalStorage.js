const url = document.location.href + 'api/';

const handleRequest = async (path) => {
	await fetch(`${url}/${path}`).then(res => res.json()).then(res => sessionStorage.setItem(path, JSON.stringify(res)));
};

export default async function setLocalStorage () {
	if (!sessionStorage.repos){
		console.log('localStorage');
		await handleRequest('repos');
	}	
}

await setLocalStorage();