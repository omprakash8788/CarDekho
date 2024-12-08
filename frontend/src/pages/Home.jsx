import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import CarRotate from '../components/CarRotate'

const Home = () => {
  return (
    <div>

      <CarRotate/>
      <Hero/>
      <LatestCollection/>
    </div>
  )
}

export default Home