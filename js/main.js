/**
 * Trafalgar Landing Page - Main Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (mobileMenu && mobileMenuBackdrop) {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenuBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileMenuBackdrop) {
      mobileMenu.classList.add('translate-x-full');
      mobileMenuBackdrop.classList.add('opacity-0', 'pointer-events-none');
      document.body.classList.remove('overflow-hidden');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- Testimonial Slider ---
  const testimonials = [
    {
      name: 'Edward Newgate',
      role: 'Founder Circle',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      quote: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”'
    },
    {
      name: 'Dr. Sarah Jenkins',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1594824813589-323b6bfa6b2c?auto=format&fit=crop&w=200&q=80',
      quote: '“Trafalgar has completely transformed how our clinic connects with patients. The digital consultation tools are intuitive, secure, and save countless hours for our healthcare team.”'
    },
    {
      name: 'Alexander Mitchell',
      role: 'HealthTech Advisor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: '“The ease of tracking medical records and prescription refills through Trafalgar is unparalleled. It truly sets the modern benchmark for accessible telemedicine.”'
    },
    {
      name: 'Elena Rostova',
      role: 'Patient Community Lead',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: '“Having round-the-clock emergency access and trusted doctor consultations right from my smartphone gave my entire family peace of mind during difficult times.”'
    }
  ];

  let currentIndex = 0;
  const authorImg = document.getElementById('testimonial-avatar');
  const authorName = document.getElementById('testimonial-name');
  const authorRole = document.getElementById('testimonial-role');
  const quoteText = document.getElementById('testimonial-quote');
  const dotsContainer = document.getElementById('testimonial-dots');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const testimonialContainer = document.getElementById('testimonial-card-content');

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    testimonials.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `w-2.5 h-2.5 rounded-full transition-all duration-300 ${
        idx === currentIndex ? 'bg-[#458FF6] w-6' : 'bg-[#458FF6]/30 hover:bg-[#458FF6]/60'
      }`;
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = idx;
        updateTestimonial();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateTestimonial() {
    if (!authorName || !authorRole || !quoteText || !authorImg) return;

    // Fade animation
    if (testimonialContainer) {
      testimonialContainer.classList.add('opacity-0', 'translate-y-2');
    }

    setTimeout(() => {
      const item = testimonials[currentIndex];
      authorImg.src = item.image;
      authorImg.alt = item.name;
      authorName.textContent = item.name;
      authorRole.textContent = item.role;
      quoteText.textContent = item.quote;

      // Update dots
      if (dotsContainer) {
        const dots = dotsContainer.children;
        for (let i = 0; i < dots.length; i++) {
          if (i === currentIndex) {
            dots[i].className = 'w-6 h-2.5 rounded-full bg-[#458FF6] transition-all duration-300';
          } else {
            dots[i].className = 'w-2.5 h-2.5 rounded-full bg-[#458FF6]/30 hover:bg-[#458FF6]/60 transition-all duration-300';
          }
        }
      }

      if (testimonialContainer) {
        testimonialContainer.classList.remove('opacity-0', 'translate-y-2');
      }
    }, 200);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial();
    });
  }

  // Auto slide testimonials every 6 seconds with hover pause
  let autoSlideTimer = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
  }, 6000);

  const testimonialSection = document.getElementById('testimonials');
  if (testimonialSection) {
    testimonialSection.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
    testimonialSection.addEventListener('mouseleave', () => {
      clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
      }, 6000);
    });
  }

  // --- Header Scroll Effect ---
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
      }
    }
  });
});
