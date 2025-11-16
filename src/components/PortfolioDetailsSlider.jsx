import { useEffect, useRef } from 'react'

function PortfolioDetailsSlider({ images, galleryId = 'portfolio-details-gallery' }) {
  const swiperRef = useRef(null)
  const lightboxRef = useRef(null)

  useEffect(() => {
    // Inicializar Swiper quando componente montar
    if (window.Swiper && swiperRef.current) {
      const swiper = new window.Swiper(swiperRef.current, {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: swiperRef.current.querySelector('.swiper-pagination'),
          type: 'bullets',
          clickable: true
        }
      })

      return () => {
        if (swiper) {
          swiper.destroy(true, true)
        }
      }
    }
  }, [])

  useEffect(() => {
    // Inicializar GLightbox para as imagens do slider
    if (window.GLightbox) {
      const selector = `.portfolio-details-gallery-${galleryId}`
      lightboxRef.current = window.GLightbox({
        selector: selector,
        touchNavigation: true,
        loop: true,
        openEffect: 'fade',
        closeEffect: 'fade'
      })

      return () => {
        if (lightboxRef.current) {
          lightboxRef.current.destroy()
        }
      }
    }
  }, [galleryId])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div ref={swiperRef} className="portfolio-details-slider swiper">
      <div className="swiper-wrapper align-items-center">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <a 
              href={image.src} 
              className={`portfolio-details-gallery-${galleryId}`}
              data-gallery={galleryId}
            >
              <img src={image.src} alt={image.alt || `Imagem ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  )
}

export default PortfolioDetailsSlider

