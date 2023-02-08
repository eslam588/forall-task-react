import React from 'react'
import "./providercard.css"
import { Link } from 'react-router-dom'

const ProviderCard = ({provd}) => {


  return (
    <div className='provider-card'>
        <Link to={`/provider/${provd.id}`} state={{ provider: provd}}>
          <img src={provd.logo["128px"]} alt='img'/>
          <p>{provd.name.key}</p>
        </Link>
    </div>
  )
}

export default ProviderCard
