$(document).ready(function () {

    $(".dropdown-item .nav-link").click(function () {
        $(".dropdown-item .nav-link").removeClass("active");
        $(this).addClass("active");

    });

    $(".hum-menu").click(function () {

        $(".hum-menu div:nth-child(1)").toggleClass("change1");
        $(".hum-menu div:nth-child(2)").toggleClass("change2");
        $(".hum-menu div:nth-child(3)").toggleClass("change3");
        $("header").toggleClass("active");
        $(".dropdown-menu").toggle({ direction: "left" }, 1000);
    })
})
