js
/* -------------------------------------------------
   1.  Переключаем открытие/закрытие аккордеона
   ------------------------------------------------- */
document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.dataset.target;      // id контента
        const content  = document.getElementById(targetId);

        // Если уже открыт → закрываем
        const isOpen = content.classList.contains('open');

        // Закрываем все другие вкладки (чтобы один был открыт)
        document.querySelectorAll('.acc-content.open').forEach(opened => {
            opened.classList.remove('open');
            const linkedBtn = document.querySelector(`.acc-btn[data-target="${opened.id}"]`);
            linkedBtn.classList.remove('active');
        });

        if (!isOpen) {
            // Открываем текущий
            content.classList.add('open');
            btn.classList.add('active');
        } else {
            // Уже был открыт → просто закрываем (по условию «два клика»)
            content.classList.remove('open');
            btn.classList.remove('active');
        }
    });
});

/* -------------------------------------------------
   2.  (Необязательно) Автопереключатель темы
   ------------------------------------------------- */
// Если захотите добавить светлую тему, просто раскомментируйте ниже

const themeToggle = document.createElement('button');
themeToggle.textContent = '☀️/🌙';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '1rem';
themeToggle.style.right = '1rem';
themeToggle.style.padding = '0.5rem';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '4px';
themeToggle.style.background = '#ff5555';
themeToggle.style.color = '#fff';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme')||'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
});
