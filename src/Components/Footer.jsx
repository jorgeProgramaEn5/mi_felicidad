import React from 'react'
import { socialMedia } from '../Constant';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='container_footer'>
      <div className='derechos'>
        <p>
            2023 Happiness. All Rights Reserved
        </p>
      </div>
      <div className='media'>
        {socialMedia.map((social, index)=>(
          <img 
            key={social.id} 
            src={social.icon} 
            alt={social.icon}
            className="" 

          />
        ))}
      </div>
    </div>
  )
}

export default Footer