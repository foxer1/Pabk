$(document).ready(function () {
    $(document).foundation();
    $(".slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        rows: 3,
        slidesPerRow: 9,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    rows: 4,
                    slidesPerRow: 4
                }
            }
        ]
    });
});