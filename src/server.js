// Libs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import bodyParser from 'body-parser';
import acessLog from './middleware/acessLog.js';

// Import rotes
import  homePage from  './routes/home.js';
import  aboutPage from  './routes/about.js';
import 	dataApi from  './routes/api.js';

// Configs
dotenv.config({
	path: process.env.NODE_ENV === 'development ' ? '.env.develop' : process.env.NODE_ENV === 'test' ? '.env.testing' : '.env'
});
const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(acessLog);

// routes
app.use('/', homePage);
app.use('/about', aboutPage);
app.use('/api', dataApi);

app.listen(PORT, () => console.log(`\nServer is runing in http://localhost:${PORT}/\n`));

export  {express};