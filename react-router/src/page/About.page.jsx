import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutPage = () => {
    const data=useLocation();
    console.log(data);
    console.log(data.state);
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage