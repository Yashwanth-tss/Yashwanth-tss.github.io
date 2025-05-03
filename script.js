// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Typed.js initialization
const typed = new Typed('#typed-text', {
    strings: [
        'DevOps Engineer',
        'Cloud Enthusiast'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Mobile menu toggle
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Active link highlighting
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add('active');
        } else {
            document.querySelector(`.nav__link[href*=${sectionId}]`).classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

function containsScript(input) {
  // Block <script> tags and inline event handlers, but allow ?
  return /<script.*?>.*?<\/script>/gi.test(input) || /<.*?on\w+=.*?>/gi.test(input);
}

// Form validation
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (containsScript(name) || containsScript(email) || containsScript(message)) {
            alert('Scripts or suspicious content are not allowed in the form fields.');
            return;
        }
        
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
            // Clear form fields
            contactForm.reset();
            // Redirect after 3 seconds
            setTimeout(() => {
                window.location.href = '/#contact';
                contactForm.style.display = 'block';
                thankYouMessage.style.display = 'none';
            }, 3000);
        } else {
            alert('There was a problem submitting your form. Please try again.');
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Skills carousel scroll
const skillsGrid = document.querySelector('.skills__grid');
const leftArrow = document.querySelector('.skills-arrow.left');
const rightArrow = document.querySelector('.skills-arrow.right');

function scrollSkills(direction) {
    if (!skillsGrid) return;
    const card = skillsGrid.querySelector('.skills__category');
    if (!card) return;
    const cardWidth = card.offsetWidth + 32; // 32px = 2rem gap
    skillsGrid.scrollBy({
        left: direction === 'right' ? cardWidth : -cardWidth,
        behavior: 'smooth'
    });
}
if (leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => scrollSkills('left'));
    rightArrow.addEventListener('click', () => scrollSkills('right'));
}

// Experience Stepper Interactivity
const steps = document.querySelectorAll('.experience-stepper .step');
const cards = document.querySelectorAll('.experience-stepper .stepper-card');
steps.forEach(step => {
    step.addEventListener('click', () => {
        // Remove active from all
        steps.forEach(s => s.classList.remove('active'));
        cards.forEach(c => c.classList.remove('active'));
        // Add active to clicked
        step.classList.add('active');
        const idx = step.getAttribute('data-step');
        const card = document.querySelector(`.stepper-card[data-step="${idx}"]`);
        if(card) card.classList.add('active');
    });
});