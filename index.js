const express = require('express');
const { dbConection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

//crear servidor de Express
const app = express();

//Base de datos
dbConection();

//CORS
app.use(cors())

//Directorio público
app.use( express.static('public')); //Aquí hacemos referenca a la carpeta llamada public

//Lectura y parseo del body
app.use( express.json() );

//Rutas
app.use('/api/auth', require('./routes/auth')); //todo lo que el archivo auth.js de la carpeta routes exporte, lo va a habilitar en la ruta /api/auth 
app.use('/api/events', require('./routes/events'));


//Escuchar peticiones
app.listen(process.env.PORT, () => { // Aquí hacemos referencia al archivo.env a la variable PORT
    console.log( `Servido corriendo en el puerto ${process.env.PORT}`)
});

