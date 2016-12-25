$(document).ready(function() {
    new WOW().init();

    jQuery(window).load(function() {
        jQuery("#preloader").delay(100).fadeOut("slow");
        jQuery("#load").delay(100).fadeOut("slow");
    });


    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    $(window).scroll();

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $("a.smooth-scroll-link").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 750, "easeInOutExpo");
        event.preventDefault();
    });

    sendMail.init({
        "errorBox": "#contact-form .error-box",
        "successBox": "#contact-form .success-box",
        "inProgressBox": "#contact-form .in-progress-box",
        "formBox": "#contact-form .form-box",
        "tryAgain": "#contact-form .try-again",
        "submitButton": "#contact-form .submit-button",
        "action": "actions/sendMail.php",
    });
});