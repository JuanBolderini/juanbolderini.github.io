import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Portfolio() {
  const [filter, setFilter] = useState('*')

  const portfolioItems = [
    {
      id: 1,
      category: 'filter-app',
      image: '/assets/img/portfolio/site1.jpg',
      title: 'Landing Page Imobiliária',
      description: 'Landing Page comercial para venda de imóvel desenvolvida na VisionTaubaté',
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
      detailsLink: '/portfolio-details-site1',
      websiteUrl: 'https://vende-se.visiontaubate.com.br/',
      company: 'VisionTaubaté'
    },
    {
      id: 2,
      category: 'filter-app',
      image: '/assets/img/portfolio/site2.png',
      title: 'Climber Bikes',
      description: 'Site profissional para loja de bicicletas desenvolvido na VisionTaubaté',
      frontend: ['React', 'Tailwind'],
      detailsLink: '/portfolio-details-site2',
      websiteUrl: 'https://climberbikes.com.br',
      company: 'VisionTaubaté'
    },
    {
      id: 3,
      category: 'filter-software',
      image: '/assets/img/portfolio/animalium2.png',
      title: 'Animalium',
      description: 'Sistema SaaS completo de gerenciamento para empresas do setor pet desenvolvido na VisionTaubaté',
      backend: ['PHP', 'Laravel', 'Filament 4.0'],
      detailsLink: '/portfolio-details-animalium',
      company: 'VisionTaubaté'
    },
    {
      id: 4,
      category: 'filter-software',
      image: '/assets/img/portfolio/sacramentos2.png',
      title: 'SacramentosON',
      description: 'Sistema SaaS para gerenciamento completo de igrejas católicas desenvolvido na VisionTaubaté',
      frontend: ['React', 'Tailwind'],
      backend: ['PHP', 'Laravel', 'Filament 4.0'],
      detailsLink: '/portfolio-details-sacramentos',
      company: 'VisionTaubaté'
    },
    {
      id: 5,
      category: 'filter-app',
      image: '/assets/img/portfolio/braga1.png',
      title: 'Landing Page - Empresa de Caçambas',
      description: 'Landing Page comercial para empresa de caçambas desenvolvida na VisionTaubaté',
      frontend: ['React', 'Tailwind'],
      detailsLink: '/portfolio-details-braga',
      company: 'VisionTaubaté'
    }
  ]

  // Filtrar itens baseado no filtro selecionado
  const filteredItems = filter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter.replace('.', ''))

  // Inicializar GLightbox quando componente montar
  useEffect(() => {
    if (window.GLightbox) {
      const lightbox = window.GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      })
      
      return () => {
        if (lightbox) {
          lightbox.destroy()
        }
      }
    }
  }, [filteredItems])

  // Inicializar Swiper para mobile
  useEffect(() => {
    let swiperInstance = null
    
    const initSwiper = () => {
      if (window.Swiper && window.innerWidth <= 768) {
        const swiperElement = document.querySelector('.portfolio-mobile-swiper')
        if (swiperElement && !swiperElement.swiper) {
          swiperInstance = new window.Swiper(swiperElement, {
            slidesPerView: 1.2,
            spaceBetween: 15,
            freeMode: true,
            pagination: {
              el: '.portfolio-swiper-pagination',
              clickable: true,
            },
            breakpoints: {
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
            },
          })
          swiperElement.swiper = swiperInstance
        }
      } else if (swiperInstance) {
        swiperInstance.destroy(true, true)
        swiperInstance = null
      }
    }

    // Delay para garantir que o DOM está pronto
    setTimeout(initSwiper, 100)
    window.addEventListener('resize', initSwiper)
    
    return () => {
      window.removeEventListener('resize', initSwiper)
      if (swiperInstance) {
        swiperInstance.destroy(true, true)
      }
    }
  }, [filteredItems])

  const handleFilterClick = (filterValue) => {
    setFilter(filterValue)
  }

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>
          Cada projeto é uma história de desafios, criatividade e colaboração.
          Nesta seção, eu compartilho um pouco da minha jornada, transformando ideias em realidade.
          Convido você a mergulhar nos detalhes de cada trabalho e descobrir a paixão e a dedicação por trás de cada resultado.
        </p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li 
              data-filter="*" 
              className={filter === '*' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('*')}
            >
              Todos
            </li>
            <li 
              data-filter=".filter-app" 
              className={filter === '.filter-app' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('.filter-app')}
            >
              Sites
            </li>
            <li 
              data-filter=".filter-software" 
              className={filter === '.filter-software' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('.filter-software')}
            >
              Software
            </li>
          </ul>

          {/* Desktop Grid */}
          <div className="row gy-4 isotope-container d-none d-md-flex" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category} show`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="portfolio-content h-100">
                    <img 
                      src={item.image} 
                      className="img-fluid" 
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      {(item.frontend || item.backend) && (
                        <div className="portfolio-technologies">
                          {item.frontend && item.frontend.length > 0 && (
                            <div className="tech-group">
                              <span className="tech-label">Frontend:</span>
                              {item.frontend.map((tech, index) => (
                                <span key={`frontend-${index}`} className="tech-badge">{tech}</span>
                              ))}
                            </div>
                          )}
                          {item.backend && item.backend.length > 0 && (
                            <div className="tech-group">
                              <span className="tech-label">Backend:</span>
                              {item.backend.map((tech, index) => (
                                <span key={`backend-${index}`} className="tech-badge">{tech}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      <div className="portfolio-links">
                        <Link 
                          to={item.detailsLink} 
                          className="btn btn-primary portfolio-details-btn"
                        >
                          Ver Detalhes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>Nenhum projeto encontrado nesta categoria.</p>
              </div>
            )}
          </div>

          {/* Mobile Swiper */}
          <div className="d-md-none portfolio-mobile-wrapper">
            <div className="swiper portfolio-mobile-swiper">
              <div className="swiper-wrapper">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <div key={item.id} className="swiper-slide">
                      <div className="portfolio-content h-100">
                        <img 
                          src={item.image} 
                          className="img-fluid" 
                          alt={item.title}
                          loading="lazy"
                        />
                        <div className="portfolio-info">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                          {(item.frontend || item.backend) && (
                            <div className="portfolio-technologies">
                              {item.frontend && item.frontend.length > 0 && (
                                <div className="tech-group">
                                  <span className="tech-label">Frontend:</span>
                                  {item.frontend.map((tech, idx) => (
                                    <span key={`frontend-${idx}`} className="tech-badge">{tech}</span>
                                  ))}
                                </div>
                              )}
                              {item.backend && item.backend.length > 0 && (
                                <div className="tech-group">
                                  <span className="tech-label">Backend:</span>
                                  {item.backend.map((tech, idx) => (
                                    <span key={`backend-${idx}`} className="tech-badge">{tech}</span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                          <div className="portfolio-links">
                            <Link 
                              to={item.detailsLink} 
                              className="btn btn-primary portfolio-details-btn"
                            >
                              Ver Detalhes
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="swiper-slide">
                    <div className="text-center">
                      <p>Nenhum projeto encontrado nesta categoria.</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="swiper-pagination portfolio-swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

