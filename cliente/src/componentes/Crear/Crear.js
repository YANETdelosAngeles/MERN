import React, { useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import './Crear.css'

export default function Crear() {
  //Hooks
  const[nombre, setNombre] = useState('')
  const[tipo, setTipo] = useState('')
  const[habilidad, setHabilidad] = useState('')
  const[descripcion, setDescripcion] = useState('')
  const[debilidad, setDebilidad] = useState('')

  // La función es llamada por el boton Crear
  function CrearPokemon(){
  
    //toma los datos del formulario   
      var pokemon = {
          nombre: nombre,
          tipo: tipo,
          habilidad: habilidad,
          descripcion: descripcion,
          debilidad: debilidad,
          id: uniqid()
      };
      //envia los datos a la direccion de crear pokemon del archivo pokemon.js
      axios.post('http://localhost:5000/crear',pokemon)
      .then(res => {
          alert('Pokemon Creado')
      })
      .then(err => { console.log(err)});
  }
  
  return (
    <div className='container crear'>
        <div className='row'>
            <h2 className='mt-4 titleC'>Crea tu propio POKEMON<img className='icoPokemon' src='https://icons-for-free.com/download-icon-pikachu-1320568181523508516_256.png' alt='...'></img></h2>
        </div>
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                  <div className='mb-3 form-floating'>
                      <input type="text" className="form-control" id="floatingInput" value={nombre} onChange={(e) => setNombre(e.target.value)} ></input>
                      <label htmlFor='nombre'>Nombre</label>
                  </div>

                  <div className='form-floating'>
                      <select defaultValue={"default"} className="form-select" id="floatingSelect" aria-label="Floating label select example" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="default" selected>Selecciona una opción</option>
                        <option value="Acero">Acero</option>
                        <option value="Agua">Agua</option>
                        <option value="Bicho">Bicho</option>
                        <option value="Dragon">Dragón</option>
                        <option value="Electrico">Electrico</option>
                        <option value="Fantasma">Fantasma</option>
                        <option value="Fuego">Fuego</option>
                      </select>
                      <label htmlFor='tipo'>Tipo de pokemon</label>
                  </div>

                  <div className='mt-3 form-floating'>
                      <input type="text" className="form-control" id="floatingInput" value={habilidad} onChange={(e) => setHabilidad(e.target.value)}></input>
                      <label htmlFor='habilidad'>Habilidad</label>
                  </div>

                  <div className="mt-3 form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    <label htmlFor='descripcion'>Descripcion</label>
                  </div>

                  <div className='mt-3 form-floating'>
                      <select  defaultValue={"default"} className="form-select" id="floatingSelect" aria-label="Floating label select example" value={debilidad} onChange={(e) => setDebilidad(e.target.value)}>
                        <option value="default" selected>Selecciona una opción</option>
                        <option value="Acero">Acero</option>
                        <option value="Agua">Agua</option>
                        <option value="Bicho">Bicho</option>
                        <option value="Dragon">Dragón</option>
                        <option value="Electrico">Electrico</option>
                        <option value="Fantasma">Fantasma</option>
                        <option value="Fuego">Fuego</option>
                      </select>
                      <label htmlFor='debilidad'>Debilidad</label>
                  </div>

                  <button onClick={() =>CrearPokemon()} formMethod='POST' className='mt-3 btn'>Crear</button>
            </div>
        </div>
    </div>
  )
}
