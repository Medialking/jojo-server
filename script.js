// Функция для переключения разделов
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const section = header.parentElement;
        const isActive = section.classList.contains('active');
        
        // Закрываем все разделы
        document.querySelectorAll('.section').forEach(s => {
            s.classList.remove('active');
        });
        
        // Открываем текущий, если он был закрыт
        if (!isActive) {
            section.classList.add('active');
            
            // Прокручиваем к началу раздела на мобильных устройствах
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    });
});

// Создаем кнопку "Наверх"
const backToTopButton = document.createElement('div');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.title = 'Вернуться наверх';
document.body.appendChild(backToTopButton);

// Показать/скрыть кнопку "Наверх"
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Функция для прокрутки наверх
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Функция для автоматического разворачивания всех разделов при большой высоте экрана
function adjustSectionHeight() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    
    // Если экран достаточно высокий, увеличиваем максимальную высоту контента
    if (windowHeight > 700) {
        sections.forEach(section => {
            const content = section.querySelector('.section-content');
            if (content) {
                content.style.maxHeight = '10000px';
            }
        });
    }
}

// Инициализация при загрузке
window.addEventListener('load', () => {
    const logoText = document.querySelector('.logo-text');
    logoText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        logoText.style.transform = 'scale(1)';
        logoText.style.transition = 'transform 0.5s ease';
    }, 300);
    
    // Настройка высоты разделов
    adjustSectionHeight();
    
    // Для мобильных устройств: автоматическое открытие первого раздела
    if (window.innerWidth <= 768) {
        const firstSection = document.querySelector('.section');
        if (firstSection && !firstSection.classList.contains('active')) {
            firstSection.classList.add('active');
        }
    }
});

// Обновление при изменении размера окна
window.addEventListener('resize', adjustSectionHeight);

// Функция для прокрутки к определенному разделу
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Открываем раздел
        document.querySelectorAll('.section').forEach(s => {
            s.classList.remove('active');
        });
        section.classList.add('active');
        
        // Прокручиваем к нему
        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// Добавляем обработчики для якорных ссылок (если они появятся)
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const sectionId = e.target.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    }
});

// Оптимизация для мобильных: улучшаем прокрутку внутри разделов
if ('ontouchstart' in window) {
    // Для тач-устройств улучшаем прокрутку
    document.querySelectorAll('.section-content').forEach(content => {
        content.style.webkitOverflowScrolling = 'touch';
    });
}
