//START header-fixed
$('.fixed').affix({
    offset: {
        top: $('.welcome-section').height()
    }
});

$('.fixed').affix({
    offset: {
        top: $('.welcome-section').height()
    }
});
//END header-fixed
//START portfolio-filter
$(".portfolio-items").isotope({
    itemSelector: '.single-item',
    layoutMode: 'fitRows' ,
});
$('.portfolio-filter li').click(function(){
    $(".portfolio-filter li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $(".portfolio-items").isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'liner' ,
            queue: false,
        }
    });
    return false;
});
//END portfolio-filter