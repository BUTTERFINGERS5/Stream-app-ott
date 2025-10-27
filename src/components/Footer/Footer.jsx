import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => (  
    <div className="footer">
    <div className="footer-icons">
      <img src={youtube_icon} alt="" />
      <img src={twitter_icon} alt="" />
      <img src={facebook_icon} alt="" />
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Corporate Information</li>
      <li>Contact us</li>
    </ul>
    <p className='copyright_text'>© 2025 Stream. All rights reserved.</p>
    </div>
  )

export default Footer