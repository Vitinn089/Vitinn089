// Methods
export default function acessLog (req, res, next) {
	const timeElapsed = Date.now();
	const time = new Date(timeElapsed);
	console.log(`${time.toLocaleString('pt-Br')}\t${req.path}\t${req.connection.remoteAddress}`);
	next();
}