import './Naveare.css'
import logo from '../image/faceaiimage.jpg'
import {useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import resum  from '../image/SAKTHIMATHAN k .pdf'

const Nabare = () => {

    const [naveItem,setNaveItems]= useState({display:"flex"})
    const[ mobileNave,setMobileNave]=useState({display:'none'})
    
    const [btnValu,setButValu]=useState(true)
    const [displayWitdh,setDispplayWitdh]=useState('')
    
    const showNaveItems=()=>{
      const value = btnValu? setButValu(false) : setButValu(true)
      
     const display = btnValu ? setMobileNave({display:"flex"}): setMobileNave({display:"none"})
      return display
       }


   const navegate= useNavigate()

   const navegates=(e)=>{
     navegate(e)
     showNaveItems()
   }
    
   useEffect(() => {
    
    const handleResize = () => {
      
      const screenWidth = window.innerWidth;
        setDispplayWitdh(screenWidth)
       if( 622>=displayWitdh){
        
         setNaveItems({display:"flex"})
         setMobileNave({display:"none"})
        
      }
      else{
       setNaveItems({display:"none"})
        setMobileNave({display:"flex"})
      }
      
   
    };

   
    window.addEventListener('resize', handleResize);

  } ,[]);

  
 
  
  return (
    <div className='NaveBare-main'>

     <nav>

        <div className='NaveLogo'>
          <img src={logo}/>
          <h1>sk</h1>
       </div>

       <div className='nave-List' >
           <div className='burger-tag' onClick={showNaveItems} >
                <div></div>
                <div></div>
                <div></div>
           </div>
        
           <ul >
               <li><Link to={'/Contact'} className='link-tag' >Contact</Link></li>
               <li><Link to={'/Project'} className='link-tag'>Project</Link></li>
               <li> <Link to={'/About'} className='link-tag'>About</Link></li>
               <li><Link to={'/'} className='link-tag'>Home</Link></li>
               <li><a className='resum' download href={resum}>download CV</a></li>
           </ul>
             

             <ul style={mobileNave} className='mobile-nave' >
               <li className='link-tag' onClick={()=> navegates('/Contact')} > Contact</li>
               <li onClick={()=> navegates('/Project')}  className='link-tag'> Project</li>
               <li onClick={()=> navegates('/About')}  className='link-tag'> About</li>
               <li onClick={()=> navegates('/')}  className='link-tag'>Home</li>
               <li id='resum'><a className='resum' download href={resum}>download CV</a></li>
             </ul>
       </div>
       
    </nav>
     
      
    </div>
  )
}

export default Nabare
