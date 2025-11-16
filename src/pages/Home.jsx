import { useEffect } from 'react'
import Header from '../components/Header'
import TechParticles from '../components/TechParticles'
import Hero from '../components/Hero'
import About from '../components/About'
import Resume from '../components/Resume'
import Certifications from '../components/Certifications'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import Preloader from '../components/Preloader'
import { useScripts } from '../hooks/useScripts'

function Home() {
  useScripts()

  useEffect(() => {
    // Remover preloader imediatamente quando componente montar
    const preloader = document.getElementById('preloader')
    if (preloader) {
      // Remover rapidamente
      setTimeout(() => {
        preloader.style.opacity = '0'
        preloader.style.transition = 'opacity 0.3s ease'
        setTimeout(() => {
          preloader.style.display = 'none'
          preloader.remove()
        }, 300)
      }, 100)
    }
  }, [])

  useEffect(() => {
    // Inicializar AOS quando componente montar
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
      } else {
        setTimeout(initAOS, 100)
      }
    }
    initAOS()

    // Inicializar outras bibliotecas
    const initGLightbox = () => {
      if (window.GLightbox) {
        window.GLightbox({
          selector: '.glightbox'
        })
      } else {
        setTimeout(initGLightbox, 100)
      }
    }
    initGLightbox()

    // Navmenu Scrollspy
    const navmenulinks = document.querySelectorAll('.navmenu a')
    const navmenuScrollspy = () => {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return
        const section = document.querySelector(navmenulink.hash)
        if (!section) return
        const position = window.scrollY + 200
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'))
          navmenulink.classList.add('active')
        } else {
          navmenulink.classList.remove('active')
        }
      })
    }

    window.addEventListener('load', navmenuScrollspy)
    window.addEventListener('scroll', navmenuScrollspy)

    // Scroll suave para hash links
    const handleHashClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const scrollMarginTop = getComputedStyle(targetElement).scrollMarginTop
          window.scrollTo({
            top: targetElement.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleHashClick)
    })

    return () => {
      window.removeEventListener('scroll', navmenuScrollspy)
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleHashClick)
      })
    }
  }, [])

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <TechParticles />
        <Hero />
        <About />
        <Resume />
        <Certifications />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      {/* Preloader temporariamente desabilitado para debug */}
      {/* <Preloader /> */}
    </div>
  )
}

export default Home

