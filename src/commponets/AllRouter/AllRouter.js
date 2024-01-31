import React from 'react'
import Home from "../Home/Home";
 import About from "../About/About";

import Project from "../Project/Project";
import {Routes, Route } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Nabare from '../NavBare/Nabare';
const AllRouter = () => {
  return (
    <div className='router'>
     <Nabare/>
      <Routes>
        
           <Route path='/' element={<Home/>}/>
           <Route path='/about'  element={<About/>}/>
           <Route path='/Project' element={<Project/>}/>
           <Route path='/Contact' element={<Contact/>}/>
       </Routes>
    </div>
  )
}

export default AllRouter
