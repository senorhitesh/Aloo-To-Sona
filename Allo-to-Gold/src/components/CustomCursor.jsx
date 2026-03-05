import React from 'react'

const CustomCursor = ({ x, y }) => {
  return (
    <div 
      className='w-6 h-6 bg-mist-950 rounded-full fixed pointer-events-none z-50' 
      style={{ 
        top: y, 
        left: x,
        transform: 'translate(-50%, -50%)' // Centers the circle on the mouse tip
      }}
    ></div>
  )
}

export default CustomCursor;