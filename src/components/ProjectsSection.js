import { projects, categories } from '../data/projects.js';

export class ProjectsSection {
  constructor() {
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
    this.startAutoScroll();
  }

  render() {
    const section = document.createElement('section');
    section.id = 'projects';
    section.className = 'py-20 px-6 bg-black overflow-hidden';
    
    section.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16 space-y-4 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white">
            Projetos que <span class="text-primary">fazem a diferença</span>
          </h2>
          <p class="text-gray text-lg max-w-3xl mx-auto">
            Uma seleção dos meus principais trabalhos que demonstram qualidade, 
            criatividade e resultados excepcionais.
          </p>
          <div class="flex items-center justify-center gap-2 pt-2">
            <span class="w-20 h-1 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="mb-12">
          <div class="flex flex-wrap justify-center gap-3" id="project-filters">
            ${categories.map(cat => `
              <button 
                data-filter="${cat.id}"
                class="filter-btn px-6 py-3 rounded-lg font-medium transition-all duration-300 ${cat.id === 'all' ? 'bg-primary text-white' : 'bg-dark-300 text-gray hover:bg-dark-200 hover:text-white border border-gray-dark hover:border-primary'}"
              >
                <span class="mr-2">${cat.icon}</span>
                ${cat.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Scrolling Projects Container -->
        <div class="relative" id="scrolling-wrapper">
          <!-- Gradient Overlays -->
          <div class="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div class="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <!-- Row 1 - Scroll Right -->
          <div class="mb-6 overflow-hidden">
            <div class="scroll-row scroll-right flex gap-6" id="row-1">
              <!-- Projects will be inserted here -->
            </div>
          </div>

          <!-- Row 2 - Scroll Left -->
          <div class="overflow-hidden">
            <div class="scroll-row scroll-left flex gap-6" id="row-2">
              <!-- Projects will be inserted here -->
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div id="empty-state" class="hidden text-center py-20">
          <i class="fas fa-folder-open text-6xl text-gray mb-4"></i>
          <p class="text-gray text-lg">Nenhum projeto encontrado nesta categoria.</p>
        </div>

        <!-- View More Button -->
        <div class="text-center mt-12">
          <a href="https://github.com/renannrodrigues" target="_blank" class="inline-flex items-center gap-2 bg-transparent border-2 border-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 group">
            <i class="fab fa-github text-xl"></i>
            Ver Todos os Projetos no GitHub
            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    `;

    document.getElementById('app').appendChild(section);
    this.renderProjects();
  }

  renderProjects(filter = 'all') {
    const row1 = document.getElementById('row-1');
    const row2 = document.getElementById('row-2');
    const emptyState = document.getElementById('empty-state');
    const scrollingWrapper = document.getElementById('scrolling-wrapper');
    
    // Filter projects
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category.includes(filter));

    // Clear rows
    row1.innerHTML = '';
    row2.innerHTML = '';

    // Show empty state if no projects
    if (filteredProjects.length === 0) {
      emptyState.classList.remove('hidden');
      scrollingWrapper.classList.add('hidden');
      return;
    } else {
      emptyState.classList.add('hidden');
      scrollingWrapper.classList.remove('hidden');
    }

    // Duplicate projects 4x for smooth infinite scroll
    const duplicatedProjects = [
      ...filteredProjects, 
      ...filteredProjects, 
      ...filteredProjects,
      ...filteredProjects
    ];

    // Split projects between rows
    duplicatedProjects.forEach((project, index) => {
      const card = this.createProjectCard(project);
      
      if (index % 2 === 0) {
        row1.appendChild(card);
      } else {
        row2.appendChild(card);
      }
    });

    // Restart animation
    this.restartScroll();
  }

  createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-scroll-card group relative rounded-xl overflow-hidden border border-gray-dark hover:border-primary transition-all duration-300 cursor-pointer flex-shrink-0 w-80';
    
    card.innerHTML = `
      <!-- Project Image -->
      <div class="relative h-56 overflow-hidden">
        <img 
          src="${project.image}" 
          alt="${project.title}"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <!-- Overlay on hover -->
        <div class="project-overlay absolute inset-0 bg-black/90 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
          <h3 class="text-xl font-bold text-white text-center">${project.title}</h3>
          <p class="text-primary font-medium text-center text-sm">${project.subtitle}</p>
          <p class="text-gray text-xs text-center line-clamp-2">${project.description}</p>
          
          <!-- Technologies -->
          <div class="flex flex-wrap gap-2 justify-center">
            ${project.technologies.slice(0, 3).map(tech => `
              <span class="px-2 py-1 bg-dark-300 text-gray text-xs rounded-full border border-gray-dark">
                ${tech}
              </span>
            `).join('')}
          </div>
          
          <!-- Action Buttons -->
          <div class="flex gap-2 mt-2">
            ${project.liveUrl && project.liveUrl !== '#' ? `
              <a 
                href="${project.liveUrl}" 
                target="_blank"
                onclick="event.stopPropagation()"
                class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                <i class="fas fa-external-link-alt text-xs"></i>
                Ver Projeto
              </a>
            ` : ''}
            
            ${project.githubUrl ? `
              <a 
                href="${project.githubUrl}" 
                target="_blank"
                onclick="event.stopPropagation()"
                class="bg-dark-300 hover:bg-dark-200 border border-gray-dark hover:border-primary text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center gap-2"
              >
                <i class="fab fa-github text-sm"></i>
                GitHub
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Featured Badge -->
        ${project.featured ? `
          <div class="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10">
            <i class="fas fa-star text-xs"></i>
            DESTAQUE
          </div>
        ` : ''}
      </div>
    `;

    // Click to open overlay on mobile
    card.addEventListener('click', (e) => {
      if (window.innerWidth < 768) {
        const overlay = card.querySelector('.project-overlay');
        overlay.classList.toggle('opacity-100');
        overlay.classList.toggle('opacity-0');
      }
    });

    return card;
  }

  startAutoScroll() {
    // CSS animation will be added via styles
  }

  restartScroll() {
    const rows = document.querySelectorAll('.scroll-row');
    rows.forEach(row => {
      row.style.animation = 'none';
      setTimeout(() => {
        row.style.animation = '';
      }, 10);
    });
  }

  attachEvents() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active state
        filterBtns.forEach(b => {
          b.classList.remove('bg-primary', 'text-white');
          b.classList.add('bg-dark-300', 'text-gray', 'border', 'border-gray-dark');
        });
        
        btn.classList.add('bg-primary', 'text-white');
        btn.classList.remove('bg-dark-300', 'text-gray', 'border', 'border-gray-dark');

        // Filter projects
        this.renderProjects(filter);
      });
    });

    // Pause scroll on hover
    const wrapper = document.getElementById('scrolling-wrapper');
    if (wrapper) {
      wrapper.addEventListener('mouseenter', () => {
        const rows = wrapper.querySelectorAll('.scroll-row');
        rows.forEach(row => {
          row.style.animationPlayState = 'paused';
        });
      });

      wrapper.addEventListener('mouseleave', () => {
        const rows = wrapper.querySelectorAll('.scroll-row');
        rows.forEach(row => {
          row.style.animationPlayState = 'running';
        });
      });
    }
  }
}