import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioDetailsSlider from '../components/PortfolioDetailsSlider'

function PortfolioDetailsBraga() {
  const images = [
    { src: '/assets/img/portfolio/braga1.png', alt: 'Landing Page - Empresa de Caçambas' },
    { src: '/assets/img/portfolio/braga2.png', alt: 'Landing Page - Empresa de Caçambas' }
  ]

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <section className="portfolio-details section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <PortfolioDetailsSlider images={images} galleryId="landing-page-cacambas" />
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Informações do Projeto</h3>
                  <ul>
                    <li><strong>Categoria</strong>: Site Web</li>
                    <li><strong>Cliente</strong>: Empresa de Caçambas</li>
                    <li><strong>Empresa</strong>: VisionTaubaté</li>
                    <li><strong>Data do Projeto</strong>: 2025</li>
                    <li>
                      <strong>Frontend</strong>: React, Tailwind
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Landing Page comercial para empresa de caçambas</h2>
                  <p>
                    Desenvolvimento de uma Landing Page comercial focada em serviços de locação de caçambas, 
                    com design moderno e responsivo. O projeto foi desenvolvido na VisionTaubaté com foco em 
                    conversão e experiência do usuário, facilitando o contato e a solicitação de serviços.
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

export default PortfolioDetailsBraga

