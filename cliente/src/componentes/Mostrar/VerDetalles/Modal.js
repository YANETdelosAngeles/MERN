import React, { useState }  from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Modal.css'

export default function Modal() {
  const params = useParams();
  const id = params.id;
  //console.log('id recibido', id);
  console.log('direccion',window.location.pathname);

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

  
   
  function AgregarImgen(tipo){
    if( tipo === "Acero"){ return(
      <img className='imagen' src='https://pm1.narvii.com/6154/0e13205d4cfa9f158af881d548c8c0a59c989d2a_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( tipo === "Agua"){ return(
      <img className='imagen' src='https://pm1.narvii.com/6154/4e9ba6a3e2bb8dd8b6af5aed858ca08e7be805b3_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( tipo === "Bicho"){ return(
      <img className='imagen' src='https://pm1.narvii.com/6154/e8ae89b17b8e266d603bb2dde190820f4268beb5_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( tipo === "Dragon"){ return(
      <img className='imagen' src='https://pm1.narvii.com/6154/25c10fe787b0abeb6f157238e6a532a7fdcad194_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( tipo === "Electrico"){ return(
      <img className='imagen' src='https://pm1.narvii.com/6154/0e5993c463e705d0c101bc166fea358cfc640d97_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( tipo === "Fantasma"){ return(
      <img className='imagen' src='https://pm1.narvii.com/6154/84231d47186fbb2bbca4aa8c563c2de3c2445817_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( tipo === "Fuego"){ return(
      <img className='imagen' src='https://pm1.narvii.com/6154/2dfe9262129296cafa150ebd87518688af4e93d6_hq.jpg' alt='tipo de pokemon'></img>
    )}
  }  

  return (
    <div className="containerM">
      <div className="card-body">
        <h5 className="title">{nombre}</h5>
        <p className="card-text"><b>Tipo :</b> {tipo} {AgregarImgen(tipo)}</p>
        <p className="card-text"><b>Habilidad :</b> {habilidad}</p>
        <p className="card-text"><b>Descripcion :</b> {descripcion}</p>
        <p className="card-text"><b>Debilidad :</b> {debilidad} {AgregarImgen(debilidad)}</p>
      </div>
    </div>
  )
}
