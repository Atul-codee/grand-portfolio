// window scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 80){
        $('body').addClass('fixed-header')
    } else {
        $('body').removeClass('fixed-header')
    }
});


$(document).ready(function() {
    // Typing animation 
    if ($('#type-it').length) {  // Ensure the element exists
        var typed = new Typed('#type-it', {
            strings: ['Designer', 'Developer', 'Freelancer'],
            typeSpeed: 100,
            loop: true,
        });
    }
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:2,
        margin:30,
        autoplay:true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
            
        }
    });

    // One Page Scroll


});

