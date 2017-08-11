$(document).ready(function() {
    $(document).foundation();


    var nav = $(".title-bar");
    var content = $("#content").offset();
    $(window).scroll(function() {
        var screenPosition = $(document).scrollTop() + 100;
        if (screenPosition < content.top) {
            nav.removeClass("shrink");
        }
        if (screenPosition >= content.top) {
            nav.addClass("shrink");
        }
    });

    $(".slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        rows: 4,
        slidesPerRow: 6,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    rows: 3,
                    slidesPerRow: 5
                }
            },
            {
                breakpoint: 960,
                settings: {
                    rows: 3,
                    slidesPerRow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 3,
                    slidesPerRow: 3
                }
            }
        ]
    });



    $('.feedback-button').on('click', function() {
        $('.feedback').toggle(500);
    });
});