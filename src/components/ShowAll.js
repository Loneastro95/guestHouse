import React from 'react'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import Rooms from './Rooms'
import Footer from './Footer'

const ShowAll = () => {
  return (
    <div>
       <Home />
      <About/>
      <Gallery/>
      <Rooms/>
      <Footer/>
    </div>
  )
}

export default ShowAll