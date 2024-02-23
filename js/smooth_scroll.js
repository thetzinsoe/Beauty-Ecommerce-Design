$('.nav-solution ul li a').on('click', function (e) {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1500);
    e.preventDefault();
});