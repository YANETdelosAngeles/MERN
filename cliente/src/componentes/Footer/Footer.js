import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
        <div className='footer'>
            <div className='section2'>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
            </div>

            <blockquote>
                <hr></hr>
            </blockquote>
            <div className='section3'>
                <span>Todos los derechos reservados ©  2019 -2021</span>
                <span id='contact'>Contacto</span>
                <span id='polity'>Política de privacidad</span>
            </div>    
        </div>
  )
}
