import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import CarRotate from '../components/CarRotate'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>

      <CarRotate/>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
    </div>
  )
}

export default Home