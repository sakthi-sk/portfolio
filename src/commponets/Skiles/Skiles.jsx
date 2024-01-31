import './Skiles.css'
import React from 'react'
import html from '../image/html.png'
import css from '../image/css-3-icon.png'
import js from '../image/JavaScript-logo.png.webp'
import rlogo from '../image/react-1-logo-png-transparent.png'
const Skiles = () => {
  return (
    <div className='skills-main'>
         <h2>Skills</h2>
        <main>
             
           <div className='SKILLS-contaner'>
           
              <img src={html} className='html'/>

              <img src={css} className='css'/>

              <img src={js} className='js'/>

               <img src={rlogo} className='re'/>
           </div>
        </main>
    </div>
  )
}

export default Skiles
