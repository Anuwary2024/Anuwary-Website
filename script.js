
// Hamburger Menu Toggle
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Background Image Rotation for Home
let currentHomeImageIndex = 0;
const homeImages = document.querySelectorAll('#homeGallery .bg-image');
const totalHomeImages = homeImages.length;

function rotateHomeBackground() {
    if (totalHomeImages > 0) {
        // Remove active class from current image
        homeImages[currentHomeImageIndex].classList.remove('active');
        
        // Move to next image
        currentHomeImageIndex = (currentHomeImageIndex + 1) % totalHomeImages;
        
        // Add active class to new image
        homeImages[currentHomeImageIndex].classList.add('active');
    }
}

// Background Image Rotation for About Me
let currentAboutImageIndex = 0;
const aboutImages = document.querySelectorAll('#aboutGallery .bg-image');
const totalAboutImages = aboutImages.length;

function rotateAboutBackground() {
    if (totalAboutImages > 0) {
        // Remove active class from current image
        aboutImages[currentAboutImageIndex].classList.remove('active');
        
        // Move to next image
        currentAboutImageIndex = (currentAboutImageIndex + 1) % totalAboutImages;
        
        // Add active class to new image
        aboutImages[currentAboutImageIndex].classList.add('active');
    }
}

// Navigation Management
let currentSection = 'home';
let homeInterval;

function showSection(sectionName) {
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const workSection = document.getElementById('work');
    const contactSection = document.getElementById('contact');
    const homeGallery = document.getElementById('homeGallery');
    const aboutGallery = document.getElementById('aboutGallery');
    
    // Clear existing intervals
    if (homeInterval) clearInterval(homeInterval);
    
    // Hide all sections first
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    workSection.style.display = 'none';
    contactSection.style.display = 'none';
    homeGallery.style.display = 'none';
    aboutGallery.style.display = 'none';
    
    if (sectionName === 'home') {
        // Show Home Section
        homeSection.style.display = 'block';
        homeGallery.style.display = 'block';
        
        // Start home background rotation
        homeInterval = setInterval(rotateHomeBackground, 3000);
        currentSection = 'home';
        
    } else if (sectionName === 'about') {
        // Show About Section
        aboutSection.style.display = 'block';
        currentSection = 'about';
        
    } else if (sectionName === 'work') {
        // Show Work Section
        workSection.style.display = 'block';
        currentSection = 'work';
        
    } else if (sectionName === 'contact') {
        // Show Contact Section
        contactSection.style.display = 'block';
        currentSection = 'contact';
    }
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create email content
            const subject = `New message from ${name} via your website`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            
            // Open default email client with pre-filled content
            const mailtoLink = `mailto:mwitikeanuwary@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Show confirmation and open email client
            if (confirm(`Thank you ${name}! I'll open your email client to send the message to mwitikeanuwary@gmail.com. Click OK to continue.`)) {
                window.open(mailtoLink);
                contactForm.reset();
            }
        });
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/Hide Scroll to Top Arrow
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Initialize with Home section
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.getElementById('navMenu');
    
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Navigation link handlers
document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const hamburger = document.querySelector('.hamburger-menu');
        const navMenu = document.getElementById('navMenu');
        
        // Close menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Get the target section
        const href = this.getAttribute('href');
        const sectionName = href.substring(1); // Remove the #
        
        // Show the appropriate section
        if (sectionName === 'home' || sectionName === 'about' || sectionName === 'work' || sectionName === 'contact') {
            showSection(sectionName);
        }
    });
});

// Add smooth scroll for navigation links (for future sections)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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