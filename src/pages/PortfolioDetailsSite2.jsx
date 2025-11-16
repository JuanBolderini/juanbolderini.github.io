import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioDetailsSlider from '../components/PortfolioDetailsSlider'

function PortfolioDetailsSite2() {
  const images = [
    { src: '/assets/img/portfolio/site2.png', alt: 'Climber Bikes' },
    { src: '/assets/img/portfolio/climber.png', alt: 'Climber Bikes' }
  ]

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <section className="portfolio-details section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <PortfolioDetailsSlider images={images} galleryId="climber-bikes" />
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Informações do Projeto</h3>
                  <ul>
                    <li><strong>Categoria</strong>: Site Web</li>
                    <li><strong>Cliente</strong>: Climber Bikes</li>
                    <li><strong>Empresa</strong>: VisionTaubaté</li>
                    <li><strong>Data do Projeto</strong>: 2025</li>
                    <li>
                      <strong>Frontend</strong>: React, Tailwind
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Climber Bikes</h2>
                  <p>
                    Site profissional para loja de bicicletas desenvolvido na VisionTaubaté. 
                    O projeto foi desenvolvido com React e Tailwind CSS, oferecendo uma experiência 
                    moderna e responsiva para os clientes.
                  </p>
                  <p>
                    <a 
                      href="https://climberbikes.com.br" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="website-link"
                    >
                      Visitar site: climberbikes.com.br
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link to="/#portfolio" className="btn btn-primary">
                <i className="bi bi-arrow-left"></i> Voltar ao Portfólio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PortfolioDetailsSite2

