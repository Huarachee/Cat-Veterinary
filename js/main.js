$(function(){
    $('.our-team__slider').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next-arrow__img.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev-arrow__img.svg" alt="prev arrow"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});