
import { Outlet } from 'react-router-dom'
import './App.css'
import TopNavbar from './Share/Navbar/TopNavbar'
import Footer from './Share/Footer/Footer'
import Navbar from './Share/Navbar/Navbar'
import { useEffect, useState } from 'react'

function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);



  return (
    <>
      <div className={`fixed w-full z-30 transition-transform duration-700 ${showNavbar ? 'translate-y-0' : '-translate-y-40'}`}>
        <TopNavbar />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
