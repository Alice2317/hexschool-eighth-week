import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

AOS.init();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    scrollbar: {
        el: ".swiper-scrollbar"
    }, 
    breakpoints: {
        1280: {
            slidesPerView: 4
        }, 
        990: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
            enabled: true
        },
        1: {
            slidesPerView: 1,
            spaceBetween: 0,
            enabled:false
        },
    }
});

$('.js-slick').slick({
    arrows:true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                arrows: false
            }
        }
    ]
});