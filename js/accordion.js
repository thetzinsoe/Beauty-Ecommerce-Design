$(document).ready(function () {
  $(function () {
      $(".accordion-content:not(:first-of-type)").css("display", "none");

      $(".js-accordion-title:first-of-type").addClass("open");

      $(".js-accordion-title").click(function () {
          $(".open").not(this).removeClass("open").next().slideUp(300);
          $(this).toggleClass("open").next().slideToggle(300);
      });
  });
})