$(document).ready(function () {
  $(".slider-onSoccupeDuWeb").slick({
    arrows: false,
    dots: true,
    speed: 900,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          adaptiveHeight: false,
          autoplay: true,
          autoplaySpeed: 700,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 700,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          adaptiveHeight: false,
          autoplay: true,
          autoplaySpeed: 700,
        },
      },
    ],
  });
});

$(document).ready(function () {
  if ($(window).width() <= 500) {
    $(".petitPlus-container").slick({
      slidesToShow: 2,
      centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      initialSlide: 1, // démarre à la deuxième slide
      responsive: [
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            centerMode: false,
          },
        },
      ],
    });
  }
});
