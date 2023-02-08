import React from 'react'
import { useLocation } from "react-router-dom";
import "./provider.css"

const Provider = () => {

  const location = useLocation();
  const provider = location.state.provider;

  console.log(provider);

  
  return (
    <div className='single-provider'>
      <div className='container'>
          <div className='provider-details'>
              <img src={provider.logo["128px"]} />
              <p>{provider.name.key}</p>
              <span>{provider.description.key}</span>
          </div>
          <div className='provider-extra'>
            <div className='overview'>
              <h3>Overview</h3>
              <p>Our Leadership Principles aren't just a pretty inspirational wall hanging. These Principles work hard, just like we do. Amazonians use them, every day, whether they're discussing ideas for new projects, deciding on the best solution for a customer's problem, or interviewing candidates. It's just one of the things that makes Amazon peculiar.</p>
            </div>
            <div className='features'>
              <h3>Features and Benefits</h3>
              <p>We aim to be Earth’s most customer centric company. Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximize their success</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Provider
