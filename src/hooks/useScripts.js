import { useEffect } from 'react'

export function useScripts() {
  useEffect(() => {
    // Carregar scripts das bibliotecas vendor
    const scripts = [
      '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '/assets/vendor/aos/aos.js',
      '/assets/vendor/purecounter/purecounter_vanilla.js',
      '/assets/vendor/waypoints/noframework.waypoints.js',
      '/assets/vendor/glightbox/js/glightbox.min.js',
      '/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
      '/assets/vendor/isotope-layout/isotope.pkgd.js',
      '/assets/vendor/swiper/swiper-bundle.min.js'
    ]

    const loadedScripts = []
    
    scripts.forEach((src) => {
      const script = document.createElement('script')
      script.src = src
      script.async = true
      document.body.appendChild(script)
      loadedScripts.push(script)
    })

    // Inicializar AOS quando carregar
    const checkAOS = setInterval(() => {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
        clearInterval(checkAOS)
      }
    }, 100)

    // Cleanup
    return () => {
      loadedScripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
      clearInterval(checkAOS)
    }
  }, [])
}

