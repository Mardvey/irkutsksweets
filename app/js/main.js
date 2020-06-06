$(document).ready(function () {
  var $menu = $(".header__menu");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 321 && $menu.hasClass("default")) {
      $menu.removeClass("default").addClass("fixed");
    } else if ($(this).scrollTop() <= 321 && $menu.hasClass("fixed")) {
      $menu.removeClass("fixed").addClass("default");
    }
  });//scroll
});

$('.slider__inner').slick({
  prevArrow: '<button class="slick-arrow slick-prev"><div class="hunter"><img src="images/icons/slider-left.png" alt=""></div></button>',
  nextArrow: '<button class="slick-arrow slick-next"><div class="hunter"><img src="images/icons/slider-right.png" alt=""></div></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 4500,
  fade: true,
});






$('.menu__navslider').slick({
  slidesToShow: 6,
  slidesToScroll: 0,
  asNavFor: '.menu__mainslider',
  dots: true,
  centerMode: true,
  arrows: false,
  focusOnSelect: true
});
$('.menu__mainslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  speed: 2000,
  asNavFor: '.menu__navslider'
});









