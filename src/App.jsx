import { useState } from 'react'
import StudentList from './pages/StudentList'
import Studentcontext from './context/StudentContext'
import FavouriteStudent from './pages/FavouriteStudents'
import Register from './pages/register'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

function App() {


  return (
    <>
    <Studentcontext>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StudentList/>}></Route>
        <Route path='/FavouriteStudents' element={<FavouriteStudent/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </Studentcontext>
    </>
  )
}

export default App
