import React from 'react'

const Buttons = ({text,color}) => {
  return (
    <div>
        <button style={{backgroundColor: color}}>
        {text}
        </button>
    </div>
  ) 
}

export default Buttons