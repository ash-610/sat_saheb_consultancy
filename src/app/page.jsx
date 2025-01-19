"use client"
import './global.css'
import Carousel from './_components/Carousel'
import Header from './_components/Header'
import Services from './_components/Services'
import OurWork from './_components/OurWork'
import ContactUs from './_components/ContactUs'

const Home = () => {
  return (
    <>
      <Header/>
      <Carousel/>
      <Services/>
      <OurWork/>
      <ContactUs/>
    </>
  )
}

export default Home