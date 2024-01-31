import React from 'react'
import './Project.css'
import Flipkart from '../image/Flipkart-logo.png'
import todu from '../image/th.jpg'
import { Link} from 'react-router-dom';

const Project = () => {
  const projectLInkToDoList='https://todo-list-64v97b87s-sakthi-sks-projects.vercel.app/'
  const projectLInkFlipkartclone='https://flipkart-clone-lac.vercel.app/'
  return (
    <div className='Project-main'>
       <main>
          <div className='title'><h1>Project</h1></div>
          <div className='Project-contaner'>

              <Link to={projectLInkFlipkartclone} className='img-contaners-l'>
              
                  <img  src={Flipkart} className='Flipkart-logo'  />
                <p className='link-name'><a href={projectLInkFlipkartclone}>  Flipkart clone</a></p>
              </Link>

              <Link to={projectLInkToDoList} className='img-contaners-r'>
              
                 <img  src={todu} className='Flipkart-logo'/> 
                  <p className='link-name'> <a href={projectLInkToDoList}> ToDo List</a></p>
              </Link>
              
          </div>
       </main>
    </div>
  )
}

export default Project
