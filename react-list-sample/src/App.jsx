import React from 'react'
import Headers from './components/Headers'
import ListGroup from './components/ListGroup'

const App = () => {
  return (
    <div className=' border border-sky-200 max-w-[800px] mx-auto p-10 lg:p-5 m-10'>
      <Headers/>
      <ListGroup/>
    </div>
  )
}

export default App