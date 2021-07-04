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

    let $window = $(window);
    
    function resizeEm(){
        let currWidth = $window.width();
        let WidthWindowNow = 761; // Задаем ширину экрана, после которого начнётся скрипт
        let put = (currWidth / 2) - WidthWindowNow;
        $('#welcome').animate({left: put}, 1000);
    }

    // $window.resize(function() {
    //     $('.gallery-cat__container-images--slider').slick({
    //         nextArrow: '<button class="slick-arrow slick-next"><img src="images/next-arrow__img.svg" alt="next arrow"></button>',
    //         prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev-arrow__img.svg" alt="prev arrow"></button>',
    //         responsive: [
    //             {
    //                 breakpoint: 320,
    //                 settings: {
    //                     arrows: false
    //                 }
    //             }
    //         ]
    //     });
    //     resizeEm();
        
    // });
});