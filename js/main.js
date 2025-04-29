/*
 * UI Portfolio - Personal Portfolio Website
 * Author: John Watson
 * Version: 1.0
 */

(function() {
    'use strict';
    
    // Preloader
    window.addEventListener('load', function() {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(function() {
          preloader.style.display = 'none';
        }, 500);
      }
    });
    
    // Scroll to top button
    const backToTop = document.querySelector('.back-to-top');
    
    if (backToTop) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
          backToTop.classList.add('active');
        } else {
          backToTop.classList.remove('active');
        }
      });
      
      backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
    
    // Header scroll class
    const header = document.querySelector('#header');
    
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      });
    }
    
    // Mobile nav toggle
    const navToggle = document.querySelector('.navbar-toggler');
    const mobileNav = document.querySelector('#navbarNav');
    
    if (navToggle && mobileNav) {
      navToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
      });
    }
    
    // Nav menu active state on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    function setActiveLink() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', setActiveLink);
    
    // Animation on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.animate');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 50) {
          element.classList.add('animated');
        }
      });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    let counted = false;
    
    function startCounter() {
      if (counted) return;
      
      const counterSection = document.querySelector('#stats');
      if (!counterSection) return;
      
      const sectionTop = counterSection.offsetTop;
      const windowHeight = window.innerHeight;
      
      if (window.scrollY > sectionTop - windowHeight + 100) {
        counters.forEach(counter => {
          const target = +counter.textContent;
          let count = 0;
          const increment = target / 100;
          
          const updateCount = () => {
            if (count < target) {
              count += increment;
              counter.textContent = Math.ceil(count);
              setTimeout(updateCount, 10);
            } else {
              counter.textContent = target;
            }
          };
          
          updateCount();
        });
        
        counted = true;
      }
    }
    
    window.addEventListener('scroll', startCounter);
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
    
  })();