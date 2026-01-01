// Функция для переключения разделов
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const section = header.parentElement;
        section.classList.toggle('active');
    });
});

// Небольшая дополнительная анимация для логотипа при загрузке
window.addEventListener('load', () => {
    const logoText = document.querySelector('.logo-text');
    logoText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        logoText.style.transform = 'scale(1)';
        logoText.style.transition = 'transform 0.5s ease';
    }, 300);
    
    // Автоматическое разворачивание всех правил при загрузке страницы
    // Можно раскомментировать, если нужно
    // document.getElementById('server-rules').classList.add('active');
});

// Функция для прокрутки к разделу (если понадобится)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Открываем раздел, если он закрыт
        if (!section.classList.contains('active')) {
            section.classList.add('active');
        }
    }
}

// Добавляем возможность закрывать разделы по клику вне контента
document.addEventListener('click', (e) => {
    // Эта функция может быть использована для дополнительной функциональности
    // Например, закрытие всех разделов при клике вне их области
});

// Добавляем подсветку текущего раздела при прокрутке
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            section.style.borderColor = 'rgba(157, 78, 221, 0.6)';
            section.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4)';
        } else {
            section.style.borderColor = 'rgba(157, 78, 221, 0.3)';
            section.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        }
    });
});
