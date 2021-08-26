$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    navText: false,
    loop: true,
    margin: 10,
    padding: 40,
    responsiveClass: true,
    dots: true,
    video: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      768: {
        items: 1,
      },
      1024: {
        loop: true,
        items: 1,
      },
    },
  });
});
