import axios from 'axios';
import React , { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Modificar() {

  const params = useParams();
  const id = params.id;
  console.log('id recibido', id)

      
  //Hooks
  const[nombre, setNombre] = useState('')
  const[tipo, setTipo] = useState('')
  const[habilidad, setHabilidad] = useState('')
  const[descripcion, setDescripcion] = useState('')
  const[debilidad, setDebilidad] = useState('')
  
  //obtenemos los datos del id recibido

    axios.get('http://localhost:5000/'+id)
    .then(res => {
    //console.log('pokemon obtenido --> ', res.data)
    const datapokemon = res.data;
    setNombre(datapokemon.nombre)
    setTipo(datapokemon.tipo)
    setHabilidad(datapokemon.habilidad)
    setDescripcion(datapokemon.descripcion)
    setDebilidad(datapokemon.debilidad)
    }).then(err => { console.log(err)});
      

  function EditarPokemon(){
    
      //toma los datos del formulario   
        var Datospokemon = {
          nombre: nombre,
          tipo: tipo,
          habilidad: habilidad,
          descripcion: descripcion,
          debilidad: debilidad
      };
      //envia los datos a la direccion de crear pokemon del archivo pokemon.js
      axios.put('http://localhost:5000/'+id,Datospokemon)
      .then(res => {
          alert('Pokemon Editado')
      })
      .then(err => { console.log(err)});
      
  }

  return (
      <div className='container'>
        <div className='row'>
            <h2 className='mt-4'>Edita tu propio POKEMON</h2>
        </div>
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                  <div className='mb-3 form-floating'>
                      <input type="text" className="form-control" id="floatingInput" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
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

                  <button onClick={() =>EditarPokemon()} formMethod='POST' className='mt-3 btn btn-success'>Editar</button>
            </div>
        </div>
    </div>
  )
}
