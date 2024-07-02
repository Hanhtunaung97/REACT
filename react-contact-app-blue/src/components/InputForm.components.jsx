import React from 'react'

const InputFormComponents = ({type,name,label,placeholder="",...rest}) => {
  return (
    <div className='flex flex-col gap-y-2'>
        <label className=' text-lg text-blue-400 select-none cursor-pointer' htmlFor={name}>{label}</label>
        <input {...rest} className=' px-3 py-2 border-2 border-blue-200 rounded-lg duration-200 outline-blue-300' type={type} name={name} id={name} placeholder={placeholder} required />
    </div>
  )
}

export default InputFormComponents