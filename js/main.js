 var swiper = new Swiper(".slide-characteres", {
        slidesPerView: 3,
        spaceBetween: 12,
        freeMode: true,
        breakpoints: {
                297: {
                        slidesPerView: 1.3,
                        spaceBetween: 33  
                },
                500: {
                        slidesPerView: 2.2,
                        spaceBetween: 35 
                 },
                991: {
                        slidesPerView: 2.8,
                        spaceBetween: 35 
                 },
                1200: {
                slidesPerView: 3.2                          
                }
              }
});

AOS.init({
   duration: 1000,
   once: true,     
});