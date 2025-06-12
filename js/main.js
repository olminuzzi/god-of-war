var swiper = new Swiper(".slider-caracteres", {
      slidesPerView: 3.5,
      spaceBetween: 18,
      freeMode: true,
      breakpoints: {
        320: {
          slidesPerView: 1.2,        
        },
        768: {
          slidesPerView: 1.4,          
      },
      991: {
          slidesPerView: 2.3,         
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 22,
        }
      }     
    });
    
    AOS.init({
      duration: 1000,
      once: true, 
    });