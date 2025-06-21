// Animation utilities and scroll-triggered animations
class AnimationManager {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupInteractiveElements();
    this.setupParallaxEffects();
    this.setupTextAnimations();
    this.setupButtonAnimations();
    this.setupLoadingAnimations();
  }

  // Scroll-triggered animations
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Add stagger animations to children
          const children = entry.target.querySelectorAll('.animate-stagger');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in-up');
            }, index * 100);
          });
        }
      });
    }, this.observerOptions);

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
  }

  // Interactive hover effects
  setupInteractiveElements() {
    // Add hover effects to cards
    document.querySelectorAll('.interactive-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      });
    });

    // Add ripple effect to buttons
    document.querySelectorAll('.btn-ripple').forEach(button => {
      button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  // Parallax scrolling effects
  setupParallaxEffects() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Text reveal animations
  setupTextAnimations() {
    const textElements = document.querySelectorAll('.text-reveal');
    
    textElements.forEach(element => {
      const text = element.textContent;
      element.innerHTML = '';
      
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.05}s`;
        element.appendChild(span);
      });
    });
  }

  // Button animations
  setupButtonAnimations() {
    document.querySelectorAll('.btn-animate').forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });
  }

  // Loading animations
  setupLoadingAnimations() {
    // Add loading animation to images
    const images = document.querySelectorAll('img[data-loading]');
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
        img.classList.remove('loading');
      });
    });
  }

  // Utility methods
  static animateElement(element, animation, duration = 600) {
    element.style.animation = `${animation} ${duration}ms ease-out forwards`;
  }

  static staggerAnimation(elements, animation, staggerDelay = 100) {
    elements.forEach((element, index) => {
      setTimeout(() => {
        this.animateElement(element, animation);
      }, index * staggerDelay);
    });
  }
}

// Counter animation for statistics
class CounterAnimation {
  constructor(element, target, duration = 2000) {
    this.element = element;
    this.target = parseInt(target) || 0;
    this.duration = parseInt(duration) || 2000;
    this.start = 0;
    this.increment = this.target > 0 ? this.target / (this.duration / 16) : 0;
    this.current = 0;
    this.isAnimating = false;
    
    if (this.target > 0) {
      this.animate();
    }
  }

  animate() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    
    const animate = () => {
      this.current += this.increment;
      if (this.current < this.target) {
        this.element.textContent = Math.floor(this.current);
        requestAnimationFrame(animate);
      } else {
        this.element.textContent = this.target;
        this.isAnimating = false;
      }
    };
    
    animate();
  }
}

// Smooth scrolling for anchor links
class SmoothScroller {
  constructor() {
    this.setupSmoothScrolling();
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Typing animation for hero text
class TypingAnimation {
  constructor(element, texts, speed = 100) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.animate();
  }

  animate() {
    const currentText = this.texts[this.currentTextIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let delta = this.speed;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.currentCharIndex === currentText.length) {
      delta = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      delta = 500; // Pause before starting next word
    }

    setTimeout(() => this.animate(), delta);
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animation manager
  const animationManager = new AnimationManager();
  
  // Initialize smooth scroller
  const smoothScroller = new SmoothScroller();

  // Initialize counter animations for stats
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const value = parseInt(target.dataset.counter) || 0;
        if (value > 0) {
          new CounterAnimation(target, value);
        }
        observer.unobserve(target);
      }
    });
  });

  document.querySelectorAll('[data-counter]').forEach(counter => {
    observer.observe(counter);
  });

  // Initialize typing animation if element exists
  const typingElement = document.querySelector('[data-typing]');
  if (typingElement) {
    const texts = JSON.parse(typingElement.dataset.typing);
    new TypingAnimation(typingElement, texts);
  }

  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .btn-ripple {
      position: relative;
      overflow: hidden;
    }
    
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .animate-stagger {
      opacity: 0;
      transform: translateY(30px);
    }
    
    .animate-stagger.animate-fade-in-up {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.6s ease-out;
    }
  `;
  document.head.appendChild(style);
});

// Export for use in Astro components
export { AnimationManager, CounterAnimation, SmoothScroller, TypingAnimation }; 