import './About.css'
import React from 'react'
import img from '../image/imgreacr.jpg'
import Skiles from '../Skiles/Skiles'
import resum from '../image/SAKTHIMATHAN k .pdf'

const About = () => {
  return (
    <div className='About-main'>
     
         <main>
              <div className='contaner-left'>

              <div>
                 <div className='img-contaner'>
                       <img src={img}/>
                  </div>
              </div>
                   

              </div>
              <div className='contaner-right'>
                   <div className='content-about'>
                         <h3>I'm a Designer</h3>
                         <h1>web designer</h1>
                         <p>
                         Hello there! I'm a web designer, and I'm very passionate and dedicated to my work.
                         I enjoy every step of the design process,<br/><br/>
                         <li>Built responsive UI using Javascript library-</li>
                          <li> Complete understanding of ReactJS and its main fundamentals likeJSX, Virtual DOM, component lifecycle, Route</li>
                          <li> Familiarity with popular React.js workflows -Redux</li> 

                          </p>
                          <li><a className='resuma' download href={resum}>download CV</a></li>
                   </div>
              </div>
         </main>
         <>
          <Skiles/>
         </>
    </div>
  )
}

export default About
