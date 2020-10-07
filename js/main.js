$(document).ready(function () {
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
  
  let menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.navbar-button').toggleClass('navbar-button--visible');
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__clouse");
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  var elements = $('.modal__overlay');

  $('[data-toggle=modal]').click(function(){
      elements.addClass('modal__overlay--visible');
      $(document).on('keydown', function(e){
        if(e.which === 27){ // key = esc (27)
            elements.removeClass('modal__overlay--visible');
            var home = $.Event("keydown", {keyCode: 36}); //
            $(document).trigger(home);
            e.preventDefault();
            return false;
        }
    });
  });

  $('.modal__clouse').click(function(){
      elements.removeClass('modal__overlay--visible');
  });

  //обработка форм
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: "Please specify your name",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "phone is must have"
        },
      },
  });
  });

  $(document).ready(function(){
    $('.form__phone').mask('+0(000) 000-00-00');
  });

  AOS.init({
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    }
  });
});