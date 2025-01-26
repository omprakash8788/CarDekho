import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import CarRotate from '../components/CarRotate'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewLetterBox from '../components/NewLetterBox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>

      <CarRotate/>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewLetterBox/>
      <Footer/>
    </div>
  )
}

export default Home