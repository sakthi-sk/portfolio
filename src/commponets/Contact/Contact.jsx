import React from 'react'
 import './Contact.css'
import { Link } from 'react-router-dom';
import whatsapp from '../image/whatsapp.png'
import email from '../image/email.png'
import github from '../image/github1.png'
const Contact = () => {
    const PhoneNumber ='7502637232'
     const whatsappLink = `https://wa.me/${PhoneNumber}`;

     const gmailAddress = 'sakthimathan007sm@gmail.com';
       const gmailLink  = `mailto:${gmailAddress}`;
  return (
    <div className='Contact-main'>
          <main className='Contact'>
               <div className='Contact-Left'>
               

                <div className='left-content'>
                 
                     <iframe  
                       className='Map'
                       title="Google Map"
                  
                      loading="lazy"
                      allowFullScreen 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15559.703850213727!2d80.23666107586751!3d13.082680619315427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f78a082097%3A0x9032b3c20b476adb!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1643518567782!5m2!1sen!2sus">
                      </iframe>
                  </div>

               </div>

               {/* Right-contaner */}
               <div className='Contact-Right'> 

                  <div className='Contact-titel'>
                       <h1>Contact</h1>
                       <p>click the icon's</p>
                  </div>
                 

                  <div className='Link-contaners'>

                       
                          <Link to={`${whatsappLink}`} className='whatsappLink'>
                            <img src={whatsapp} className='whatsapp-logo'/>
                             <p className='link-name'>Open WhatsApp Chat<p>7502637232</p></p>
                          </Link>
                       
                       
                          <Link to={`${gmailLink}`} className='emailLink'>
                            <img src={email} className='gmail-logo'/>
                             <p className='link-name'>Open Email <p>sakthimathan007sm@gmail.com</p>  </p>
                          </Link>
                       
                        
                          <Link to={'https://github.com/sakthi-sk?tab=repositories'} className='githubLink'>
                            <img src={github} className='github-logo'/>
                            <p className='link-name'>Github</p>
                          </Link>
                      
                  </div>
                   

                    {/* <div className='right-content'>
                          <div className='whatsapp'>
                          <Link to={`${whatsappLink}`} className='whatsappLink'>
                            <img src={whatsapp}  className='whatsapp-logo'/>
                           <p>Open WhatsApp Chat</p>
                          </Link>
                         
                          </div>

                          <div className='email'>
                          <Link to={`${gmailLink}`}  className='emailLink'>
                          <img src={email}  className='email-logo'/>
                          <p> Open send email</p>
                          </Link>
                          
                          </div>

                          <div className='github'>
                             <Link  className='githubLink'>
                            <img src={github}  className='github-logo'/>
                            <p> Github Link</p>
                          </Link>
                       
                         </div>
                    </div> */}
               </div>
          </main>
    </div>
  )
}

export default Contact
