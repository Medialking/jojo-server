/* -------------------------------------------------
   1. Переключатель светлой/тёмной темы
   ------------------------------------------------- */
const themeBtn = document.querySelector('.theme-toggle');
const htmlEl   = document.documentElement;

// Читаем сохранённый вариант из localStorage
const savedTheme = localStorage.getItem('jojoTheme');
if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Обработчик клика
themeBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', current);
    localStorage.setItem('jojoTheme', current);
    themeBtn.textContent = current === 'dark' ? '☀️' : '🌙';
});

/* -------------------------------------------------
   2. (Опционально) Добавить плавный скролл к якорям
   ------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
