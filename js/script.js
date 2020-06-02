$(document).ready(function () {

  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu,.header__phone,.header__email').toggleClass('active');
    $('body').toggleClass('lock');
  });


  $('.header__menu').click(function (event) {
    $('.header__burger,.header__menu,.header__phone,.header__email').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $(".slide__clients").owlCarousel({
    autoWidth: true,
    nav: true,
    loop: true,
    dots: false,
    margin: 50,
    responsive: {
      320: {
        items: 1,
        nav: false,
      },
      480: {
        items: 1,
        nav: false,
      },
      640: {
        items: 1,
        nav: false,
      },
      960: {
        items: 1,
        nav: false,
      },
      1200: {
        items: 2,
        nav: false,
      },
      1600: {
        items: 2,
      },
    },
  });

  $(".slide__reviews").owlCarousel({
    // autoWidth: true,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    // loop: true,
    dots: false,
    margin: 30,
    // video: true,
    // videoHeight: 320,
    // videoWidth: 570,    
    responsive: {
      320: {
        items: 1,
        nav: false,
      },
      480: {
        items: 1,
        nav: false,
      },
      640: {
        items: 1,
        nav: false,
      },
      960: {
        items: 1,
        nav: false,
      },
      1200: {
        items: 2,
        nav: false,
      },
      1600: {
        items: 2,
      },
    },
  });

  $(".popap__form-slide").owlCarousel({
    autoWidth: true,
    nav: true,
    loop: true,
    dots: false,
    margin: 50,
  });

  $('.popup__open').magnificPopup({
    type: 'inline',
    removalDelay: 100,
    mainClass: 'mfp-fade'
  });

});