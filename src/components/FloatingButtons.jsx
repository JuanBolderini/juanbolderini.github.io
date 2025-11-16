import { useState, useEffect } from 'react'

function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="floating-buttons">
      <a 
        href="#" 
        id="scroll-top" 
        className={`floating-btn scroll-top-btn ${showScrollTop ? 'active' : ''}`}
        onClick={scrollToTop}
        title="Voltar ao topo"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      
      <a 
        href="https://wa.me/5512997582673" 
        className="floating-btn whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  )
}

export default FloatingButtons

