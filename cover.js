$(".button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#welcome-week").offset().top - 50
    }, 1000);
});

$(".button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#informatics").offset().top - 50
    }, 1000);
});