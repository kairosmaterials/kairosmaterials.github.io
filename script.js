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

// Internationalization - Language Switcher
const translations = {
    en: {
        title: "KairosMaterial - Materials Modeling",
        description: "Interatomic potential models for materials science",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.models": "Models",
        "nav.documentation": "Documentation",
        "nav.github": "GitHub",
        "hero.title": "KairosMaterial",
        "hero.subtitle": "Accurate interatomic potential models for scalable materials modeling",
        "hero.browseModels": "Browse Models",
        "hero.documentation": "Documentation",
        "about.title": "About",
        "about.description": "KairosMaterial provides pre-trained machine learning interatomic potentials for materials science research. Our models enable accurate and efficient large-scale molecular dynamics simulations of materials.",
        "features.fast.title": "Fast & Scalable",
        "features.fast.description": "High-performance models capable of simulating millions of atoms",
        "features.accurate.title": "Accurate",
        "features.accurate.description": "Trained on high-quality quantum chemistry data",
        "features.ready.title": "Ready to Use",
        "features.ready.description": "Pre-trained models ready for immediate use in simulations",
        "models.title": "Available Models",
        "models.intro": "Browse our collection of pre-trained interatomic potential models.",
        "models.comingSoon": "More models coming soon!",
        "models.comingSoonDesc": "Check back later as we continue to add new trained models.",
        "docs.title": "Documentation",
        "docs.gettingStarted.title": "Getting Started",
        "docs.gettingStarted.description": "Learn how to use KairosMaterial models in your simulations.",
        "docs.api.title": "API Reference",
        "docs.api.description": "Detailed documentation for developers and advanced users.",
        "docs.github.title": "GitHub",
        "docs.github.description": "Source code, issue tracking, and contributions.",
        "docs.readMore": "Read more →",
        "docs.visitGitHub": "Visit GitHub →",
        "footer.tagline": "Advancing materials modeling through machine learning",
        "footer.links": "Links",
        "footer.contact": "Contact",
        "footer.issues": "Issues",
        "footer.copyright": "© 2026 KairosMaterial. Built with ❤️ for materials science."
    },
    zh: {
        title: "KairosMaterial - 材料建模",
        description: "材料科学的原子间势模型",
        "nav.home": "首页",
        "nav.about": "关于",
        "nav.models": "模型",
        "nav.documentation": "文档",
        "nav.github": "代码库",
        "hero.title": "KairosMaterial",
        "hero.subtitle": "为可扩展材料建模提供精确的原子间势模型",
        "hero.browseModels": "浏览模型",
        "hero.documentation": "文档",
        "about.title": "关于",
        "about.description": "KairosMaterial 为材料科学研究提供预训练的机器学习原子间势。我们的模型支持精确高效的大规模材料分子动力学模拟。",
        "features.fast.title": "快速可扩展",
        "features.fast.description": "高性能模型，能够模拟数百万原子",
        "features.accurate.title": "精确准确",
        "features.accurate.description": "基于高质量量子化学数据训练",
        "features.ready.title": "开箱即用",
        "features.ready.description": "预训练模型可直接用于模拟",
        "models.title": "可用模型",
        "models.intro": "浏览我们收集的预训练原子间势模型。",
        "models.comingSoon": "更多模型即将推出！",
        "models.comingSoonDesc": "我们会持续添加新的训练模型，敬请关注。",
        "docs.title": "文档",
        "docs.gettingStarted.title": "快速开始",
        "docs.gettingStarted.description": "了解如何在模拟中使用 KairosMaterial 模型。",
        "docs.api.title": "API 参考",
        "docs.api.description": "为开发者和高级用户提供详细文档。",
        "docs.github.title": "GitHub",
        "docs.github.description": "源代码、问题追踪和贡献。",
        "docs.readMore": "阅读更多 →",
        "docs.visitGitHub": "访问 GitHub →",
        "footer.tagline": "通过机器学习推进材料建模",
        "footer.links": "链接",
        "footer.contact": "联系",
        "footer.issues": "问题反馈",
        "footer.copyright": "© 2026 KairosMaterial. 用 ❤️ 为材料科学构建。"
    }
};

// Get current language from localStorage or detect browser language
function getCurrentLanguage() {
    const saved = localStorage.getItem('language');
    if (saved && ['en', 'zh'].includes(saved)) {
        return saved;
    }
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang && browserLang.startsWith('zh') ? 'zh' : 'en';
}

// Update all translated elements on the page
function updateLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'META') {
                el.setAttribute('content', translations[lang][key]);
            } else if (el.tagName === 'TITLE') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// Initialize language after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = getCurrentLanguage();
    updateLanguage(currentLang);

    // Add click handler to language toggle button
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            updateLanguage(currentLang);
        });
    }
});
