export class ProjectCard {
  constructor(project) {
    this.project = project;
  }

  render() {
    const card = document.createElement('div');
    card.className = `project-card group relative bg-dark-300 rounded-xl overflow-hidden border border-gray-dark hover:border-primary transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20`;
    card.setAttribute('data-category', this.project.category.join(' '));
    
    card.innerHTML = `
      <!-- Image Container -->
      <div class="relative h-64 overflow-hidden bg-dark-200">
        <img 
          src="${this.project.image}" 
          alt="${this.project.title}"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        <!-- Featured Badge -->
        ${this.project.featured ? `
          <div class="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <i class="fas fa-star text-xs"></i>
            DESTAQUE
          </div>
        ` : ''}
      </div>

      <!-- Content -->
      <div class="p-6 space-y-4">
        <!-- Title -->
        <div>
          <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            ${this.project.title}
          </h3>
          <p class="text-sm text-primary font-medium">${this.project.subtitle}</p>
        </div>

        <!-- Description -->
        <p class="text-gray text-sm leading-relaxed line-clamp-2">
          ${this.project.description}
        </p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-2">
          ${this.project.technologies.map(tech => `
            <span class="px-3 py-1 bg-dark-100 text-gray text-xs rounded-full border border-gray-dark hover:border-primary hover:text-white transition-all duration-300">
              ${tech}
            </span>
          `).join('')}
        </div>

        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          ${this.project.liveUrl && this.project.liveUrl !== '#' ? `
            <a 
              href="${this.project.liveUrl}" 
              target="_blank"
              class="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-2.5 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
            >
              <i class="fas fa-external-link-alt text-sm"></i>
              Ver Projeto
              <i class="fas fa-arrow-right text-xs opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300"></i>
            </a>
          ` : ''}
          
          ${this.project.githubUrl ? `
            <a 
              href="${this.project.githubUrl}" 
              target="_blank"
              class="bg-dark-100 hover:bg-dark-200 border border-gray-dark hover:border-primary text-gray hover:text-white p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center"
              title="Ver no GitHub"
            >
              <i class="fab fa-github text-lg"></i>
            </a>
          ` : ''}
        </div>
      </div>
    `;

    return card;
  }
}