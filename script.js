// ===========================
// FisioWebs.com - JavaScript
// ===========================

// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const backToTopBtn = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const fadeElements = document.querySelectorAll('.fade-in');

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================
mobileMenuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    observer.observe(element);
});

// ===========================
// BACK TO TOP BUTTON
// ===========================
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn?.classList.add('visible');
    } else {
        backToTopBtn?.classList.remove('visible');
    }
});

backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// FORM HANDLING
// ===========================
// Formulario ahora usa Typeform embed - Código antiguo comentado
/*
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    const requiredFields = ['nombre', 'especialidad', 'ubicacion', 'email', 'tipo-web'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = contactForm.querySelector(`[name="${field}"]`);
        if (!data[field] || data[field].trim() === '') {
            input.style.borderColor = '#EF4444';
            isValid = false;
        } else {
            input.style.borderColor = '#ECEEEF';
        }
    });
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = contactForm.querySelector('[name="email"]');
    if (!emailRegex.test(data.email)) {
        emailInput.style.borderColor = '#EF4444';
        isValid = false;
    }
    
    if (!isValid) {
        showNotification('Por favor, completa todos los campos obligatorios correctamente.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Log form data to console (for development)
        console.log('Form Data:', data);
        
        // Show success message
        showNotification('¡Gracias por tu consulta! Te contactaremos pronto.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Optional: Send data to webhook or email service
        // await fetch('YOUR_WEBHOOK_URL', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        
    } catch (error) {
        console.error('Error:', error);
        showNotification('Hubo un error al enviar el formulario. Intenta nuevamente.', 'error');
    } finally {
        // Restore button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});
*/

// ===========================
// NOTIFICATION SYSTEM
// ===========================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#26C281' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Inter', sans-serif;
        max-width: 400px;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-content i {
        font-size: 1.25rem;
    }
`;
document.head.appendChild(style);

// ===========================
// LAZY LOADING IMAGES
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// PERFORMANCE: Debounce scroll events
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// HERO SLIDESHOW
// ===========================
// Slideshow deshabilitado - Solo gradiente de fondo
/*
let currentSlide = 0;
const heroImages = document.querySelectorAll('.hero-image');
const slideInterval = 6000; // 6 segundos

function changeHeroSlide() {
    if (heroImages.length === 0) return;
    
    // Remover active de la imagen actual
    heroImages[currentSlide].classList.remove('active');
    
    // Incrementar contador
    currentSlide = (currentSlide + 1) % heroImages.length;
    
    // Agregar active a la nueva imagen
    heroImages[currentSlide].classList.add('active');
}

// Iniciar slideshow automático
let heroSlideshow;
if (heroImages.length > 1) {
    heroSlideshow = setInterval(changeHeroSlide, slideInterval);
}

// Pausar slideshow cuando el usuario hace hover (opcional)
const heroSection = document.querySelector('.hero');
heroSection?.addEventListener('mouseenter', () => {
    if (heroSlideshow) clearInterval(heroSlideshow);
});

heroSection?.addEventListener('mouseleave', () => {
    if (heroImages.length > 1) {
        heroSlideshow = setInterval(changeHeroSlide, slideInterval);
    }
});
*/

// ===========================
// MOCKUP ANIMATIONS
// ===========================
// Animación especial para mockups al hacer scroll
const mockupObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease forwards';
            mockupObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

// Observar todos los mockups
document.querySelectorAll('.mockup-hero, .mockup-responsive, .mockup-portfolio-laptop, .mockup-portfolio-mobile, .mockup-cta').forEach(mockup => {
    mockupObserver.observe(mockup);
});

// ===========================
// MOCKUP FALLBACK
// ===========================
// Detectar si los mockups reales existen, si no, usar placeholders
document.querySelectorAll('.mockup-hero, .mockup-portfolio').forEach(img => {
    if (img.src.includes('mockup-laptop')) {
        img.onerror = function() {
            console.log('⚠️ mockup-laptop.png no encontrado');
            this.style.display = 'none';
        };
    }
});

document.querySelectorAll('.mockup-responsive, .mockup-portfolio').forEach(img => {
    if (img.src.includes('mockup-mobile')) {
        img.onerror = function() {
            console.log('⚠️ mockup-mobile.png no encontrado');
            this.style.display = 'none';
        };
    }
});

// ===========================
// LEGAL SECTIONS TOGGLE
// ===========================
// Mostrar secciones legales cuando se hace click en sus enlaces
const legalLinks = document.querySelectorAll('a[href="#terminos"], a[href="#privacidad"]');
legalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            // Auto-ocultar después de 10 segundos
            setTimeout(() => {
                targetSection.style.display = 'none';
            }, 10000);
        }
    });
});

// ===========================
// DYNAMIC PRICING CALCULATOR
// ===========================
// Base prices (includes 1 year domain/hosting)
const basePrices = {
    starter: 149,    // Landing Starter
    complete: 299,   // Sitio Completo  
    premium: 499     // Sitio + Turnos Online
};

// Cost per additional year
const additionalYearCost = 15;

function updatePrices() {
    const selectedYears = parseInt(document.getElementById('yearsSelect').value);
    const additionalYears = selectedYears - 1;
    const extraCost = additionalYears * additionalYearCost;
    
    // Update each plan price
    Object.keys(basePrices).forEach(plan => {
        const priceElement = document.getElementById(`price-${plan}`);
        const additionalElement = document.getElementById(`additional-${plan}`);
        
        if (priceElement && additionalElement) {
            const finalPrice = basePrices[plan] + extraCost;
            
            // Animate price change
            priceElement.style.opacity = '0.5';
            setTimeout(() => {
                priceElement.textContent = finalPrice;
                priceElement.style.opacity = '1';
            }, 100);
            
            // Update additional years text
            if (additionalYears > 0) {
                additionalElement.textContent = `+ ${additionalYears} año${additionalYears > 1 ? 's' : ''} adicional${additionalYears > 1 ? 'es' : ''}`;
            } else {
                additionalElement.textContent = '';
            }
        }
    });
}

// Initialize pricing calculator
function initPricingCalculator() {
    const yearsSelect = document.getElementById('yearsSelect');
    if (yearsSelect) {
        yearsSelect.addEventListener('change', updatePrices);
        // Set initial state
        updatePrices();
    }
}

// ===========================
// CONTACT FORM HANDLER
// ===========================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            try {
                const formData = new FormData(form);
                
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Show success message
                    successMessage.style.display = 'block';
                    form.reset();
                    
                    // Scroll to success message
                    successMessage.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
                    // Hide success message after 10 seconds
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 10000);
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor, intentá nuevamente.');
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// ===========================
// INITIALIZE ON LOAD
// ===========================
window.addEventListener('DOMContentLoaded', () => {
    console.log('FisioWebs.com loaded successfully! 🚀');
    console.log('Hero con fondo verde fijo - sin slideshow');
    console.log('Mockups con rutas: pcmockup.png y movilmockup.png');
    console.log('Dynamic pricing calculator initialized');
    console.log('Contact form handler initialized');
    
    // Initialize pricing calculator
    initPricingCalculator();
    
    // Initialize contact form
    initContactForm();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// PARALLAX EFFECT (Optional)
// ===========================
window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    const heroSlideshow = document.querySelector('.hero-slideshow');
    
    if (heroSlideshow && scrolled < window.innerHeight) {
        heroSlideshow.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10));

// ===========================
// WHATSAPP FLOAT BUTTON
// ===========================
const whatsappFloat = document.querySelector('.whatsapp-float');

// WhatsApp configurado: +598 091511615
// Instagram configurado: @fisio_a.m

// Add click tracking (optional)
whatsappFloat?.addEventListener('click', () => {
    console.log('WhatsApp button clicked');
    // You can add analytics tracking here
});

// ===========================
// FORM FIELD ANIMATIONS
// ===========================
// Deshabilitado - Ahora se usa Typeform embed
/*
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.classList.remove('focused');
        }
    });
});
*/

// ===========================
// PORTFOLIO CARD TILT EFFECT (Optional)
// ===========================
const portfolioCards = document.querySelectorAll('.portfolio-card, .benefit-card, .plan-card');

portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

console.log('✅ All features initialized successfully!');
