$(document).ready(function () {

    // banner slider 
    $('.banner-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    // Get the back-to-top button
    var backToTopButton = $(".back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            backToTopButton.addClass("show");
        } else {
            backToTopButton.removeClass("show");
        }
    });
});
