import React, { useContext } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import CourseTable from './components/CourseTable'
import CreateDrawer from './components/CreateDrawer'
import EditDrawer from './components/EditDrawer'
import { dataContext } from './contexts/DataContext'

const App = () => {
  const {editDrawer,createDrawer}=useContext(dataContext)
  return (
   <Container>
    <Header/>
    <CourseTable/>
    {!createDrawer && <CreateDrawer/>}
    {editDrawer && <EditDrawer/>}
   </Container>
  )
}

export default App