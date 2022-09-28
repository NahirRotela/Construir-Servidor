/* 
* Archivo de configuración de la aplicación
* En este archivo se configuran los parámetros de la aplicación
* como ser: el puerto, variables de entorno, rutas y middlewares 
*/

const express = require('express') // Importando librería express
const app = express(); // Inicializando express
const cors = require('cors');
const morgan = require('morgan');
// const helmet = require('helmet');
const path = require('path');
require('ejs');


//ejecutando Bd
const conexionBD = require('./src/db/conecction')
conexionBD()
// Para que el servidor comprenda archivos con formato json
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Configuración de variables de entorno
//const port = process.env.PORT || 4000;

// Otros middlwares
app.use(cors());
app.use(morgan('dev'));
// app.use(helmet());


// Motor de plantillas ejs
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Importando rutas
app.use(require('./src/routes/home.routes')); 
app.use(require('./src/routes/user.routes'));
app.use(require('./src/routes/task.routes'))

//template engine
// app.set('views', path.join(_dirname, 'views'));
// app.set 

// Configurando puerto

app.listen(3000, () => console.log(`Server running on http://localhost:3000`));

// Ejecutar con: npm run dev
// Para detener el servidor: Ctrl + C