import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
// import cors from 'cors';
import { fileURLToPath } from 'node:url';
import bodyParser from 'body-parser';

// Rotas
import  homePage from  './routes/home.js';
import  aboutPage from  './routes/about.js';

dotenv.config({
	path: process.env.NODE_ENV === 'development ' ? '.env.develop' : process.env.NODE_ENV === 'test' ? '.env.testing' : '.env'
});

const app = express();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const acessLog = (req, res, next) => {
	const timeElapsed = Date.now();
	const time = new Date(timeElapsed);
	console.log(time.toLocaleString('pt-Br'));
	next();
};


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(acessLog);
app.use('/', homePage);
app.use('/about', aboutPage);


app.listen(PORT, () => console.log(`\nServer is runing in http://localhost:${PORT}/\n`));