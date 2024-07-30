import { Route, Routes } from 'react-router-dom'
import './App.css'
import Acordion from './components/Acordion/Acordion'
import Footer from './components/Footer/Footer'
import Nabvar from './components/Navbar/Nabvar'
import Routers from './Router/Routers'


function App() {
  return (
    <>

    <Routes>
      <Route path='/*' element={<Routers/>}></Route>
    </Routes>

    </>
  )
}

export default App
