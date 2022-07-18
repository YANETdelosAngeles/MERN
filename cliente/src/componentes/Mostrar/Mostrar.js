import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VerDetalles from './VerDetalles/VerDetalles'

export default function Mostrar() {

  //hooks
  const[datapokemon,setdatapokemon] = useState([])

  useEffect(() => {
      axios.get('http://localhost:5000/').then( res =>{
          //console.log(res.data)
          setdatapokemon(res.data)
          //console.log(res.data)
      }).catch(err => {
          console.log(err)
      })
  },[])

 //mapear lista de pokemones para que cada elemento actue como un item
  const pokemones = datapokemon.map(pokemon => {
    return(
        <VerDetalles pokemon={pokemon}></VerDetalles>
    )
  })

  return (
    <div className='container'>
      <div className='row align-items-start'>
        {pokemones}
      </div>
    </div>
  )
}
