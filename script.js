document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', function() {
        const section = this.parentElement;
        
        section.classList.toggle('active');
        
        if (section.classList.contains('active')) {
            setTimeout(() => {
                const headerOffset = 20;
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 300);
        }
    });
});

if (!document.querySelector('.back-to-top')) {
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.title = 'Вернуться наверх';
    document.body.appendChild(backToTopButton);
}

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('load', () => {
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.style.transform = 'scale(1.1)';
        setTimeout(() => {
            logoText.style.transform = 'scale(1)';
            logoText.style.transition = 'transform 0.5s ease';
        }, 300);
    }
    
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        const firstSection = document.querySelector('.section');
        if (firstSection) {
            firstSection.classList.add('active');
        }
    }
});

if ('ontouchstart' in window) {
    document.querySelectorAll('.section-content').forEach(content => {
        content.style.webkitOverflowScrolling = 'touch';
    });
}
