// Libs
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import config from './config/config.js';
// import cors from 'cors';
import bodyParser from 'body-parser';
import acessLog from './middleware/acessLog.js';

// Import rotes
import  homePage from  './routes/home.js';

const app = express();
const PORT = config.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

// middlewares
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(acessLog)

// routes
app.use('/', homePage)

app.listen(PORT, () => console.log(`\nServer is runing in http://localhost:${PORT}/\n`))

export  {express}