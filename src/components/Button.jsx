import React from 'react'

const Button = ({text, style}) => {
  return (
    <button className={`py-2 px-4 rounded-[80px] text-sm ${style}`}>{text}</button>
  )
}

export default Button