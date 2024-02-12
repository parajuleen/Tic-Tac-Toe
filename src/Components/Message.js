import React from 'react'
import img1 from '../Assets/Cat.gif'

const Message = ({winner}) => {





  return (
    <div className="message">
        <h1> Player {winner.player} won</h1>
        <img src={img1} alt='cat' className='dance'/>
    </div>
  )
}

export default Message
