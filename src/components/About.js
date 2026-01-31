export class About {
  constructor() {
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    const section = document.createElement('section');
    section.id = 'about';
    section.className = 'py-20 px-6 bg-gradient-to-b from-black via-dark-100 to-black';
    
    section.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16 space-y-4 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white">
            Sobre <span class="text-primary">Mim</span>
          </h2>
          <p class="text-gray text-lg">Perfil profissional - Conheça minha trajetória</p>
          <div class="flex items-center justify-center gap-2">
            <span class="w-20 h-1 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="relative animate-scale-in">
            <div class="relative w-full max-w-md mx-auto">
              <div class="absolute -top-4 -left-4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div class="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img src="/imgs/imagemperfil.jpg" alt="Renan Rodrigues" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6 animate-slide-up">
            <div>
              <h3 class="text-3xl font-bold text-white mb-2">
                Eu sou <span class="text-primary">Renan</span>
              </h3>
              <p class="text-primary font-medium text-lg">Desenvolvedor Front-End</p>
            </div>

            <p class="text-gray leading-relaxed">
              Sou um profissional dedicado ao desenvolvimento e à construção de soluções digitais que 
              unem <span class="text-white font-medium">clareza, funcionalidade e estética</span>. 
              Tenho grande interesse por tecnologia e por processos criativos, o que me levou a 
              aprofundar meus conhecimentos em desenvolvimento, programação e práticas que valorizam 
              organização, precisão e experiência do usuário.
            </p>

            <p class="text-gray leading-relaxed">
              Busco constantemente aprimorar minhas habilidades, explorando novas ferramentas e 
              abordagens que contribuam para resultados mais eficientes e bem estruturados. 
              Acredito que cada projeto representa uma oportunidade de evolução, tanto técnica quanto pessoal.
            </p>

            <!-- Info Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div class="flex items-center gap-3 text-gray">
                <i class="fas fa-calendar-days text-primary"></i>
                <span>05 fev 1997</span>
              </div>
              <div class="flex items-center gap-3 text-gray">
                <i class="fas fa-laptop-code text-primary"></i>
                <span>Freelancer</span>
              </div>
              <div class="flex items-center gap-3 text-gray">
                <i class="fas fa-location-dot text-primary"></i>
                <span>Bento Gonçalves, RS</span>
              </div>
              <div class="flex items-center gap-3 text-gray">
                <i class="fas fa-globe text-primary"></i>
                <span>PT • EN • ES</span>
              </div>
              <div class="flex items-center gap-3 text-gray">
                <i class="fas fa-flag text-primary"></i>
                <span>Brasil</span>
              </div>
              <div class="flex items-center gap-3 text-gray">
                <i class="fas fa-phone-volume text-primary"></i>
                <span>(54) 99906-1396</span>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="pt-4">
              <a href="/docs/Renan rodrigues dos santos.pdf" download class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl group">
                <i class="fas fa-download"></i>
                Download Currículo
                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div class="text-center space-y-2 p-6 bg-dark-300 rounded-xl border border-gray-dark hover:border-primary transition-all duration-300 group">
            <i class="fas fa-code text-4xl text-primary group-hover:scale-110 transition-transform"></i>
            <h4 class="text-3xl font-bold text-white">20+</h4>
            <p class="text-gray">Projetos Concluídos</p>
          </div>
          <div class="text-center space-y-2 p-6 bg-dark-300 rounded-xl border border-gray-dark hover:border-primary transition-all duration-300 group">
            <i class="fas fa-clock text-4xl text-primary group-hover:scale-110 transition-transform"></i>
            <h4 class="text-3xl font-bold text-white">300+</h4>
            <p class="text-gray">Horas de Código</p>
          </div>
          <div class="text-center space-y-2 p-6 bg-dark-300 rounded-xl border border-gray-dark hover:border-primary transition-all duration-300 group">
            <i class="fas fa-laptop-code text-4xl text-primary group-hover:scale-110 transition-transform"></i>
            <h4 class="text-3xl font-bold text-white">15+</h4>
            <p class="text-gray">Tecnologias</p>
          </div>
          <div class="text-center space-y-2 p-6 bg-dark-300 rounded-xl border border-gray-dark hover:border-primary transition-all duration-300 group">
            <i class="fas fa-coffee text-4xl text-primary group-hover:scale-110 transition-transform"></i>
            <h4 class="text-3xl font-bold text-white">∞</h4>
            <p class="text-gray">Cafés Tomados</p>
          </div>
        </div>
      </div>
    `;

    document.getElementById('app').appendChild(section);
  }
}