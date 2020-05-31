$(document).ready(function () {

    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.header__phone,.header__email').toggleClass('active');
        $('body').toggleClass('lock');
      });
      
            
      $('.header__menu').click(function (event) {
        $('.header__burger,.header__menu,.header__phone,.header__email').toggleClass('active');
        $('body').toggleClass('lock');
      });  

      $(".owl-carousel").owlCarousel({
        autoWidth: true,
        nav: true,
        loop: true,
      });

});