const tooltips = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Открытие и закрытие подсказок по клику на кнопку
for (let tooltip of tooltips) {
    tooltip.addEventListener('click', (e) => {
        e.stopPropagation();

        for (let infoHint of infoHints) {
            if (tooltip.parentNode.querySelector('.info-hint') !== infoHint) {
                infoHint.classList.add('none');
            }
        }
        
        tooltip.parentNode.querySelector('.info-hint').classList.toggle('none');
    });
}

// Закрытие подсказок по клику на область
document.addEventListener('click', () => {
    for (let infoHint of infoHints) {
        infoHint.classList.add('none');
    }
});

// Запрещаем делигирование событий по клику на кнопку 
for (let infoHint of infoHints) {
    infoHint.addEventListener('click', (e) => e.stopPropagation());
}