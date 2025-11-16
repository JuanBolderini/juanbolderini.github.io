function About() {
  return (
    <section id="about" className="about section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Sobre mim</h2>
        <p>
          Olá, meu nome é Juan Bolderini. Sou um profissional dedicado e curioso, atualmente atuando como estagiário em
          desenvolvimento front-end e back-end na VisionTaubaté, enquanto curso Análise e Desenvolvimento de Sistemas na
          FATEC Taubaté.

          Minha trajetória profissional, marcada por experiências em setores como jurídico, vendas e hospitality, me
          permitiu desenvolver uma base sólida em habilidades essenciais como comunicação, organização, adaptabilidade e
          uma mentalidade focada na resolução de problemas. Essa bagagem me proporciona uma perspectiva única, onde
          consigo conectar as necessidades do usuário com soluções técnicas eficientes.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/fotocapa.png" className="img-fluid" alt="Juan Bolderini" />
          </div>
          <div className="col-lg-8 content">
            <h2>Estudante de Análise e Desenvolvimento de Sistemas; Desenvolvedor.</h2>
            <p className="fst-italic py-3">
              Motivado pela paixão por inovação, estou consolidando minha carreira na tecnologia. Atualmente, atuo como
              estagiário em desenvolvimento, trabalhando com tecnologias modernas:

              Front-end: Angular, React, Tailwind CSS e Bootstrap para criação de interfaces dinâmicas e responsivas.

              Back-end: Laravel, PHP e Node.js para desenvolvimento de APIs e aplicações server-side.

              Banco de Dados: MySQL para modelagem e gerenciamento de dados.

              Ferramentas: Git/GitHub para controle de versão e colaboração em equipe.

              Práticas: Clean Code, integração com APIs, refatoração e otimização de código.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>                  
                  <li><i className="bi bi-chevron-right"></i> <strong>Cidade:</strong> <span>Taubaté, SP</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jv.menecucci@hotmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Telefone:</strong> <span>(12) 99758-2673</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Idade:</strong> <span>29</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Formação:</strong> <span>Tecnólogo em Análise e Desenvolvimento de Sistemas</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponível</span></li>
                </ul>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-12">
                <h4 className="mb-3">Idiomas</h4>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-translate me-2" style={{ fontSize: '20px', color: 'var(--accent-color)' }}></i>
                      <strong className="me-2">Inglês:</strong>
                      <span className="badge" style={{ backgroundColor: 'var(--accent-color)', color: 'var(--contrast-color)', padding: '5px 10px' }}>Avançado</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-translate me-2" style={{ fontSize: '20px', color: 'var(--accent-color)' }}></i>
                      <strong className="me-2">Espanhol:</strong>
                      <span className="badge" style={{ backgroundColor: 'var(--accent-secondary)', color: 'var(--contrast-color)', padding: '5px 10px' }}>Intermediário</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="py-3">
              Atualmente, estou aplicando meu conhecimento técnico e minhas habilidades interpessoais como estagiário
              em desenvolvimento, contribuindo de forma prática com projetos reais, aprendendo com profissionais
              experientes e crescendo junto com a equipe.<br />

              <br />📌 O que me define:<br />

              Adaptabilidade: Capacidade comprovada de me adaptar a ambientes dinâmicos e multiculturais, sempre
              mantendo o foco e a eficiência.<br />

              Comunicação: Experiência sólida em comunicação e relacionamento com clientes, garantindo clareza e
              alinhamento.<br />

              Determinação: Foco constante na resolução de problemas e uma busca incansável por aprendizado e
              desenvolvimento contínuo.<br />

              Estou pronto para agregar valor e evoluir como um profissional completo em tecnologia.<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

