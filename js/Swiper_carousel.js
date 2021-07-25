const swiper = new Swiper('.swiper-container', {
    // Optional parameters     
    loop: false,
    breakpoints: {
        320: {
            slidesPerView: 2.3,
            spaceBetween: 5,
        },
        540: {
            slidesPerView: 3.3,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 4.3,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});