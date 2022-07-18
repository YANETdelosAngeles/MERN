const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

//se agrega la conexión con mongoDB
const { mongoose } = require('./conexion')

//toma el puerto predefinido o el 5000
app.set('port', process.env.PORT || 5000);

//Middlewares se ejecuta antes de que llega la ruta, nos permite ver las peticiones en consola donde ejecutamos el server
app.use(morgan('dev'));
app.use(express.json());



//importamos routes
app.use(require('./rutas/pokemon'));

//se importa body-parser para poder obtener de los campos del formulario la información
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:'true'}))
app.use(bodyParser.json()) //formato a usar con body-parser

//iniciamos nuestro servidor
app.listen(app.get('port'), function(){
    console.log('El servidor se ejecuta correctamente')
});