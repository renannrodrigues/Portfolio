import './styles/main.css';
import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Resume } from './components/Resume.js';
import { ProjectsSection } from './components/ProjectsSection.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

// Initialize App
class App {
  constructor() {
    this.init();
  }

  init() {
    // Create main app container
    const app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);

    // Initialize all components in order
    new Header();
    new Hero();
    new About();
    new Resume();
    new ProjectsSection();
    new Contact();
    new Footer();

    // Add intersection observer for scroll animations
    this.initScrollAnimations();

    // Console message
    this.consoleMessage();
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections
    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => observer.observe(section));
    }, 100);
  }

  consoleMessage() {
    const styles = {
      title: 'color: #dc3545; font-size: 20px; font-weight: bold;',
      message: 'color: #fff; font-size: 14px;',
      contact: 'color: #707070; font-size: 12px;'
    };

    console.log('%c👋 Olá! Bem-vindo ao meu portfólio!', styles.title);
    console.log('%cSe você está vendo isso, deve gostar de código tanto quanto eu! 🚀', styles.message);
    console.log('%cVamos conversar: renan.rdossantos20@yahoo.com.br', styles.contact);
  }
}

// Start the application
new App();