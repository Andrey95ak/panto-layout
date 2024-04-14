import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
Swiper.use([Navigation]);

const tabs = document.querySelectorAll('[data-tab]');
const products = document.querySelectorAll('[data-tab-value]');

// Реализация работы свайпера (слайдера)
const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode: true,
    slidesPerView: 1,
    spaceBetween: 42,
    navigation: {
        nextEl: '#btnNext',
        prevEl: '#btnPrev',
    },
    breakpoints: {
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: 4,
          spaceBetween: 42,
        }
    }
});


// Реализация работы табов
for (let tab of tabs) {
    tab.addEventListener('click', function() {
        for (let activeTab of tabs) {
            activeTab.classList.remove('tab-controls__btn--active');
        }

        this.classList.add('tab-controls__btn--active');   
        
        for (let product of products) {
            if (product.dataset.tabValue === this.dataset.tab || this.dataset.tab === 'all') {
                product.classList.remove('none');
            } else {
                product.classList.add('none');
            }        
        }

        swiper.update(); 
    });
}
