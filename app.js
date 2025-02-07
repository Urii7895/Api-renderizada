import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import computadorasRouter from './src/rutes/computadores.rutes.js';

// Configuración para usar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('port', process.env.PORT || 3004);

// Configurar el motor de vistas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views")); // Esto ahora debería funcionar bien

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar el router para las rutas de computadoras
app.use('/ownbase/coleccion', computadorasRouter);

export default app;
