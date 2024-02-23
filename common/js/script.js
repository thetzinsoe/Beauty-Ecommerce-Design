$(document).ready(function () {

    $(window).on('scroll', function (e) {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('active',200)        
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $('header').removeClass('active',200)
        }
    })
})
