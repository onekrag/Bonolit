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
    margin: 50,
  });

});