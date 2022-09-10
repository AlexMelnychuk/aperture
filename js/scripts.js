$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:false,
        autoplayTimeout: 1000,
        nav:true,
        navText: [ '', ' ' ],
        dotsEach: true,

        responsive:{
            0:{
                items:1
            },
            350:{
                items:2
            },
            500:{
                items:3
            },

            1000:{
                items:5
            }
        }
    });

});