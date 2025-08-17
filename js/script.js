document.addEventListener('DOMContentLoaded', function() {
    // 3D Parallax Effect on Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = hero.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            // Apply 3D tilt effect
            hero.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
            
            // Parallax effect on text elements
            const title = hero.querySelector('h1');
            const subtitle = hero.querySelector('p');
            const button = hero.querySelector('.cta-button');
            
            if (title) title.style.transform = `translateZ(50px) translateX(${x * 20}px) translateY(${y * 20}px)`;
            if (subtitle) subtitle.style.transform = `translateZ(40px) translateX(${x * 15}px) translateY(${y * 15}px)`;
            if (button) button.style.transform = `translateZ(30px) translateX(${x * 10}px) translateY(${y * 10}px)`;
        });
        
        // Reset position when mouse leaves
        hero.addEventListener('mouseleave', () => {
            hero.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            const title = hero.querySelector('h1');
            const subtitle = hero.querySelector('p');
            const button = hero.querySelector('.cta-button');
            
            if (title) title.style.transform = 'translateZ(50px)';
            if (subtitle) subtitle.style.transform = 'translateZ(40px)';
            if (button) button.style.transform = 'translateZ(30px)';
        });
    }
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('active');
        // Animate links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Hamburger animation
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links with 3D effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Navbar scroll effect with 3D transform
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
            
            // 3D tilt effect on scroll
            const scrollDiff = currentScroll - lastScroll;
            const tilt = Math.min(Math.max(scrollDiff * 0.2, -10), 10); // Limit tilt angle
            navbar.style.transform = `perspective(1000px) rotateX(${tilt}deg)`;
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.transform = 'perspective(1000px) rotateX(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Reset navbar transform after scrolling stops
    let scrollEndTimer;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => {
            navbar.style.transition = 'transform 0.5s ease-out';
            navbar.style.transform = 'perspective(1000px) rotateX(0)';
            
            // Remove transition after animation completes
            setTimeout(() => {
                navbar.style.transition = '';
            }, 500);
        }, 100);
    });

    // Discord redirect handling
    const discordLinks = document.querySelectorAll('a[href*="discord"]');
    discordLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optional: Add analytics or tracking here
            console.log('Discord link clicked');
            // The link will naturally navigate to the href
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .mission-vision, .contact-container');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
        });
        
        const contactContainer = document.querySelector('.contact-container');
        if (contactContainer) {
            contactContainer.style.opacity = '0';
            contactContainer.style.transform = 'translateY(30px)';
            contactContainer.style.transition = 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s';
        }
        
        // Initial check in case elements are already in view
        animateOnScroll();
    });

    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);

    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 3D Card Hover Effect
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.03)`;
            
            // Add light reflection effect
            const glowX = (x / rect.width) * 100;
            const glowY = (y / rect.height) * 100;
            card.style.setProperty('--glow-x', `${glowX}%`);
            card.style.setProperty('--glow-y', `${glowY}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            card.style.setProperty('--glow-opacity', '0');
        });
    });
    
    // 3D Button Hover Effect
    const buttons = document.querySelectorAll('.cta-button, .discord-button');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            button.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
            button.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 20px rgba(0, 0, 0, 0.3)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add loading animation for buttons with loading state
    const buttons = document.querySelectorAll('button[type="submit"]');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('loading')) return;
            
            const originalText = this.innerHTML;
            const loadingText = this.getAttribute('data-loading') || 'Sending...';
            
            this.classList.add('loading');
            this.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingText}`;
            
            // Simulate form submission (remove in production)
            setTimeout(() => {
                this.classList.remove('loading');
                this.innerHTML = originalText;
            }, 2000);
        });
    });

    // Add animation for social media icons
    const socialIcons = document.querySelectorAll('.social-links a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add animation for cards on hover
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
            this.style.boxShadow = `${-angleY * 2}px ${angleX * 2}px 20px rgba(0, 0, 0, 0.3)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .loading {
        position: relative;
        pointer-events: none;
        opacity: 0.8;
    }
    
    .loading::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 2px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }
    
    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
        }
        to {
            transform: rotate(1turn);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

document.head.appendChild(style);
