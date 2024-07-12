import React from 'react'
import Lottie from "lottie-react";
import empty from '../../lottie/empty.json';
const LottieComponents = () => {
  return (
    <div className=' h-40 w-40'>
        <Lottie animationData={empty} loop={true} className=' h-full w-full'/>
    </div>
  )
}

export default LottieComponents