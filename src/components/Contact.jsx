function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contato</h2>
        <p>
          Adoro me conectar com pessoas, trocar ideias e aprender sobre novas tecnologias. Seja para falar sobre
          uma oportunidade de estágio, um projeto ou apenas para expandir o networking, sinta-se à vontade para entrar
          em contato.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-8">
            <div className="info-wrap">
              <div className="row gy-3">
                <div className="col-md-6 col-6">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                    <div>
                      <h3>Endereço</h3>
                      <p>Taubaté, SP - Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-6">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                    <a href="http://wa.me/5512997582673" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-telephone flex-shrink-0"></i>
                    </a>
                    <div>
                      <h3>Telefone/WhatsApp</h3>
                      <p>
                        <a href="http://wa.me/5512997582673" target="_blank" rel="noopener noreferrer">
                          (12) 99758-2673
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-6">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                    <a href="mailto:jv.menecucci@hotmail.com">
                      <i className="bi bi-envelope flex-shrink-0"></i>
                    </a>
                    <div>
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:jv.menecucci@hotmail.com">
                          jv.menecucci@hotmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-6">
                  <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                    <i className="bi bi-share flex-shrink-0"></i>
                    <div>
                      <h3>Redes Sociais</h3>
                      <div className="social-links-contact">
                        <a 
                          href="https://github.com/JuanBolderini" 
                          className="github" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/juan-bolderini-menecucci" 
                          className="linkedin" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          title="LinkedIn"
                        >
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55848.5197324565!2d-45.601139725961254!3d-23.015273153417176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf85a19af0d3b%3A0x49ca42b1ddb2b41f!2sTaubat%C3%A9%20-%20SP!5e1!3m2!1spt-BR!2sbr!4v1751563499110!5m2!1spt-BR!2sb"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Taubaté, SP"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

