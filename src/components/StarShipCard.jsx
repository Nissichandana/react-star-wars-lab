import React from 'react'

function StarShipCard({oneship}) {
  const shipname = oneship.name;
  return (
    <div className='star'>{oneship.name}</div>
  )
}

export default StarShipCard   


//<div className="ship">{starship.name}</div>