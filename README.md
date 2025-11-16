# Portfólio - Juan Bolderini (React)

Portfólio pessoal desenvolvido em React para apresentar projetos, habilidades e experiência profissional.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **React Router DOM** - Roteamento
- **Vite** - Build tool e dev server
- **Bootstrap 5.3.3** - Framework CSS
- **AOS** - Animações on scroll
- **GLightbox** - Galeria de imagens
- **Isotope** - Filtros de portfólio
- **Swiper** - Carrosséis
- **Typed.js** - Efeito de digitação

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🛠️ Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor será iniciado em `http://localhost:3000` e o navegador abrirá automaticamente.

## 🏗️ Build para Produção

```bash
# Criar build de produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
portifolio/
├── src/
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Resume.jsx
│   │   ├── Certifications.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingButtons.jsx
│   │   ├── TechParticles.jsx
│   │   └── TypedText.jsx
│   ├── pages/           # Páginas/rotas
│   │   ├── Home.jsx
│   │   ├── PortfolioDetailsSite1.jsx
│   │   ├── PortfolioDetailsSite2.jsx
│   │   └── ServiceDetails.jsx
│   ├── hooks/           # Custom hooks
│   │   └── useScripts.js
│   ├── assets/          # Assets (CSS, imagens, vendor)
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── index.html           # HTML base
├── vite.config.js       # Configuração do Vite
└── package.json         # Dependências e scripts
```

## 🔧 Configuração

### Formulário de Contato

O formulário de contato requer configuração do email em `forms/contact.php`:

```php
$receiving_email_address = 'seu-email@exemplo.com';
```

### Variáveis CSS

As cores e estilos podem ser customizados em `src/assets/css/main.css` através das variáveis CSS:

```css
:root {
  --accent-color: #3168ff;
  --background-color: #1a1a1a;
  /* ... */
}
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa ESLint

## 🎨 Funcionalidades

- ✅ Design responsivo
- ✅ Animações suaves (AOS)
- ✅ Efeito de digitação no hero
- ✅ Filtros de portfólio (Isotope)
- ✅ Galeria de imagens (GLightbox)
- ✅ Formulário de contato
- ✅ Botões flutuantes (WhatsApp e Scroll Top)
- ✅ Partículas tecnológicas animadas
- ✅ Menu mobile responsivo
- ✅ Roteamento com React Router

## 📄 Licença

Template base: iPortfolio by BootstrapMade
Customizações e migração para React: Juan Bolderini

