const mobileMenu = document.querySelector('.nav__btn');
const mobileNavBlock = document.getElementById('mobile-nav-block');
const closeBtn = document.getElementById('close-btn');

mobileMenu.addEventListener('click', () => {
    mobileNavBlock.classList.remove('none');
});

closeBtn.addEventListener('click', () => {
    mobileNavBlock.classList.add('none');
})