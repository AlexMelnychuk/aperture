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
                items:5
            },

            1000:{
                items:5
            }
        }
    });

});