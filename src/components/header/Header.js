import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='header-details'>
                <div className='header-logo'>
                    <Link to="/">
                       <img src='/images/logo.png'/>
                    </Link>
                </div>
                <div className='header-title'>
                    <img src="/images/title-logo.png"></img>
                    <p>FORALL</p>
                    <span>We Fill The Gap</span>
                </div>
                <div className='header-links'>
                    <span>Our Services</span>
                    <span>About Us</span>
                    <span>Join Us</span>

                </div>   
            </div>
        </div> 
    </div>
  )
}

export default Header
