/* ============================================================================
   VANILLA JAVASCRIPT MODULES - DEVELOPER WEB RESUME
   ============================================================================ */

/**
 * Initialize Mobile Menu Toggle
 * Toggles #mobile-menu.open on #menu-btn click
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  const navLinks = mobileMenu.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', false);
    });
  });
}

/**
 * Initialize Scroll Spy
 * Uses IntersectionObserver to detect active section and update nav
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a[href^="#"]');

  const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -75% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id;

        // Remove active class from all nav links
        navLinks.forEach(link => {
          link.classList.remove('nav-active');
        });

        // Add active class to matching nav link
        const activeLink = document.querySelector(`a[href="#${currentSectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('nav-active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Initialize Smooth Scroll Fallback
 * Provides fallback for browsers that don't support CSS scroll-behavior
 */
function initSmoothScroll() {
  // Check if scroll-behavior is supported
  const html = document.documentElement;
  const isScrollBehaviorSupported = 'scrollBehavior' in html.style;

  if (isScrollBehaviorSupported) {
    return; // Browser supports native smooth scroll
  }

  // Fallback for older browsers
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const targetTop = target.offsetTop - 64; // Account for sticky nav
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });
}

/**
 * Initialize PDF Download Functionality
 * Triggers window.print() on button click
 */
function initPdfDownload() {
  const downloadBtn = document.getElementById('btn-download-pdf');
  const downloadBtnMobile = document.getElementById('btn-download-pdf-mobile');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (downloadBtnMobile) {
    downloadBtnMobile.addEventListener('click', () => {
      window.print();
    });
  }
}

/**
 * Initialize Fade-In on Scroll
 * Uses IntersectionObserver to add .visible class to .fade-in elements
 */
function initFadeIn() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  if (fadeInElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Only trigger once, so unobserve after first intersection
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach(element => observer.observe(element));
}

/**
 * Initialize Dark Mode Toggle
 * Manages dark mode preference and icon visibility
 */
function initDarkMode() {
  const toggles = [
    {
      button: document.getElementById('dark-mode-toggle'),
      sunIcon: document.getElementById('sun-icon'),
      moonIcon: document.getElementById('moon-icon')
    },
    {
      button: document.getElementById('dark-mode-toggle-mobile'),
      sunIcon: document.getElementById('sun-icon-mobile'),
      moonIcon: document.getElementById('moon-icon-mobile')
    }
  ];

  const html = document.documentElement;

  // Load saved preference (defaults to dark mode)
  const saved = localStorage.getItem('theme') ?? 'dark';
  html.classList.toggle('dark', saved === 'dark');
  updateAllToggles();

  // Add click handlers for all toggles
  toggles.forEach(({ button }) => {
    if (!button) return;
    button.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
      updateAllToggles();
    });
  });

  function updateAllToggles() {
    toggles.forEach(({ sunIcon, moonIcon }) => {
      if (sunIcon) sunIcon.classList.toggle('hidden', html.classList.contains('dark'));
      if (moonIcon) moonIcon.classList.toggle('hidden', !html.classList.contains('dark'));
    });
  }
}

/* ============================================================================
   INITIALIZATION
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileMenu();
  initScrollSpy();
  initSmoothScroll();
  initPdfDownload();
  initFadeIn();
});
