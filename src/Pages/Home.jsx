import React from 'react'
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import PickCar from "../components/PickCar"
import Banner from "../components/Banner"
import Faq from "../components/Faq"
import Book from "../components/Book"


const Home = () => {
  return (
    <div>
        <Hero />
        <PickCar />
        <Banner />
        <Book />
        <Faq />
      


        <Footer />
      
    </div>
  )
}

export default Home
