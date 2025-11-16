function Certifications() {
  return (
    <section className="certifications section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Certificações</h2>
        <p>
          Minhas certificações e formações técnicas que comprovam meu conhecimento e dedicação ao aprendizado contínuo na área de tecnologia.
        </p>
      </div>
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  <img src="/assets/img/emblema.png" alt="Cisco Python" className="certification-logo" />
                </div>
                <div className="certification-badge">
                  <i className="bi bi-award-fill"></i>
                </div>
              </div>
              <div className="certification-content">
                <h4 className="certification-title">Python Essentials 1</h4>
                <p className="certification-issuer d-none d-md-block">Cisco Networking Academy</p>
                <p className="certification-description d-none d-md-block">
                  Certificação que comprova o conhecimento fundamental da linguagem Python e a habilidade de aplicar a Biblioteca Padrão em tarefas de codificação.
                </p>
                <div className="certification-footer">
                  <span className="certification-date d-none d-md-inline-flex">2025</span>
                  <a 
                    href="https://www.credly.com/badges/47c8fee7-940c-44e8-a9db-6176824031f8/linked_in_profile" 
                    className="btn btn-primary btn-sm" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-eye"></i> Ver Certificado
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-12">
            <div className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  <img src="/assets/img/senai.png" alt="SENAI Python" className="certification-logo" />
                </div>
                <div className="certification-badge">
                  <i className="bi bi-award-fill"></i>
                </div>
              </div>
              <div className="certification-content">
                <h4 className="certification-title">Fundamentos de Python</h4>
                <p className="certification-issuer d-none d-md-block">SENAI - Serviço Nacional de Aprendizagem Industrial</p>
                <p className="certification-description d-none d-md-block">
                  Curso completo abordando desde a sintaxe básica até a introdução à Programação Orientada a Objetos em Python.
                </p>
                <div className="certification-footer">
                  <span className="certification-date d-none d-md-inline-flex">2025</span>
                  <a 
                    href="https://www.sp.senai.br/consulta-certificado?qrcode=36025135998/15032796" 
                    className="btn btn-primary btn-sm" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-eye"></i> Ver Certificado
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="certification-card">
              <div className="certification-header">
                <div className="certification-icon">
                  <i className="bi bi-code-slash" style={{ fontSize: '30px', color: '#ffffff' }}></i>
                </div>
                <div className="certification-badge">
                  <i className="bi bi-award-fill"></i>
                </div>
              </div>
              <div className="certification-content">
                <h4 className="certification-title">Desenvolvimento Web: HTML, CSS e JavaScript</h4>
                <p className="certification-issuer d-none d-md-block">Udemy</p>
                <p className="certification-description d-none d-md-block">
                  Curso completo de desenvolvimento web cobrindo os fundamentos de HTML5, CSS3 e JavaScript, incluindo criação de layouts responsivos, manipulação do DOM e interatividade.
                </p>
                <div className="certification-footer">
                  <span className="certification-date d-none d-md-inline-flex">2025</span>
                  <a 
                    href="https://www.udemy.com" 
                    className="btn btn-primary btn-sm" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-eye"></i> Ver Certificado
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

