$(document).ready(function () {
    $(document).foundation();
    $(".slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        rows: 4,
        slidesPerRow: 6,

        responsive: [
            {
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
});