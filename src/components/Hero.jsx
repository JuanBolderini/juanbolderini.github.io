import { useEffect, useRef } from 'react'
import TypedText from './TypedText'

function Hero() {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Juan Bolderini</h2>
        <p className="hero-text">Eu sou <TypedText /></p>
      </div>
    </section>
  )
}

export default Hero

