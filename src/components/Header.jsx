import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Função para fazer scroll suave até a seção
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault()
    closeMenu()
    
    // Se não estiver na página home, navegar primeiro
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }

    // Se já estiver na home, fazer scroll suave
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      const scrollMarginTop = getComputedStyle(targetElement).scrollMarginTop || '0'
      const offset = parseInt(scrollMarginTop) || 0
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      })
    }
  }

  // Fechar menu ao clicar em link
  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  return (
    <>
      <button 
        id="mobile-menu-btn" 
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>

      <header 
        id="header" 
        className={`header dark-background d-flex flex-column ${isMenuOpen ? 'header-show' : ''}`}
      >
        <div className="profile-img">
          <img 
            src="/assets/img/my-profile-img.jpg" 
            alt="Juan Bolderini" 
            className="img-fluid rounded-circle" 
          />
        </div>

        <Link to="/" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Juan Bolderini</h1>
        </Link>

        <div className="social-links text-center">
          <a 
            href="https://github.com/JuanBolderini" 
            className="google-plus" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/juan-bolderini-menecucci" 
            className="linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" onClick={(e) => handleSectionClick(e, 'hero')}>
                <i className="bi bi-house navicon"></i>Início
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleSectionClick(e, 'about')}>
                <i className="bi bi-person navicon"></i> Sobre
              </a>
            </li>
            <li>
              <a href="#resume" onClick={(e) => handleSectionClick(e, 'resume')}>
                <i className="bi bi-file-earmark-text navicon"></i> Resumo
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSectionClick(e, 'services')} className="navmenu-long-text">
                <i className="bi bi-hdd-stack navicon"></i>Competências/Habilidades
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleSectionClick(e, 'portfolio')}>
                <i className="bi bi-images navicon"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')}>
                <i className="bi bi-envelope navicon"></i> Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header

