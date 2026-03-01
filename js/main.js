/* ---------- NAVBAR SCROLL ---------- */
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }, { passive: true });

        /* ---------- MOBILE MENU ---------- */
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const menuIcon = document.getElementById('menuIcon');
        let menuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            mobileNav.classList.toggle('active', menuOpen);
            menuIcon.className = menuOpen ? 'fas fa-times' : 'fas fa-bars';
        });

        function closeMobileNav() {
            menuOpen = false;
            mobileNav.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
        }

        /* ---------- LIVE CLOCK ---------- */
        function updateClock() {
            const now = new Date();
            const h = now.getHours();
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            const ampm = h >= 12 ? 'PM' : 'AM';
            const h12 = h % 12 || 12;
            const time = `${String(h12).padStart(2, '0')}:${m}:${s} ${ampm}`;
            document.getElementById('locationClock').textContent = `ADDIS ABABA, ${time}`;
        }

        updateClock();
        setInterval(updateClock, 1000);

        /* ---------- SCROLL REVEAL ---------- */
        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => revealObserver.observe(el));

        /* ---------- CURSOR GLOW (Desktop) ---------- */
        const cursorGlow = document.getElementById('cursorGlow');

        if (window.matchMedia('(hover: hover)').matches && cursorGlow) {
            document.addEventListener('mousemove', (e) => {
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
                cursorGlow.classList.add('active');
            });

            document.addEventListener('mouseleave', () => {
                cursorGlow.classList.remove('active');
            });
        }
    

        (function() {
            "use strict";
            
            // Mobile menu toggle
            const mobileBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');

            if (mobileBtn && mobileNav) {
                mobileBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
                });

                // Close when link clicked
                mobileNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        mobileNav.style.display = 'none';
                    });
                });

                // Hide on resize
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 900) {
                        mobileNav.style.display = 'none';
                    }
                });
            }

            // Active state for current page (contact.html)
            const currentPage = 'contact.html';
            document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes(currentPage)) {
                    link.classList.add('active');
                    if (link.closest('.mobile-nav')) {
                        link.classList.add('active-mobile');
                    }
                }
            });
        })();
    

        (function() {
            "use strict";
            
            // Mobile menu toggle
            const mobileBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');

            if (mobileBtn && mobileNav) {
                mobileBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
                });

                // Close when link clicked
                mobileNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        mobileNav.style.display = 'none';
                    });
                });

                // Hide on resize
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 900) {
                        mobileNav.style.display = 'none';
                    }
                });
            }

            // Set active state for mobile based on current page (works with file names)
            const currentPage = 'service.html';
            document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes(currentPage)) {
                    link.classList.add('active');
                    if (link.closest('.mobile-nav')) {
                        link.classList.add('active-mobile');
                    }
                }
            });
        })();
    

        (function() {
            "use strict";
            
            // Mobile menu toggle
            const mobileBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');

            if (mobileBtn && mobileNav) {
                mobileBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
                });

                // Close when link clicked
                mobileNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        mobileNav.style.display = 'none';
                    });
                });

                // Hide on resize
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 900) {
                        mobileNav.style.display = 'none';
                    }
                });
            }

            // Active state for current page (team.html)
            const currentPage = 'team.html';
            document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes(currentPage)) {
                    link.classList.add('active');
                    if (link.closest('.mobile-nav')) {
                        link.classList.add('active-mobile');
                    }
                }
            });
        })();
    

        (function() {
            "use strict";
            
            // Mobile menu toggle
            const mobileBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');

            if (mobileBtn && mobileNav) {
                mobileBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
                });

                // Close when link clicked
                mobileNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        mobileNav.style.display = 'none';
                    });
                });

                // Hide on resize
                window.addEventListener('resize', function() {
                    if (window.innerWidth > 900) {
                        mobileNav.style.display = 'none';
                    }
                });
            }

            // Active state for current page (work.html)
            const currentPage = 'work.html';
            document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.includes(currentPage)) {
                    link.classList.add('active');
                    if (link.closest('.mobile-nav')) {
                        link.classList.add('active-mobile');
                    }
                }
            });
        })();
    
/* ---------- CONTACT FORM HANDLING ---------- */
        const contactForm = document.getElementById('contactForm');
        const formSuccess = document.getElementById('formSuccess');

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();

                // Get form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    message: document.getElementById('message').value
                };

                // Here you would typically send the data to your backend
                console.log('Form submitted:', formData);

                // Show success message
                contactForm.style.display = 'none';
                formSuccess.classList.remove('hidden');

                // Optional: Reset form after 5 seconds
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.style.display = 'flex';
                    formSuccess.classList.add('hidden');
                }, 5000);
            });
        }

        /* Update mobile nav to include contact section */
        function closeMobileNav() {
            menuOpen = false;
            mobileNav.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
        }

        // Add smooth scroll for contact section
        document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        /* ---------- TEAM SECTION INTERACTIONS ---------- */
        // Optional: Add hover effect for social icons
        const teamCards = document.querySelectorAll('.team-card');

        teamCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // You can add any additional hover effects here
            });

            card.addEventListener('mouseleave', () => {
                // Reset any effects here
            });
        });/* ---------- SERVICES CAROUSEL WITH BUTTONS ---------- */
        class ServicesCarousel {
            constructor() {
                this.container = document.getElementById('cardsContainer');
                this.track = document.getElementById('cardsTrack');
                this.prevBtn = document.getElementById('navPrev');
                this.nextBtn = document.getElementById('navNext');
                this.dots = document.querySelectorAll('.dot');
                this.cards = document.querySelectorAll('.service-card-wrapper');

                this.currentIndex = 0;
                this.cardWidth = 0;
                this.gap = 40; // matches gap in CSS
                this.visibleCards = this.getVisibleCards();

                if (!this.container || !this.track) return;

                this.init();
            }

            getVisibleCards() {
                if (window.innerWidth >= 1024) return 3;
                if (window.innerWidth >= 768) return 2;
                return 1;
            }

            init() {
                this.updateCardWidth();
                this.updateButtons();
                this.setupEventListeners();
                this.setupDots();
            }

            updateCardWidth() {
                // Get the width of first card including wrapper padding
                if (this.cards.length > 0) {
                    const firstCard = this.cards[0];
                    this.cardWidth = firstCard.offsetWidth;
                }
            }

            setupEventListeners() {
                // Next button
                this.nextBtn?.addEventListener('click', () => {
                    this.scrollToIndex(this.currentIndex + 1);
                });

                // Previous button
                this.prevBtn?.addEventListener('click', () => {
                    this.scrollToIndex(this.currentIndex - 1);
                });

                // Scroll event to update dots and buttons
                this.container.addEventListener('scroll', () => {
                    this.updateCurrentIndex();
                    this.updateDots();
                    this.updateButtons();
                });

                // Window resize
                window.addEventListener('resize', () => {
                    this.visibleCards = this.getVisibleCards();
                    this.updateCardWidth();
                    this.updateButtons();
                });

                // Touch end for mobile (to update UI)
                this.container.addEventListener('touchend', () => {
                    this.updateCurrentIndex();
                    this.updateDots();
                    this.updateButtons();
                });
            }

            setupDots() {
                this.dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.scrollToIndex(index);
                    });
                });
            }

            scrollToIndex(index) {
                const maxIndex = this.cards.length - this.visibleCards;

                // Clamp index between 0 and maxIndex
                index = Math.max(0, Math.min(index, maxIndex));

                if (index === this.currentIndex) return;

                this.currentIndex = index;

                // Calculate scroll position
                const scrollPosition = index * (this.cardWidth + this.gap);

                // Smooth scroll
                this.container.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });

                // Update UI
                this.updateDots();
                this.updateButtons();
            }

            updateCurrentIndex() {
                const scrollLeft = this.container.scrollLeft;
                const approximateIndex = Math.round(scrollLeft / (this.cardWidth + this.gap));

                // Clamp between 0 and max
                const maxIndex = this.cards.length - this.visibleCards;
                this.currentIndex = Math.max(0, Math.min(approximateIndex, maxIndex));
            }

            updateDots() {
                this.dots.forEach((dot, index) => {
                    if (index === this.currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }

            updateButtons() {
                if (!this.prevBtn || !this.nextBtn) return;

                const maxIndex = this.cards.length - this.visibleCards;

                // Disable prev button at start
                if (this.currentIndex <= 0) {
                    this.prevBtn.disabled = true;
                } else {
                    this.prevBtn.disabled = false;
                }

                // Disable next button at end
                if (this.currentIndex >= maxIndex) {
                    this.nextBtn.disabled = true;
                } else {
                    this.nextBtn.disabled = false;
                }
            }
        }

        // Initialize carousel
        document.addEventListener('DOMContentLoaded', () => {
            new ServicesCarousel();
        });


    