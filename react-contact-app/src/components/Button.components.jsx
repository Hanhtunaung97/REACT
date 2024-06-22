import React from 'react'

const ButtonComponents = ({children,style,...rest}) => {
  return (
    <button {...rest} className={`${style} px-3 py-2 rounded-lg border border-green-200 duration-200 active:scale-75 block bg-green-700 text-green-100 active:bg-green-100 active:text-green-500 w-1/2 mx-auto`}>{children}</button>
  )
}

export default ButtonComponents