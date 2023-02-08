import React from 'react'
import "./footer.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
          <div className='footer-details'>
               <div className='footer-about-us'>
                       <h2>About Us</h2>
                       <div className='resourses'>
                          <span>Our History</span>
                          <span>How We Work</span>
                          <span>Resourses</span>
                       </div>
                       <p className='app-store'>
                         <img src='/images/google-play.png' />
                         <img src='/images/app-store.png'/>
                       </p>
                </div>
                <div className='footer-links'>
                      <img src="/images/title-logo.png"></img>
                      <p>FORALL</p>
                      <div className='links-images'>
                        <img src='/images/facebook-icon.png' />
                        <img src='/images/instgram-icon.png' />
                        <img src='/images/linkedin-icon.png' />
                        <img src='/images/twitter-icon.png'/>
                      </div>
                </div>
                <div className='footer-address'>
                   <h2><img src="/images/location.png" /> Saudi Arabia</h2>
                   <p>Jeddah, Sultan st, Lilyan Tower 2, 11th floor</p>
                   <p><b>Email :</b> hello@forall.com <b>office :</b> +00 123 456 789</p>
                </div> 
          </div>
      </div>
    </div>
  )
}

export default Footer
