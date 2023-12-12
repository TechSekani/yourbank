import React from 'react'

const Button = ({id, text, style, onClick}) => {
  return (
    <button onClick={onClick} className={`py-2 px-4 rounded-[80px] text-sm ${style}`}>{text}</button>
  )
}

export default Button