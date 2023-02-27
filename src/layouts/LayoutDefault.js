import { useState, useRef, useEffect } from 'react'
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Banner from '../components/layout/partials/Banner';



const LayoutDefault = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted && (
    <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Banner />
    <Footer />
  </>
  )
};

export default LayoutDefault;  