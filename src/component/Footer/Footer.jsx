import React from 'react'
import './Footer.css'
import footer from '../img/wave.png'
import back from '../img/back.jpg'
import {Link} from 'react-scroll'


const Footer = () => {
  return (
    <div>
        
      <div className='main-footer-content' id='footer'>
        
          <Link className='back' to='navbar' smooth={true} duration={1000}><img src={back} alt="" /></Link> 
         <hr/>
         <p>Copyright &copy; 2022 || Designed by Okello Emmanuel</p>
        <img src={footer} alt="" />
      </div>
    </div>
  )
}

export default Footer
