// se declara el modelo del datos
const mongoose = require('mongoose');
const eschema  = mongoose.Schema;
const eschemapokemon = new eschema(
    {
        nombre: String,
        tipo: String,
        habilidad: String,
        descripcion: String,
        debilidad: String,
        id: String
    }
)

module.exports = mongoose.model('Pokemon',eschemapokemon);