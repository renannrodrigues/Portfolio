export class Hero {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.typeEffect();
  }

  render() {
    const hero = document.createElement('section');
    hero.id = 'home';
    hero.className = 'min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-black via-dark-100 to-black';
    
    hero.innerHTML = `
      <div class="max-w-7xl mx-auto w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6 animate-slide-up">
            <div class="space-y-2">
              <p class="text-primary text-lg font-medium">Olá! Eu sou</p>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                Renan<br/>
                <span class="text-primary">Rodrigues</span>
              </h1>
              <div class="h-12 flex items-center">
                <h2 id="typing-text" class="text-2xl md:text-3xl text-gray font-medium"></h2>
                <span class="typing-cursor text-primary text-3xl font-thin ml-1">|</span>
              </div>
            </div>
            
            <p class="text-gray text-lg leading-relaxed max-w-xl">
              Desenvolvedor front-end e programador dedicado a transformar ideias em 
              <span class="text-white font-medium">experiências digitais</span> claras, funcionais e envolventes.
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <a href="#projects" class="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                <i class="fas fa-briefcase"></i>
                Ver Projetos
                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#contact" class="bg-transparent border-2 border-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                <i class="fas fa-envelope"></i>
                Entre em Contato
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex gap-4 pt-6">
              <a href="https://github.com/renannrodrigues" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i class="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/renan-rodrigues-dos-santos-6a3800398/" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i class="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://instagram.com/renannrodrigues97" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://wa.me/5554999061396" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
                <i class="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          <!-- Image -->
          <div class="relative animate-scale-in">
            <div class="relative w-full max-w-md mx-auto">
              <!-- Decorative elements -->
              <div class="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              
              <!-- Image container -->
              <div class="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl hover:border-primary transition-all duration-300">
                <img src="/imgs/imagemperfil.jpg" alt="Renan Rodrigues" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">
              </div>
              
              <!-- Floating badge -->
              <div class="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-3 rounded-xl shadow-xl z-20 animate-bounce">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="font-medium">Disponível para Freelance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('app').appendChild(hero);
  }

  typeEffect() {
    const texts = [
      'Desenvolvedor Front-End',
      'Programador Web',
      'Designer UI/UX',
      'Freelancer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTexts = 2000;

    const typeText = () => {
      const currentText = texts[textIndex];
      const typingElement = document.getElementById('typing-text');
      
      if (!typingElement) return;

      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        speed = delayBetweenTexts;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(typeText, speed);
    };

    typeText();
  }
}