import React from 'react'
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection'
import FeatureSection from './FeatureSection/FeatureSection'
import CardSection from './CardSection/CardSection'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <FeatureSection />
        <CardSection />
        <Footer />
    </div>
  )
}
export default App