export class Contact {
  constructor() {
    this.init();
  }

  init() {
    this.render();
    this.attachEvents();
  }

  render() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'py-20 px-6 bg-gradient-to-b from-black via-dark-100 to-black';
    
    section.innerHTML = `
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16 space-y-4 animate-slide-up">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-white">
            Entre em <span class="text-primary">Contato</span>
          </h2>
          <p class="text-gray text-lg">Vamos trabalhar juntos! Estou disponível para novos projetos</p>
          <div class="flex items-center justify-center gap-2">
            <span class="w-20 h-1 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            <span class="w-2 h-2 bg-primary rounded-full"></span>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-6 animate-slide-up">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <!-- WhatsApp - Destaque -->
              <a href="https://wa.me/5554999061396" target="_blank" class="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/20 to-transparent rounded-xl border-2 border-primary hover:border-primary-light transition-all duration-300 group hover:scale-[1.02]">
                <div class="w-14 h-14 flex items-center justify-center bg-primary rounded-xl group-hover:scale-110 transition-transform">
                  <i class="fab fa-whatsapp text-2xl text-white"></i>
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-bold mb-1 flex items-center gap-2">
                    WhatsApp
                    <span class="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Online</span>
                  </h4>
                  <p class="text-gray">(54) 99906-1396</p>
                  <p class="text-sm text-primary mt-1">Clique para conversar →</p>
                </div>
              </a>

              <!-- Email - Destaque -->
              <a href="mailto:renan.rdossantos20@yahoo.com.br" class="flex items-start gap-4 p-6 bg-dark-300 rounded-xl border border-gray-dark hover:border-primary transition-all duration-300 group hover:scale-[1.02]">
                <div class="w-14 h-14 flex items-center justify-center bg-dark-200 rounded-xl group-hover:bg-primary transition-colors">
                  <i class="fas fa-envelope text-2xl text-primary group-hover:text-white"></i>
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-bold mb-1">Email</h4>
                  <p class="text-gray text-sm break-all">renan.rdossantos20@yahoo.com.br</p>
                </div>
              </a>

              <!-- Other Info -->
              <div class="flex items-start gap-4 p-6 bg-dark-300 rounded-xl border border-gray-dark">
                <div class="w-14 h-14 flex items-center justify-center bg-dark-200 rounded-xl">
                  <i class="fas fa-location-dot text-2xl text-primary"></i>
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-bold mb-1">Localização</h4>
                  <p class="text-gray">Bento Gonçalves, RS, Brasil</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-6 bg-dark-300 rounded-xl border border-gray-dark">
                <div class="w-14 h-14 flex items-center justify-center bg-dark-200 rounded-xl">
                  <i class="fas fa-briefcase text-2xl text-primary"></i>
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-bold mb-1">Disponibilidade</h4>
                  <p class="text-gray">Disponível para Freelance</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="pt-6">
              <h4 class="text-white font-bold mb-4">Redes Sociais</h4>
              <div class="flex gap-4">
                <a href="https://github.com/renannrodrigues" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-dark hover:border-primary">
                  <i class="fab fa-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/renan-rodrigues-dos-santos-6a3800398/" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-dark hover:border-primary">
                  <i class="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="https://instagram.com/renannrodrigues97" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-gray hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-dark hover:border-primary">
                  <i class="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="animate-slide-up">
            <form id="contact-form" class="space-y-6 p-8 bg-dark-300 rounded-2xl border border-gray-dark">
              <h3 class="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              
              <div>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Seu Nome *" 
                  required
                  class="w-full px-4 py-3 bg-dark-200 border border-gray-dark rounded-lg text-white placeholder-gray focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Seu Email *" 
                  required
                  class="w-full px-4 py-3 bg-dark-200 border border-gray-dark rounded-lg text-white placeholder-gray focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Assunto *" 
                  required
                  class="w-full px-4 py-3 bg-dark-200 border border-gray-dark rounded-lg text-white placeholder-gray focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Sua Mensagem *" 
                  required
                  class="w-full px-4 py-3 bg-dark-200 border border-gray-dark rounded-lg text-white placeholder-gray focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                <i class="fas fa-paper-plane"></i>
                Enviar via WhatsApp
                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>

              <p class="text-gray text-sm text-center">
                Sua mensagem será enviada diretamente para o meu WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    `;

    document.getElementById('app').appendChild(section);
  }

  attachEvents() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      const whatsappNumber = '5554999061396';
      const whatsappMessage = `*Nova mensagem do portfólio!*%0A%0A` +
                             `*Nome:* ${name}%0A` +
                             `*Email:* ${email}%0A` +
                             `*Assunto:* ${subject}%0A%0A` +
                             `*Mensagem:*%0A${message}`;
      
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      
      window.open(whatsappURL, '_blank');
      
      // Visual feedback
      const submitButton = form.querySelector('button[type="submit"]');
      const originalHTML = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-check"></i> Redirecionando...';
      submitButton.classList.add('bg-green-500');

      form.reset();

      setTimeout(() => {
        submitButton.innerHTML = originalHTML;
        submitButton.classList.remove('bg-green-500');
      }, 3000);
    });
  }
}