/* ============================================================
   MAIN.JS — Shan Oomes Portfolio
   Vanilla JS only — no dependencies
============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     SMOOTH SCROLL
     Handles all anchor links (#section) with smooth behaviour
     and accounts for the sticky navbar + bar height
  ---------------------------------------------------------- */

  function getStickyOffset() {
    const bar = document.querySelector('.announcement-bar');
    const nav = document.querySelector('.navbar');
    const barH = bar ? bar.offsetHeight : 0;
    const navH = nav ? nav.offsetHeight : 0;
    return barH + navH;
  }

  function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (!target) return;
    const offset = getStickyOffset();
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    e.preventDefault();
    smoothScrollTo(href);

    // Close mobile menu if open
    closeMobileMenu();
  });


  /* ----------------------------------------------------------
     MOBILE NAV TOGGLE
  ---------------------------------------------------------- */

  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  function openMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.contains('is-open');
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  // Close on Escape key — also closes CV modal if open
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeCvModal();
    }
  });


  /* ----------------------------------------------------------
     SCROLL FADE-IN
     Observes elements with .fade-up and adds .is-visible
     when they enter the viewport
  ---------------------------------------------------------- */

  const fadeEls = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }


  /* ----------------------------------------------------------
     ACTIVE NAV LINK
     Highlights the nav link for the section currently in view
  ---------------------------------------------------------- */

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');

  function setActiveLink() {
    const scrollY = window.scrollY;
    const offset = getStickyOffset() + 40;

    sections.forEach(function (section) {
      const top = section.offsetTop - offset;
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(function (link) {
          link.removeAttribute('aria-current');
          if (link.getAttribute('href') === '#' + section.id) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();


  /* ----------------------------------------------------------
     CV MODAL
  ---------------------------------------------------------- */

  const cvModal    = document.querySelector('.cv-modal');
  const cvTrigger  = document.querySelector('.cv-trigger');
  const cvClose    = document.querySelector('.cv-modal__close');
  const cvBackdrop = document.querySelector('.cv-modal__backdrop');
  let cvHideTimer = null;

  function openCvModal() {
    if (!cvModal) return;
    if (cvHideTimer) {
      clearTimeout(cvHideTimer);
      cvHideTimer = null;
    }
    cvModal.removeAttribute('hidden');
    requestAnimationFrame(function () {
      cvModal.classList.add('is-open');
    });
    cvModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (cvClose) cvClose.focus();
  }

  function closeCvModal() {
    if (!cvModal || !cvModal.classList.contains('is-open')) return;
    cvModal.classList.remove('is-open');
    cvModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (cvHideTimer) clearTimeout(cvHideTimer);
    cvHideTimer = setTimeout(function () {
      cvModal.setAttribute('hidden', '');
      cvHideTimer = null;
    }, 460);
    if (cvTrigger) cvTrigger.focus();
  }

  if (cvTrigger) {
    cvTrigger.addEventListener('click', openCvModal);
  }

  if (cvClose) {
    cvClose.addEventListener('click', closeCvModal);
  }

  if (cvBackdrop) {
    cvBackdrop.addEventListener('click', closeCvModal);
  }


  /* ----------------------------------------------------------
     HERO MOUSE SPOTLIGHT
     Tracks cursor position for the blue grid reveal effect
  ---------------------------------------------------------- */

  const hero = document.querySelector('.hero');

  if (hero) {
    hero.addEventListener('mousemove', function (e) {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--hero-mouse-x', (e.clientX - rect.left) + 'px');
      hero.style.setProperty('--hero-mouse-y', (e.clientY - rect.top) + 'px');
    });

    hero.addEventListener('mouseleave', function () {
      hero.style.setProperty('--hero-mouse-x', '-9999px');
      hero.style.setProperty('--hero-mouse-y', '-9999px');
    });
  }


  /* ----------------------------------------------------------
     DARK MODE TOGGLE
  ---------------------------------------------------------- */

  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;

  function applyTheme(dark) {
    if (dark) {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (_) {}
  }

  // Sync button state with whatever the inline script already applied on load
  if (themeToggle) {
    const isDark = html.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

    themeToggle.addEventListener('click', function () {
      applyTheme(html.getAttribute('data-theme') !== 'dark');
    });
  }

})();
