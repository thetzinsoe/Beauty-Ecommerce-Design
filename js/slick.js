$(document).ready(function () {
  $('.single-item').slick();

  $('.prev-btn').click(function () {
    $('.single-item').slick('slickPrev');
  });

  $('.next-btn').click(function () {
    $('.single-item').slick('slickNext');
  });
});

var slider = $('.catmv-slider');
slider.slick({
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});