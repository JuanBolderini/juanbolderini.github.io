import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioDetailsSlider from '../components/PortfolioDetailsSlider'

function PortfolioDetailsSacramentos() {
  const images = [
    { src: '/assets/img/portfolio/sacramentos2.png', alt: 'SacramentosON - Sistema para Igrejas Católicas' },
    { src: '/assets/img/portfolio/sacramentos1.png', alt: 'SacramentosON - Sistema para Igrejas Católicas' }
  ]

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <section className="portfolio-details section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <PortfolioDetailsSlider images={images} galleryId="sacramentos" />
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Informações do Projeto</h3>
                  <ul>
                    <li><strong>Categoria</strong>: Software SaaS</li>
                    <li><strong>Cliente</strong>: Igrejas Católicas</li>
                    <li><strong>Empresa</strong>: VisionTaubaté</li>
                    <li><strong>Data do Projeto</strong>: 2025</li>
                    <li>
                      <strong>Frontend</strong>: React, Tailwind
                    </li>
                    <li>
                      <strong>Backend</strong>: PHP, Laravel, Filament 4.0
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>SacramentosON</h2>
                  <p>
                    Sistema SaaS completo desenvolvido para igrejas católicas e seus fiéis, permitindo o gerenciamento 
                    dos sete sacramentos, organização de atividades paroquiais e registro de membros. A plataforma 
                    facilita o acompanhamento dos sacramentos, cadastro de fiéis, administração interna e acesso rápido 
                    às informações religiosas, fortalecendo a comunicação entre paroquianos e sua paróquia.
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

export default PortfolioDetailsSacramentos

