import React from 'react'
import Nabvar from '../components/Navbar/Nabvar'
import Footer from '../components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Acordion from '../components/Acordion/Acordion'
import Login from '../components/Login/Login'
import RegisterForm from '../components/Register/RegisterForm'
import Homepage from '../components/HomePage/Homepage'

const Routers = () => {
  return (
    <div>
        <div>
            <Nabvar/>
        </div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/project' element={<Acordion/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<RegisterForm/>}></Route>
        </Routes>

        <div>
            <Footer/>
        </div>
      
    </div>

  )
}

export default Routers
