import React, {useRef} from 'react'
import './Inquiries.css'
import facebook from '../img/Facebook.png'
import whatsapp from '../img/whatsapp.png'
import twitter from '../img/twitter.png'
import telegram from '../img/telegram.png'
import tiktok from '../img/tiktok.png'
import emailjs from '@emailjs/browser'


const Inquiries = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rxuymiv', 'template_rqqeece', form.current, 'rNsegzPqER3KvZxhT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div className='main-content' id='inquiries'>
        <div className='main-left'>
            <span>
                <h1>For Inquiries please contact!</h1>
                <ul>
                    <li>+256-783-334-207</li>
                    <li>+256-784-573-131</li>
                </ul>
                <hr/>

                <div className='Form'>
                   <h1>Contact via Email</h1>
                    <form id='form' ref={form} onSubmit={sendEmail}>
                        <input type="name" name='user_name' placeholder='Write your name here...' />
                        <input type="email" name='user_email' placeholder='Enter email e.g emma@gmail.com' />
                        <textarea cols="30" name='message' rows="10">Message</textarea>
                        <input type="submit" value="Send" className='Submit'/>
                    </form>
                </div>
            </span>
        </div>
        <div className='main-right'>
            <div className='circle'>
              <h1>Social Media</h1>
              <hr/>
              <div>
              <img src={whatsapp} alt="" />
              <img src={twitter} alt="" />
              <img src={telegram} alt="" />
              <img src={tiktok} alt="" />
              <img src={facebook} alt="" />
              </div>

            </div>
 
        </div>
      </div>
    </div>
  )
}

export default Inquiries
