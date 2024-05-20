import React from 'react'
import { useParams } from 'react-router-dom'

const DetailBookPage = () => {
    const {id}=useParams();
    console.log({id});
  return (
    <div>DetailBookPage is {id}</div>
  )
}

export default DetailBookPage