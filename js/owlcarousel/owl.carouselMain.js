// owlCarousel

$(document).ready(function () {
    $(".owl-one").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });
  
    $(".owl-two").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      autoplay: false,
      autoplayTimeout: 0,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });