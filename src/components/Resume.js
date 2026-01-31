export class Resume {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
  }

  render() {
    const section = document.createElement('section');
    section.id = 'resume';
    section.className = 'py-20 px-6 bg-black';
    
    section.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16 space-y-4 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white">
            Meu <span class="text-primary">Currículo</span>
          </h2>
          <p class="text-gray text-lg">Experiência profissional e formação acadêmica</p>
          <div class="flex items-center justify-center gap-2">
            <span class="w-20 h-1 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
          </div>
        </div>

        <!-- Skills Overview -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Principais Tecnologias</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            ${this.getSkills().map(skill => `
              <div class="group p-6 bg-dark-300 rounded-xl border border-gray-dark hover:border-primary transition-all duration-300 hover:scale-105 text-center">
                <i class="${skill.icon} text-4xl text-primary mb-3 group-hover:scale-110 transition-transform"></i>
                <p class="text-white font-medium">${skill.name}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Experience & Education Tabs -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Experience -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i class="fas fa-briefcase text-primary"></i>
              Experiência
            </h3>
            
            <div id="experience-content">
              ${this.getExperiences().map((exp, index) => `
                <div class="experience-item p-6 bg-dark-300 rounded-xl border border-gray-dark mb-4 hover:border-primary transition-all duration-300 ${index === 0 ? 'active' : ''}" data-index="${index}">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 flex items-center justify-center bg-primary rounded-lg flex-shrink-0">
                      <i class="fas fa-code text-white text-xl"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-white font-bold text-lg mb-1">${exp.title}</h4>
                      <p class="text-primary font-medium mb-2">${exp.company}</p>
                      <p class="text-gray text-sm mb-3">${exp.period}</p>
                      <p class="text-gray text-sm leading-relaxed">${exp.description}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Education -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i class="fas fa-graduation-cap text-primary"></i>
              Formação
            </h3>
            
            <div id="education-content">
              ${this.getEducation().map((edu, index) => `
                <div class="education-item p-6 bg-dark-300 rounded-xl border border-gray-dark mb-4 hover:border-primary transition-all duration-300 ${index === 0 ? 'active' : ''}" data-index="${index}">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 flex items-center justify-center bg-primary rounded-lg flex-shrink-0">
                      <i class="fas fa-book text-white text-xl"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-white font-bold text-lg mb-1">${edu.course}</h4>
                      <p class="text-primary font-medium mb-2">${edu.institution}</p>
                      <p class="text-gray text-sm mb-3">${edu.period}</p>
                      <p class="text-gray text-sm leading-relaxed">${edu.description}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-white mb-8 text-center">Serviços Oferecidos</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${this.getServices().map(service => `
              <div class="group p-6 bg-dark-300 rounded-xl border border-gray-dark hover:border-primary transition-all duration-300 hover:scale-[1.02]">
                <div class="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mb-4 group-hover:bg-primary transition-colors">
                  <i class="${service.icon} text-3xl text-primary group-hover:text-white"></i>
                </div>
                <h4 class="text-white font-bold text-lg mb-2">${service.title}</h4>
                <p class="text-gray text-sm leading-relaxed mb-4">${service.description}</p>
                <div class="flex flex-wrap gap-2">
                  ${service.tools.map(tool => `
                    <span class="text-xs text-gray">${tool}</span>
                  `).join(' • ')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    document.getElementById('app').appendChild(section);
  }

  getSkills() {
    return [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Git', icon: 'fab fa-git-alt' },
    ];
  }

  getExperiences() {
    return [
      {
        title: 'Desenvolvedor Front-End',
        company: 'Freelancer',
        period: '2024 - Presente',
        description: 'Desenvolvimento de sites e aplicações web modernas, responsivas e otimizadas para diversos clientes.'
      },
      {
        title: 'Web Designer',
        company: 'Projetos Pessoais',
        period: '2023 - 2026',
        description: 'Criação de interfaces de usuário e experiências digitais com foco em usabilidade e design moderno.'
      }
    ];
  }

  getEducation() {
    return [
      {
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Tecnólogo',
        period: '2025 - 2027',
        description: 'Faculdade focada em desenvolvimento de software, metodologias ágeis e tecnologias web.'
      },
      {
        course: 'Design UI/UX',
        institution: 'Plataformas de Ensino',
        period: '2022 - 2023',
        description: 'Especialização em design de interfaces e experiência do usuário.'
      }
    ];
  }

  getServices() {
    return [
      {
        icon: 'fas fa-code',
        title: 'Desenvolvimento Web',
        description: 'Criação de sites e aplicações web responsivas e modernas.',
        tools: ['HTML', 'CSS', 'JavaScript', 'React']
      },
      {
        icon: 'fas fa-palette',
        title: 'Design UI/UX',
        description: 'Design de interfaces intuitivas com foco na experiência do usuário.',
        tools: ['Figma', 'Adobe XD', 'Sketch']
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Responsividade',
        description: 'Sites otimizados para todos os dispositivos e tamanhos de tela.',
        tools: ['Mobile First', 'Tailwind', 'Bootstrap']
      },
      {
        icon: 'fas fa-search',
        title: 'SEO',
        description: 'Otimização para motores de busca e performance.',
        tools: ['Google Analytics', 'SEMrush', 'Lighthouse']
      },
      {
        icon: 'fas fa-rocket',
        title: 'Performance',
        description: 'Sites rápidos e otimizados para melhor experiência.',
        tools: ['Webpack', 'Vite', 'Optimization']
      },
      {
        icon: 'fas fa-headset',
        title: 'Suporte',
        description: 'Manutenção e suporte técnico contínuo para projetos.',
        tools: ['24/7', 'Updates', 'Bug Fixes']
      }
    ];
  }

  attachEvents() {
    // No complex interactions needed for now
  }
}