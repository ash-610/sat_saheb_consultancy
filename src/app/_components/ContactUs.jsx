import React from 'react'
import './contactus.css'
import EmailIcon from '@mui/icons-material/Email';
import { Business, Call, WhatsApp } from '@mui/icons-material';

const ContactUs = () => {
  return (
    <div id='contact-us' className='contact-section'>
        <h1>Contact Us</h1>

        <div className='contact-wrapper'>
          <div className='contact-info'>
            <p className='contact-icon'> <WhatsApp/> 7974854717</p>
            <p className='contact-icon'> <Call/> 9926032562</p>
          </div>
          <div className='contact-info'>
              <p className='contact-icon'><EmailIcon /> deobacharpe@gmail.com</p>
              <p className='contact-icon'><Business/> St. Francis School Road, Sector 1, Pithampur(Dist. Dhar), MP</p>
          </div>
        </div>
    </div>
  )
}

export default ContactUs