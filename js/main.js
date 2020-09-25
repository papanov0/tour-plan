var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.hotel-slider__button--prev',
    nextEl: '.hotel-slider__button--next',
  },
  keyboard: {
    enabled: true,
  },
});

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.reviews-slider__button--prev',
    nextEl: '.reviews-slider__button--next',
  },
  keyboard: {
    enabled: true,
  },
});

$(window).resize(function () {
  if($(window).width() >= 768){
      $('.newsletter').removeClass('parallax-window');
  };
})