import React from 'react'
import { useParams } from 'react-router-dom'

const AuthorPage = () => {
    const {id}=useParams();
  return (
    <div>AuthorPage is {id}</div>
  )
}

export default AuthorPage