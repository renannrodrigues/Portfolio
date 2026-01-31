export class Header {
  constructor() {
    this.isMenuOpen = false;
    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
    this.handleScroll();
  }

  render() {
    const header = document.createElement('header');
    header.id = 'header';
    header.className = 'fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-dark transition-all duration-300';
    
    header.innerHTML = `
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a href="#home" class="text-2xl font-display font-bold">
            <span class="text-primary">Renan</span>
            <span class="text-white">Rodrigues</span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <a href="#home" class="nav-link text-white hover:text-primary transition-colors duration-300">Home</a>
            <a href="#about" class="nav-link text-white hover:text-primary transition-colors duration-300">Sobre</a>
            <a href="#resume" class="nav-link text-white hover:text-primary transition-colors duration-300">Currículo</a>
            <a href="#projects" class="nav-link text-white hover:text-primary transition-colors duration-300">Projetos</a>
            <a href="#contact" class="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-medium">
              Contato
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden text-white text-2xl focus:outline-none">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <nav id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-dark-100 border-b border-gray-dark transform -translate-y-full opacity-0 transition-all duration-300 pointer-events-none">
          <div class="flex flex-col p-6 gap-4">
            <a href="#home" class="mobile-nav-link text-white hover:text-primary transition-colors duration-300 py-2">Home</a>
            <a href="#about" class="mobile-nav-link text-white hover:text-primary transition-colors duration-300 py-2">Sobre</a>
            <a href="#resume" class="mobile-nav-link text-white hover:text-primary transition-colors duration-300 py-2">Currículo</a>
            <a href="#projects" class="mobile-nav-link text-white hover:text-primary transition-colors duration-300 py-2">Projetos</a>
            <a href="#contact" class="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium text-center">
              Contato
            </a>
          </div>
        </nav>
      </div>
    `;

    document.body.insertBefore(header, document.body.firstChild);
  }

  attachEvents() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    menuBtn.addEventListener('click', () => {
      this.isMenuOpen = !this.isMenuOpen;
      
      if (this.isMenuOpen) {
        mobileMenu.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('translate-y-0', 'opacity-100');
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
      }
    });

    // Close menu when clicking on links
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
        this.isMenuOpen = false;
      });
    });

    // Smooth scroll for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  handleScroll() {
    let lastScroll = 0;
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
      }

      lastScroll = currentScroll;
    });
  }
}