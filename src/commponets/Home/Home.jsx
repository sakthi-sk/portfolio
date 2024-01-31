import './Home.css'
import React from 'react'
import homeImgae from '../image/reactaiimge.jpg'
import About from '../About/About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'

const Home = () => {


  return (
    <div className='home-main'>
       <main>

       <div className='contend-div'>
       <div className='contend'> 
        <h3>Hello, I'm</h3>
           <h1>Sakthi mathan</h1>
           <h2>A <a>Creative Designer</a> From <samp>Chennai</samp></h2>
           <p>I'm creative designer, and I'm very passionate and dedicated to my work.</p>
       </div>
            
            
       </div>

        <div className='image-div'>
            <img src={homeImgae}/>
          
        </div>
       </main>
         <>
          <About />
          <Project/>
          <Contact/>
         </>
    </div>
  )
}

export default Home
