
import { Outlet } from 'react-router-dom'
import './App.css'
import TopNavbar from './Share/Navbar/TopNavbar'
import Footer from './Share/Footer/Footer'
import Navbar from './Share/Navbar/Navbar'

function App() {

  return (
    <>
      <TopNavbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
