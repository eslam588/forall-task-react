import React from 'react'
import "./providercard.css"
import { Link } from 'react-router-dom'

const ProviderCard = ({provd}) => {

  console.log(provd);

  return (
    <div className='provider-card'>
        <Link to={`/provider/${provd.id}`} state={{ provider: provd}}>
          <img src={provd.logo["128px"]}/>
          <p>{provd.name.key}</p>
        </Link>
    </div>
  )
}

export default ProviderCard
