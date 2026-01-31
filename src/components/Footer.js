export class Footer {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
  }

  render() {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark-100 border-t border-gray-dark py-12 px-6';
    
    footer.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <!-- Brand -->
          <div class="space-y-4">
            <h3 class="text-2xl font-display font-bold">
              <span class="text-primary">Renan</span>
              <span class="text-white">Rodrigues</span>
            </h3>
            <p class="text-gray text-sm leading-relaxed">
              Desenvolvedor Front-End dedicado a criar experiências digitais excepcionais.
            </p>
            <div class="flex gap-3">
              <a href="https://github.com/renannrodrigues" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/renan-rodrigues-dos-santos-6a3800398/" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com/renannrodrigues97" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/5554999061396" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h4 class="text-white font-bold text-lg">Links Rápidos</h4>
            <nav class="flex flex-col gap-2">
              <a href="#home" class="text-gray hover:text-primary transition-colors">Home</a>
              <a href="#about" class="text-gray hover:text-primary transition-colors">Sobre</a>
              <a href="#resume" class="text-gray hover:text-primary transition-colors">Currículo</a>
              <a href="#projects" class="text-gray hover:text-primary transition-colors">Projetos</a>
              <a href="#contact" class="text-gray hover:text-primary transition-colors">Contato</a>
            </nav>
          </div>

          <!-- Contact Info -->
          <div class="space-y-4">
            <h4 class="text-white font-bold text-lg">Contato</h4>
            <div class="space-y-3 text-sm">
              <a href="mailto:renan.rdossantos20@yahoo.com.br" class="flex items-center gap-2 text-gray hover:text-primary transition-colors">
                <i class="fas fa-envelope"></i>
                <span class="break-all">renan.rdossantos20@yahoo.com.br</span>
              </a>
              <a href="tel:+5554999061396" class="flex items-center gap-2 text-gray hover:text-primary transition-colors">
                <i class="fas fa-phone"></i>
                <span>(54) 99906-1396</span>
              </a>
              <div class="flex items-center gap-2 text-gray">
                <i class="fas fa-location-dot"></i>
                <span>Bento Gonçalves, RS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-dark">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray">
            <p>
              © ${new Date().getFullYear()} 
              <span class="text-primary font-medium">Renan Rodrigues</span>. 
              Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido com 
              <i class="fas fa-heart text-primary"></i> 
              e 
              <i class="fas fa-coffee text-primary"></i>
            </p>
          </div>
        </div>

        <!-- Back to Top Button -->
        <button 
          id="back-to-top" 
          class="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 pointer-events-none flex items-center justify-center group"
          aria-label="Voltar ao topo"
        >
          <i class="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
        </button>
      </div>
    `;

    document.body.appendChild(footer);
  }

  attachEvents() {
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}