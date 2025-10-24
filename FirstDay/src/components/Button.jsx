import React from 'react'
import './button.css'
const Button = ({onClick}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={onClick}>Click Me</button>
    </div>
  )
}

export default Button
