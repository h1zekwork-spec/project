/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы уроков
    const lessons = document.querySelectorAll('.lesson');

    lessons.forEach(lesson => {
        const textarea = lesson.querySelector('.code-input');
        const iframe = lesson.querySelector('.result-preview');

        // Функция обновления предпросмотра
        const updatePreview = () => {
            const code = textarea.value;
            // Используем srcdoc для отображения HTML в iframe
            // Добавляем базовые стили внутрь iframe, чтобы контент выглядел хорошо
            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { 
                            font-family: sans-serif; 
                            margin: 15px; 
                            color: #333; 
                        }
                        * { max-width: 100%; }
                    </style>
                </head>
                <body>
                    ${code}
                </body>
                </html>
            `;
            iframe.srcdoc = htmlContent;
        };

        // Обновляем при вводе
        textarea.addEventListener('input', updatePreview);

        // Инициализируем начальное состояние
        updatePreview();
    });

    // Добавим небольшую анимацию появления при скролле (опционально)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Применяем наблюдатель к секциям (хотя у нас уже есть CSS-анимация при загрузке)
    // Это полезно для длинных страниц
    // lessons.forEach(lesson => observer.observe(lesson));
});
