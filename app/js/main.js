$(function () {
  // if (document.documentElement.clientWidth < 768) {
  //   $('.tariff__items').slick({
  //     infinite: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   });
  // }
  $('.head__slider').slick({
    nextArrow: '<img src="../img/arr_r.svg" class="slick-next" alt="">',
    prevArrow: '<img src="../img/arr_l.svg" class="slick-prev" alt="">',
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.team__items').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<img src="../img/arr_r.svg" class="slick-next" alt="">',
    prevArrow: '<img src="../img/arr_l.svg" class="slick-prev" alt="">',
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

const burger = document.querySelector('.burger__burger');
const nav = document.querySelector('.nav__js');
const headerMob = document.querySelector('.header-mob');

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  nav.classList.toggle('nav_active');
  headerMob.classList.toggle('active');
});
