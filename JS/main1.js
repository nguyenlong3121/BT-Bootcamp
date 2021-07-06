const swiper = new Swiper('.swiper-container', {
    
    direction: 'vertical',
    loop: true,
    
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    }})
