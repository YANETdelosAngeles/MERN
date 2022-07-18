import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom' 
import './VerDetalles.css'

export default function VerDetalles({pokemon}) {

  //guarda el id recibido de Mostrar.js en la constante id
  const id = pokemon._id;
  //asigna a la constante navegar la funcion para recargar la agina
  const navegar = useNavigate();

  function EliminarPokemon(){
      axios.delete('http://localhost:5000/'+id)
      .then( res => {
          console.log(res.data);
          alert('Pokemon Eliminado');  
          //recarga la pagina despues de eliminar
          navegar(0)
      }).catch( err => { console.log(err) })  
  }

  function AgregarImgen(){
    if( pokemon.tipo === "Acero"){ return(
      <img className='image' src='https://pm1.narvii.com/6154/0e13205d4cfa9f158af881d548c8c0a59c989d2a_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( pokemon.tipo === "Agua"){ return(
      <img className='image' src='https://pm1.narvii.com/6154/4e9ba6a3e2bb8dd8b6af5aed858ca08e7be805b3_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( pokemon.tipo === "Bicho"){ return(
      <img className='image' src='https://pm1.narvii.com/6154/e8ae89b17b8e266d603bb2dde190820f4268beb5_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( pokemon.tipo === "Dragon"){ return(
      <img className='image' src='https://pm1.narvii.com/6154/25c10fe787b0abeb6f157238e6a532a7fdcad194_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( pokemon.tipo === "Electrico"){ return(
      <img className='image' src='https://pm1.narvii.com/6154/0e5993c463e705d0c101bc166fea358cfc640d97_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( pokemon.tipo === "Fantasma"){ return(
      <img className='image' src='https://pm1.narvii.com/6154/84231d47186fbb2bbca4aa8c563c2de3c2445817_hq.jpg' alt='tipo de pokemon'></img>
    )}
    else if( pokemon.tipo === "Fuego"){ return(
      <img className='image' src='https://pm1.narvii.com/6154/2dfe9262129296cafa150ebd87518688af4e93d6_hq.jpg' alt='tipo de pokemon'></img>
    )}
  }  

  return (
    <div className='col'>
        <div className='card'>
            {AgregarImgen()}
            <div className='card-body'>
              <h5 className="card-title">{pokemon.nombre}</h5>
              <p className='card-text'>Tipo : {pokemon.tipo}</p>
              <p className='card-text'>Debilidad : {pokemon.debilidad}</p>
              <div className='row'>
                  <div className='col'>
                      <Link to={`detalles/${pokemon._id}`} className="btn">ver más</Link>
                  </div>
                  <div className='col'>
                      <button className="eliminar_modificar modificar"><Link to={`editar/${pokemon._id}`}><i className="bi bi-pencil-square"></i></Link></button>
                      <button className="eliminar_modificar eliminar" onClick={()=>{EliminarPokemon(pokemon._id)}}> <i className="bi bi-trash3-fill"></i> </button>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}
