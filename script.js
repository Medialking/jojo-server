// Функция для переключения разделов - ИСПРАВЛЕННАЯ ВЕРСИЯ
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', function() {
        const section = this.parentElement;
        
        // Переключаем класс active для текущего раздела
        section.classList.toggle('active');
        
        // Прокручиваем к началу раздела на мобильных устройствах при открытии
        if (window.innerWidth <= 768 && section.classList.contains('active')) {
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = section.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    });
});

// Создаем кнопку "Наверх" если её еще нет
if (!document.querySelector('.back-to-top')) {
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.title = 'Вернуться наверх';
    document.body.appendChild(backToTopButton);
}

const backToTopButton = document.querySelector('.back-to-top');

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

// Инициализация при загрузке
window.addEventListener('load', () => {
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        logoText.style.transform = 'scale(1.1)';
        setTimeout(() => {
            logoText.style.transform = 'scale(1)';
            logoText.style.transition = 'transform 0.5s ease';
        }, 300);
    }
    
    // На мобильных устройствах открываем только первый раздел
    if (window.innerWidth <= 768) {
        // Закрываем все разделы
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Открываем первый раздел
        const firstSection = document.querySelector('.section');
        if (firstSection) {
            firstSection.classList.add('active');
        }
    }
});

// Функция для прокрутки к определенному разделу
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Открываем раздел если он закрыт
        if (!section.classList.contains('active')) {
            section.classList.add('active');
        }
        
        // Прокручиваем к нему
        setTimeout(() => {
            const headerOffset = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }, 100);
    }
}

// Оптимизация для мобильных: улучшаем прокрутку внутри разделов
if ('ontouchstart' in window) {
    // Для тач-устройств улучшаем прокрутку
    document.querySelectorAll('.section-content').forEach(content => {
        content.style.webkitOverflowScrolling = 'touch';
    });
}

// Функция для закрытия всех разделов кроме текущего
function closeOtherSections(currentSection) {
    document.querySelectorAll('.section').forEach(section => {
        if (section !== currentSection && section.classList.contains('active')) {
            section.classList.remove('active');
        }
    });
}

// Добавляем обработчик для закрытия других разделов (опционально)
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', function(e) {
        // Если зажат Ctrl или Shift, то не закрываем другие разделы
        if (!e.ctrlKey && !e.shiftKey) {
            // Раскомментируйте строку ниже, если хотите, чтобы при открытии одного раздела другие закрывались
            // closeOtherSections(this.parentElement);
        }
    });
});
