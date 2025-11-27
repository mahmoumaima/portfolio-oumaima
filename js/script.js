document.addEventListener('DOMContentLoaded', () => {
  // --- Navigation : burger, smooth scroll, active section
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const arrowUp = document.querySelector('#arrow-up');
  const sections = document.querySelectorAll('section[id]');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  const highlightActiveSection = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
          if (sectionId === 'home') {
            arrowUp?.setAttribute('style', 'display:none');
          } else {
            arrowUp?.setAttribute('style', 'display:inline');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightActiveSection);
  highlightActiveSection();

  // --- Parallax (section home)
  window.addEventListener('scroll', () => {
    const parallaxSection = document.querySelector('.parallax');
    if (parallaxSection) {
      const scrolled = window.pageYOffset;
      const coords = `${scrolled * 0.5}px`;
      parallaxSection.style.transform = `translateY(${coords})`;
    }
  });

  // --- WOW.js
  if (typeof WOW !== 'undefined') {
    new WOW({
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 100,
      mobile: true,
      live: true
    }).init();
  }

  // --- Intersection observer (animation reveal)
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate__animated').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });

  // --- Metro hover
  document.querySelectorAll('.metro-item').forEach((item) => {
    item.addEventListener('mouseenter', () => { item.style.zIndex = '10'; });
    item.addEventListener('mouseleave', () => { item.style.zIndex = '1'; });
  });

  // --- Skill tags animation delay
  document.querySelectorAll('.tag').forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
  });

  // --- Scroll progress indicator (top bar)
  const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(90deg, #f40707bb 0%, #f90707ff 100%);
      z-index: 9999;
      transition: width 0.2s ease-out;
    `;
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = `${scrolled}%`;
    });
  };
  createScrollProgress();

  // --- Navbar contrast sur page projet
  const toggleProjectNavbarState = () => {
    const body = document.body;
    if (!body.classList.contains('project-template')) return;
    const navbar = document.querySelector('.navbar');
    const masthead = document.querySelector('.project-masthead');
    const mastheadLogo = document.querySelector('.masthead-logo-centered');
    if (!navbar || !masthead) return;
    const mastheadBoundary = masthead.offsetHeight - navbar.offsetHeight - 40;
    if (window.scrollY < mastheadBoundary) {
      navbar.classList.add('nav-masthead-contrast');
      mastheadLogo?.classList.add('logo-contrast');
    } else {
      navbar.classList.remove('nav-masthead-contrast');
      mastheadLogo?.classList.remove('logo-contrast');
    }
  };
  window.addEventListener('scroll', toggleProjectNavbarState);
  window.addEventListener('load', toggleProjectNavbarState);

  // --- Lazy loading images (data-src)
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  images.forEach((img) => imageObserver.observe(img));

  // --- Compteurs stats (section about)
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = `${target}+`;
        clearInterval(timer);
      } else {
        element.textContent = `${Math.floor(start)}+`;
      }
    }, 16);
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector('h3');
        const value = parseInt(statNumber.textContent, 10);
        animateCounter(statNumber, value);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-item').forEach((stat) => statsObserver.observe(stat));

  // --- Slider template projet + année footer
  const initProjectTemplateFeatures = () => {
    const sliderTrack = document.querySelector('.resource-slider-track');
    const sliderWindow = document.querySelector('.resource-slider-window');
    const slides = sliderTrack ? Array.from(sliderTrack.querySelectorAll('.resource-card')) : [];
    const prevBtn = document.querySelector('[data-direction="prev"]');
    const nextBtn = document.querySelector('[data-direction="next"]');
    const progressBar = document.querySelector('.slider-progress-bar');
    const progressDot = document.querySelector('.slider-progress-dot');
    let currentSlide = 0;
    let sliderMetrics = { slideWidth: 0, maxSlide: 0, cardWidth: 0, wrapperWidth: 0, startPadding: 0 };
    let autoTimer = null;
    if (!slides.length) return;

    const computeSliderMetrics = () => {
      if (!slides.length || !sliderTrack) {
        sliderMetrics = { slideWidth: 0, maxSlide: 0, cardWidth: 0, wrapperWidth: 0, startPadding: 0 };
        return;
      }
      const style = window.getComputedStyle(sliderTrack);
      const gap = parseFloat(style.columnGap || style.gap || 0) || 0;
      const paddingLeft = parseFloat(style.paddingLeft) || 0;
      const cardWidth = slides[0].getBoundingClientRect().width;
      const wrapperWidth = sliderWindow ? sliderWindow.getBoundingClientRect().width : cardWidth;
      const maxSlide = slides.length - 1;
      sliderMetrics = {
        slideWidth: cardWidth + gap,
        maxSlide,
        cardWidth,
        wrapperWidth,
        startPadding: paddingLeft
      };
      if (currentSlide > maxSlide) currentSlide = 0;
    };

    const updateSlider = () => {
      if (!sliderTrack || !sliderMetrics.slideWidth) return;
      const { slideWidth, cardWidth, wrapperWidth, maxSlide, startPadding } = sliderMetrics;
      const offset = currentSlide * slideWidth + startPadding - ((wrapperWidth - cardWidth) / 2);
      sliderTrack.style.transform = `translateX(${-offset}px)`;
      slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentSlide);
        slide.classList.toggle('is-prev', index === (currentSlide - 1 + slides.length) % slides.length);
        slide.classList.toggle('is-next', index === (currentSlide + 1) % slides.length);
      });
      const progressPercent = maxSlide > 0 ? (currentSlide / maxSlide) * 100 : 0;
      if (progressBar) progressBar.style.width = `${progressPercent}%`;
      if (progressDot) progressDot.style.left = `${progressPercent}%`;
    };

    const handleNav = (direction, restart = true) => {
      if (!slides.length) return;
      if (sliderMetrics.maxSlide === 0 && slides.length <= 1) return;
      if (direction === 'next') {
        currentSlide = sliderMetrics.maxSlide
          ? (currentSlide >= sliderMetrics.maxSlide ? 0 : currentSlide + 1)
          : (currentSlide + 1) % slides.length;
      } else {
        currentSlide = sliderMetrics.maxSlide
          ? (currentSlide <= 0 ? sliderMetrics.maxSlide : currentSlide - 1)
          : (currentSlide - 1 + slides.length) % slides.length;
      }
      updateSlider();
      if (restart) restartAutoplay();
    };

    const restartAutoplay = () => {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
      if (slides.length > 1) {
        autoTimer = setInterval(() => handleNav('next', false), 8000);
      }
    };

    prevBtn?.addEventListener('click', () => handleNav('prev'));
    nextBtn?.addEventListener('click', () => handleNav('next'));
    window.addEventListener('resize', () => {
      computeSliderMetrics();
      updateSlider();
    });
    computeSliderMetrics();
    updateSlider();
    restartAutoplay();

    const yearElement = document.getElementById('year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();
  };

  initProjectTemplateFeatures();

  // --- Mockup pointer tracking
  document.querySelectorAll('.mockup-screen').forEach((screen) => {
    screen.addEventListener('mousemove', (event) => {
      const rect = screen.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      screen.style.setProperty('--pointer-x', `${x}px`);
      screen.style.setProperty('--pointer-y', `${y}px`);
    });
    screen.addEventListener('mouseleave', () => {
      screen.style.setProperty('--pointer-x', `-999px`);
      screen.style.setProperty('--pointer-y', `-999px`);
    });
  });

  // --- Console message
  console.log('%c👋 Bienvenue sur mon portfolio!', 'color: var(--red); font-size: 24px; font-weight: bold;');
  console.log('%cDéveloppé par Oumaima', 'color: #764BA2; font-size: 14px;');
});
