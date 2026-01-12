 // Intersection Observer for scroll animations
 const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      
      // Remove hidden class and add appropriate animation class based on existing classes
      if (entry.target.classList.contains('hidden')) {
        entry.target.classList.remove('hidden');
      }
      
      // Add specific animation delays based on element position
      const children = entry.target.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('fade-in') || 
            children[i].classList.contains('slide-left') || 
            children[i].classList.contains('slide-right')) {
          children[i].style.animationDelay = `${i * 0.1}s`;
        }
      }
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Observe individual elements that need animation
document.querySelectorAll('.service-card, .client-card, .work-card, .process-step, .contact-card, .pricing-card, .trust-badge').forEach(el => {
  observer.observe(el);
});

// Hero text animation on load
window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero h1');
  const heroTagline = document.querySelector('.hero .tagline');
  
  setTimeout(() => {
    heroTitle.classList.remove('hidden');
    heroTitle.classList.add('fade-in');
  }, 300);
  
  setTimeout(() => {
    heroTagline.classList.remove('hidden');
    heroTagline.classList.add('fade-in');
  }, 800);
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
  });
  
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});