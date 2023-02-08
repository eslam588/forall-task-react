import React from 'react'
import Providers from '../../components/providers/Providers'
import "./home.css"


const Home = () => {
  return (
    <div className='home-page'>
      <div className='container'>
        <div className='section-install'>
            <div className='install-details'>
              <h2>We Fill Your Gap</h2>
              <p>we are ready to bring you all your needs anywhere at any time through our useful mobile application. No need to waste time you are one click away</p>
              <button>Install Now</button>
            </div>
            <img src="/images/social-image.png" alt='img'/> 
        </div>
        <div className='section-offer'>
            <img src="/images/offer-image.png" alt='img' /> 
            <div className='offer-details'>
              <h2>What We Offer</h2>
              <p>We Offer you different kinds of services that will help you  save your time and be more comfortable</p>
              <button>Our Services</button>
            </div>
        </div>
     </div>
     <h2 className='providers-header'>Our Providers</h2>
     <Providers />
    </div>
  )
}

export default Home
