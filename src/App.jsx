
import { Outlet } from 'react-router-dom'
import './App.css'
import TopNavbar from './Share/Navbar/TopNavbar'
import Footer from './Share/Footer/Footer'
import Navbar from './Share/Navbar/Navbar'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './services/firebase'
import { useDispatch } from 'react-redux'
import { clearUser, setLoading, setUser } from './features/user/userSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dispatch = useDispatch();

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


  // firebase On Auth state change 
  useEffect(() => {
    const unsubscreibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user))


      }
      else {
        dispatch(clearUser());
      }
      dispatch(setLoading(false))
    });

    return () => unsubscreibe();

  }, [dispatch])

  return (
    <>
      <ToastContainer />
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
