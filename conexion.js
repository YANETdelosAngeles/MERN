const mongoose = require('mongoose');
// dirección para la conexión con la base de datos
//mongoose.connect('mongodb://localhost:27017/CRUD');
mongoose.connect('mongodb://127.0.0.1:27017/CRUD');

const objetobd = mongoose.connection

objetobd.on('connected',()=>{console.log('se está conectando correctamente a la base de datos de mongoDB')})

objetobd.on('error',()=>{console.log('Error en la conexion con mongoDB')})

module.exports = mongoose