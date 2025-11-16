function Services() {
  const services = [
    {
      icon: 'php',
      title: 'PHP',
      description: 'Linguagem de programação server-side para desenvolvimento web. Experiência com programação orientada a objetos, integração com bancos de dados e construção de aplicações dinâmicas.'
    },
    {
      icon: 'python',
      title: 'Python',
      description: 'Linguagem de programação de alto nível para desenvolvimento web, automação e análise de dados. Experiência com programação orientada a objetos, manipulação de dados, criação de scripts e desenvolvimento de aplicações backend eficientes.'
    },
    {
      icon: 'js',
      title: 'JavaScript',
      description: 'Linguagem de programação fundamental para desenvolvimento web. Domínio de ES6+, manipulação do DOM, assincronismo, APIs e integração com frameworks modernos.'
    },
    {
      icon: 'fa fa-css3',
      title: 'CSS3',
      description: 'Estilização e design de interfaces web. Experiência com Flexbox, Grid, animações, responsividade e criação de layouts modernos e visualmente atraentes.'
    },
    {
      icon: 'fa fa-html5',
      title: 'HTML5',
      description: 'Estruturação semântica de páginas web. Criação de layouts acessíveis e bem organizados, utilizando as melhores práticas de HTML5 para garantir uma base sólida para estilização e interatividade.'
    },
    {
      icon: 'mysql',
      title: 'MySQL',
      description: 'Sistema de gerenciamento de banco de dados relacional. Experiência com modelagem de dados, queries SQL, relacionamentos e otimização de consultas para aplicações web.'
    },
    {
      icon: 'react',
      title: 'React',
      description: 'Framework JavaScript para construção de interfaces de usuário. Experiência no desenvolvimento de componentes reutilizáveis, gerenciamento de estado e criação de aplicações web dinâmicas e interativas.'
    },
    {
      icon: 'angular',
      title: 'Angular',
      description: 'Framework TypeScript para desenvolvimento de aplicações web escaláveis. Experiência com componentes, serviços, roteamento e integração com APIs para criar aplicações SPA robustas.'
    },
    {
      icon: 'tailwind',
      title: 'Tailwind CSS',
      description: 'Framework CSS utility-first para construção rápida de interfaces modernas e responsivas. Utilizo classes utilitárias para criar designs customizados de forma eficiente.'
    },
    {
      icon: 'bootstrap',
      title: 'Bootstrap',
      description: 'Framework CSS para desenvolvimento de interfaces responsivas. Experiência com componentes, grid system e customização para criar layouts profissionais e adaptáveis.'
    },
    {
      icon: 'laravel',
      title: 'Laravel',
      description: 'Framework PHP para desenvolvimento de aplicações web robustas. Experiência com MVC, Eloquent ORM, rotas, middleware e criação de APIs RESTful.'
    },
    {
      icon: 'nodejs',
      title: 'Node.js',
      description: 'Runtime JavaScript para desenvolvimento server-side. Experiência com criação de APIs, gerenciamento de pacotes npm e desenvolvimento de aplicações backend escaláveis.'
    },
    {
      icon: 'fa fa-github',
      title: 'Git & GitHub',
      description: 'Controle de versão e colaboração em projetos. Experiência com Git para versionamento, branches, merge, pull requests e trabalho colaborativo em equipe através do GitHub.'
    },
    {
      icon: 'clean-code',
      title: 'Clean Code',
      description: 'Práticas de desenvolvimento de código limpo, legível e manutenível. Aplicação de princípios SOLID, nomenclatura clara, organização de código e boas práticas de programação.'
    },
    {
      icon: 'api',
      title: 'Integração com APIs',
      description: 'Experiência em integração com APIs RESTful, consumo de dados externos, tratamento de requisições HTTP e implementação de comunicação entre front-end e back-end.'
    },
    {
      icon: 'refactor',
      title: 'Refatoração e Otimização',
      description: 'Melhoria contínua de código existente, otimização de performance, identificação e correção de bugs, e aplicação de técnicas para tornar o código mais eficiente e manutenível.'
    }
  ]

  const getIcon = (service) => {
    if (service.icon === 'js') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <text x="50%" y="50%" fontFamily="Arial Black, Arial, sans-serif" fontSize="280" fill="#ffffff" textAnchor="middle" dominantBaseline="middle">JS</text>
        </svg>
      )
    }
    if (service.icon === 'react') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <circle cx="256" cy="256" r="50" fill="none" stroke="#61dafb" strokeWidth="15"/>
          <ellipse cx="256" cy="256" rx="50" ry="150" fill="none" stroke="#61dafb" strokeWidth="15" transform="rotate(-60 256 256)"/>
          <ellipse cx="256" cy="256" rx="50" ry="150" fill="none" stroke="#61dafb" strokeWidth="15" transform="rotate(60 256 256)"/>
        </svg>
      )
    }
    if (service.icon === 'angular') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#dd0031" d="M213.573 256h84.854l-42.427-73.5z"/>
          <path fill="#c3002f" d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112 256 32zm110.95 224l-16.51 38.5L256 352l-94.4-57.5L145 256h221.9z"/>
        </svg>
      )
    }
    if (service.icon === 'tailwind') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#38bdf8" d="M128 192c-42.7 0-64 21.3-64 64s21.3 64 64 64c42.7 0 64-21.3 64-64s-21.3-64-64-64zm128 0c-42.7 0-64 21.3-64 64s21.3 64 64 64c42.7 0 64-21.3 64-64s-21.3-64-64-64zm128 0c-42.7 0-64 21.3-64 64s21.3 64 64 64c42.7 0 64-21.3 64-64s-21.3-64-64-64z"/>
          <path fill="#06b6d4" d="M256 256c-42.7 0-64 21.3-64 64s21.3 64 64 64c42.7 0 64-21.3 64-64s-21.3-64-64-64z"/>
        </svg>
      )
    }
    if (service.icon === 'bootstrap') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#7952b3" d="M128 96v320c0 35.3 28.7 64 64 64h128c88.4 0 160-71.6 160-160s-71.6-160-160-160H192v-64h-64zm64 96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64H192V192z"/>
          <text x="256" y="300" fontFamily="Arial Black, Arial, sans-serif" fontSize="180" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">B</text>
        </svg>
      )
    }
    if (service.icon === 'laravel') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#ff2d20" d="M256 64L96 192l160 128 160-128L256 64zm0 192L160 256l96 96 96-96-96-32z"/>
          <text x="256" y="300" fontFamily="Arial, sans-serif" fontSize="140" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">L</text>
        </svg>
      )
    }
    if (service.icon === 'php') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#777bb4" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 352c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z"/>
          <text x="256" y="300" fontFamily="Arial, sans-serif" fontSize="100" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">PHP</text>
        </svg>
      )
    }
    if (service.icon === 'nodejs') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#339933" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 352c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z"/>
          <text x="256" y="300" fontFamily="Arial, sans-serif" fontSize="100" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">JS</text>
        </svg>
      )
    }
    if (service.icon === 'mysql') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#4479a1" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 352c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z"/>
          <text x="256" y="300" fontFamily="Arial, sans-serif" fontSize="90" fill="#ffffff" textAnchor="middle" dominantBaseline="middle" fontWeight="bold">SQL</text>
        </svg>
      )
    }
    if (service.icon === 'clean-code') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#4CAF50" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 352c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z"/>
          <path fill="#4CAF50" d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 192c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
          <path d="M224 256l48 48 96-96" stroke="#ffffff" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    }
    if (service.icon === 'api') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <circle cx="128" cy="256" r="40" fill="none" stroke="#ffffff" strokeWidth="20"/>
          <circle cx="384" cy="256" r="40" fill="none" stroke="#ffffff" strokeWidth="20"/>
          <circle cx="256" cy="128" r="40" fill="none" stroke="#ffffff" strokeWidth="20"/>
          <circle cx="256" cy="384" r="40" fill="none" stroke="#ffffff" strokeWidth="20"/>
          <line x1="168" y1="256" x2="344" y2="256" stroke="#ffffff" strokeWidth="15"/>
          <line x1="256" y1="168" x2="256" y2="344" stroke="#ffffff" strokeWidth="15"/>
          <line x1="168" y1="216" x2="216" y2="168" stroke="#ffffff" strokeWidth="15"/>
          <line x1="296" y1="168" x2="344" y2="216" stroke="#ffffff" strokeWidth="15"/>
          <line x1="168" y1="296" x2="216" y2="344" stroke="#ffffff" strokeWidth="15"/>
          <line x1="296" y1="344" x2="344" y2="296" stroke="#ffffff" strokeWidth="15"/>
        </svg>
      )
    }
    if (service.icon === 'refactor') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <path fill="#FF9800" d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm0 352c-88.4 0-160-71.6-160-160S167.6 96 256 96s160 71.6 160 160-71.6 160-160 160z"/>
          <path fill="#FF9800" d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 192c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
          <path d="M192 256l32 32 96-96" stroke="#ffffff" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M320 192l32-32 32 32" stroke="#ffffff" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    }
    if (service.icon === 'python') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
          <circle cx="256" cy="256" r="200" fill="#3776ab"/>
          <path d="M256 120c-30 0-50 15-50 35v25h100v10H180c-25 0-45 20-45 45v30c0 25 20 45 45 45h20v-30c0-40 30-70 70-70h60c40 0 70 30 70 70v60c0 40-30 70-70 70H256c-25 0-45-20-45-45v-25H111v10c0 25 20 45 45 45h200c40 0 70-30 70-70v-60c0-40-30-70-70-70h-60z" fill="#ffd343"/>
          <circle cx="206" cy="180" r="25" fill="#3776ab"/>
          <circle cx="306" cy="332" r="25" fill="#ffd343"/>
          <path d="M180 200 Q160 240 180 280 Q200 300 240 300" stroke="#ffd343" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M332 232 Q352 272 332 312 Q312 332 272 332" stroke="#3776ab" strokeWidth="14" fill="none" strokeLinecap="round"/>
        </svg>
      )
    }
    return <i className={service.icon}></i>
  }

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Competências e Habilidades</h2>
        <p>
          Encaro as linguagens de programação como ferramentas essenciais para transformar ideias em soluções
          funcionais. Meu objetivo é dominar os fundamentos de cada uma para poder escolher e aplicar a ferramenta certa para o
          desafio certo. A seguir, listo as tecnologias que compõem minha 'caixa de ferramentas' de desenvolvimento.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="col-lg-4 col-md-6 col-12 service-item d-flex" 
              data-aos="fade-up" 
              data-aos-delay={(index + 1) * 100}
            >
              <div className="icon flex-shrink-0">{getIcon(service)}</div>
              <div className="service-content-wrapper">
                <h4 className="title">
                  {service.title}
                </h4>
                <p className="description d-none d-md-block">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

