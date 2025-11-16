import { useEffect } from 'react'

function TechParticles() {
  useEffect(() => {
    // Efeito de parallax para as partículas
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const particles = document.querySelector('.tech-particles')
      if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div className="tech-particles"></div>
}

export default TechParticles

