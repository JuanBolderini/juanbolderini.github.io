// Tech Effects JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Efeito de digitação para o texto do hero
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
        const typedItems = typedElement.getAttribute('data-typed-items').split(',');
        let currentIndex = 0;
        
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    setTimeout(() => {
                        deleteText(element, speed);
                    }, 2000);
                }
            }
            type();
        }
        
        function deleteText(element, speed = 50) {
            let text = element.innerHTML;
            
            function deleteChar() {
                if (text.length > 0) {
                    text = text.slice(0, -1);
                    element.innerHTML = text;
                    setTimeout(deleteChar, speed);
                } else {
                    currentIndex = (currentIndex + 1) % typedItems.length;
                    setTimeout(() => {
                        typeWriter(element, typedItems[currentIndex]);
                    }, 500);
                }
            }
            deleteChar();
        }
        
        typeWriter(typedElement, typedItems[currentIndex]);
    }
    
    // Efeito de parallax para as partículas
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const particles = document.querySelector('.tech-particles');
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Floating buttons functionality
    const scrollTopBtn = document.querySelector('#scroll-top');
    
    // Show/hide scroll top button based on scroll position
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        // Smooth scroll to top when scroll top button is clicked
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Efeito de hover nos ícones de serviços
    const serviceIcons = document.querySelectorAll('.services .service-item .icon');
    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Efeito de destaque nos links de navegação
    const navLinks = document.querySelectorAll('.navmenu a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px var(--accent-color)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
    
    // Efeito de loading tecnológico
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }
    
    // Efeito de scroll suave para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efeito de destaque nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(255, 62, 62, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 10px rgba(255, 62, 62, 0.1)';
        });
    });
    
    // Efeito de animação nos filtros do portfólio
    const portfolioFilters = document.querySelectorAll('.portfolio-filters li');
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            portfolioFilters.forEach(f => f.classList.remove('filter-active'));
            // Add active class to clicked filter
            this.classList.add('filter-active');
        });
    });
    
    // Efeito de destaque nos botões
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 5px 25px rgba(255, 62, 62, 0.5)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--tech-glow)';
        });
    });
    
    // Efeito de destaque nos campos de formulário
    const formInputs = document.querySelectorAll('.php-email-form input, .php-email-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--accent-secondary)';
            this.style.boxShadow = '0 0 20px rgba(62, 107, 255, 0.3)';
            this.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = 'var(--accent-color)';
            this.style.boxShadow = '0 0 10px rgba(255, 62, 62, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Efeito de animação nos títulos das seções
    const sectionTitles = document.querySelectorAll('.section-title h2');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        title.style.transition = 'all 0.6s ease';
        observer.observe(title);
    });
    
    console.log('Tech effects loaded successfully! 🚀');
}); 