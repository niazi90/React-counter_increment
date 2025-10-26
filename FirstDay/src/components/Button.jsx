import React from 'react'
import './button.css'
const Button = ({onClick,title}) => {
  return (
    <div className='button-container'>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button
