import React, { useState } from 'react'

const Checker = () => {
    const [done,setDone]=useState(false);
    const checkHandler=() => {
        setDone(!done);
    }
  return (
    <div className='border border-rose-100 p-10  m-10'>
        <div className=' flex gap-3 items-center'>
            <input onChange={checkHandler} checked={done} type="checkbox" name="checker" id="checkId"  className=' w-5 h-5 border border-rose-300'/>
            <label htmlFor="checkId" className=' select-none font-semibold text-2xl text-rose-400 font-mono cursor-pointer'>Check Me</label>
        </div>
    </div>
  )
}

export default Checker