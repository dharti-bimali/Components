/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './card.css'
import image from '../img/image.jpg'
const card = () => {
  return (
    <div className="mainCard">
    <div className='card'> 
      <img src={image}/>
      <div>
        <h2>Kaye Morris</h2>
        <h3>UX Developer</h3>
        <p>
        Empowering users through captivating interfaces, turning ideas into
          pixel-perfect realities.
        </p>
        <button>Enroll Now</button>
      </div>
    </div>

    
    
    </div>
  )
}

export default card
