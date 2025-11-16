import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioDetailsSlider from '../components/PortfolioDetailsSlider'

function PortfolioDetailsAnimalium() {
  const images = [
    { src: '/assets/img/portfolio/animalium1.png', alt: 'Animalium - Sistema de Gerenciamento Pet' },
    { src: '/assets/img/portfolio/animalium2.png', alt: 'Animalium - Sistema de Gerenciamento Pet' }
  ]

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <section className="portfolio-details section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <PortfolioDetailsSlider images={images} galleryId="animalium" />
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Informações do Projeto</h3>
                  <ul>
                    <li><strong>Categoria</strong>: Software SaaS</li>
                    <li><strong>Cliente</strong>: Empresas do Setor Pet</li>
                    <li><strong>Empresa</strong>: VisionTaubaté</li>
                    <li><strong>Data do Projeto</strong>: 2025</li>
                    <li>
                      <strong>Backend</strong>: PHP, Laravel, Filament 4.0
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Animalium</h2>
                  <p>
                    Sistema SaaS completo de gerenciamento para empresas do setor pet desenvolvido na VisionTaubaté. 
                    A plataforma centraliza todas as operações essenciais em um único ambiente, permitindo o cadastro 
                    de produtos, serviços, funcionários, pets e tutores, além de automatizar cálculos de impostos 
                    e organizar processos internos de forma eficiente.
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

export default PortfolioDetailsAnimalium

