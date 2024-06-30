import React from 'react'

const ButtonComponents = ({children,style,...rest}) => {
  return (
    <button {...rest} className={` bg-blue-400 text-white rounded-lg py-2 px-3  w-1/2 mx-auto active:text-blue-500 active:bg-white border active:border-blue-400 duration-200 active:scale-75 ${style}`}>{children}</button>
  )
}

export default ButtonComponents