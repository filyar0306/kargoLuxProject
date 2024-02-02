$(".s-carousel").owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    responsive: {
        0:{
        items:2,
        nav: false
        },
        800:{
        items:4,
        nav: false
        },
        1000:{
        items:6,
        nav: false
        }
    }
});
