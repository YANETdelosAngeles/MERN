const express = require('express');
const router = express.Router();

// se importa el modelo de pokemon
const model = require('../models/modeloPokemon');

// rutas

//leer lista de pokemones
router.get('/', async (req,res) => {
    const ListaPokemones = await model.find();
    console.log(ListaPokemones);
    res.json(ListaPokemones);
});

//obtener un unico documento
router.get('/:id', async (req,res) => {
    const pokemon = await model.findById(req.params.id);
    res.json(pokemon);
});

//crear un nuevo pokemon
router.post('/crear', async (req,res) => {
    //recibe los datos del formulario enviado por crear.js
    console.log('datos para el post recibidos');
    const { nombre,tipo,habilidad,descripcion,debilidad } = req.body;
    const nuevoPokemon = new model({ nombre,tipo,habilidad,descripcion,debilidad });
    console.log('post-->  ', nuevoPokemon);
    //manda los datos a la base de datos mongo
    await nuevoPokemon.save();
    res.json({ status: 'pokemon creado' });
});

//edita un pokemon
router.put('/:id', async (req, res) =>{
    // recibe los datos y toma el id del dato a modificar
    const { nombre,tipo,habilidad,descripcion,debilidad } = req.body;
    const modificarPokemon = { nombre,tipo,habilidad,descripcion,debilidad };
    // manda los datos a la base de datos mongo
    await model.findByIdAndUpdate(req.params.id, modificarPokemon);
    console.log(req.params.id);
    res.json({ status: 'pokemon modificado' });
});

//eliminar un pokemon
router.delete('/:id', async (req, res) =>{
    // toma el id del documento a eliminar de la base de datos mongo
    await model.findByIdAndRemove(req.params.id);
    console.log('delete---> ',req.params.id);
    res.json({ status: 'pokemon eliminado' });
});


module.exports = router;