import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioDetailsSlider from '../components/PortfolioDetailsSlider'

function PortfolioDetailsSite1() {
  const images = [
    { src: '/assets/img/portfolio/site1.jpg', alt: 'Landing Page Imobiliária' },
    { src: '/assets/img/portfolio/ponto1.png', alt: 'Landing Page Imobiliária' }
  ]

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <section className="portfolio-details section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <PortfolioDetailsSlider images={images} galleryId="landing-page-imobiliaria" />
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Informações do Projeto</h3>
                  <ul>
                    <li><strong>Categoria</strong>: Site Web</li>
                    <li><strong>Cliente</strong>: VisionTaubaté</li>
                    <li><strong>Empresa</strong>: VisionTaubaté</li>
                    <li><strong>Data do Projeto</strong>: 2025</li>
                    <li>
                      <strong>Frontend</strong>: HTML5, CSS3, JavaScript
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Landing Page comercial para venda de imóvel</h2>
                  <p>
                    Desenvolvimento de uma Landing Page comercial focada na venda de imóvel, com design moderno e responsivo.
                    O projeto foi desenvolvido na VisionTaubaté com foco em conversão e experiência do usuário.
                  </p>
                  <p>
                    <a 
                      href="https://vende-se.visiontaubate.com.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="website-link"
                    >
                      Visitar site: vende-se.visiontaubate.com.br
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

export default PortfolioDetailsSite1

