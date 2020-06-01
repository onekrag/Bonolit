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
  });

  $(".slide__reviews").owlCarousel({
    autoWidth: true,
    nav: true,
    loop: true,
    dots: false,
    margin: 30,
    // autoWidth: true,
    // video: true,
    // videoHeight: ,
    // videoWidth: ,
    // center: true,
    responsive: {
      480: {
        items: 1,
      },
      640: {
        items: 1,
      },
      960: {
        items: 1,
        center: true,
      },
      1200: {
        items: 1,

      }
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
    type: 'inline'
  });

});