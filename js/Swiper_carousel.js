const swiper0 = new Swiper('.selling_products', {
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
        992: {
            slidesPerView: 4.5,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 5,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
const swiper1 = new Swiper('.product__photo-carousel', {
    // Optional parameters     
    loop: false,
    breakpoints: {
        300: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        400: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1000: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
// ----------------------------------------------------------
const swiper2 = new Swiper(".product__img-thumbs", {
   
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
const swiper3 = new Swiper('.product__img', {
    // Optional parameters     
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper2,
      },    
});
