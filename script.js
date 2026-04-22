// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth scroll for navigation links
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

// Example: Add a model card programmatically
// Uncomment and modify this to add your models
/*
function addModel(model) {
    const grid = document.getElementById('model-grid');
    const card = document.createElement('div');
    card.className = 'model-card';
    card.innerHTML = `
        <h3>${model.name}</h3>
        <p class="description">${model.description}</p>
        <div class="tags">
            ${model.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${model.downloadUrl}" class="btn btn-primary">Download</a>
    `;
    // Remove "coming soon" if it exists
    const comingSoon = grid.querySelector('.coming-soon');
    if (comingSoon) {
        comingSoon.remove();
    }
    grid.appendChild(card);
}

// Example usage:
// addModel({
//     name: 'Cu-Zr Alloy',
//     description: 'Interatomic potential for Copper-Zirconium metallic glasses',
//     tags: ['metallic glass', 'CuZr', 'alloy'],
//     downloadUrl: 'https://github.com/...'
// });
*/
