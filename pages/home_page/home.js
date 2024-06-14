$(document).ready(function () {
  if ($(window).width() <= 500) {
    $(".container-nosServices-card").slick({
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      initialSlide: 1, // démarre à la deuxième slide
      centerPadding: "45px",
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
