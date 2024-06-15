$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });
});
// project slider
$("#projects-slider").owlCarousel({
  loop: true,
  nav: false,
  items: 2,
  dots: true,
  smartSpeed: 1000,
  margin: 24,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  navText: ["PREV", "NEXT"],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 8,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  items: 1,
  smartSpeed: 800,
});
