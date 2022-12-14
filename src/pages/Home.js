import React from 'react'
import Cart from '../components/Cart'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
        <Hero/>
        <Cart/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home