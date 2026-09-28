// Mobile Hamburger Menu Toggle Functionality
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Page navigation handler
function switchPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    navLinks.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });

    // Automatically close mobile menu after selection
    navMenu.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Phone reveal function
function revealPhone() {
    const container = document.getElementById('phone-container');
    const btn = document.getElementById('reveal-btn');
    container.innerHTML = '<span style="color: var(--accent-hover); font-weight: 600;">8790422141</span>';
    btn.style.display = 'none';
}