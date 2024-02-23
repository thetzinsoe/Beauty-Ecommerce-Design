$(document).ready(function () {
  // Show the first tab content and add 'active' class
  $('.tab-content:first').show().addClass('active');

  // Add click event listener to tab links
  $('.tab-link').click(function (event) {
    event.preventDefault();

    // Remove 'active' class from all tab links
    $('.tab-link').removeClass('active');

    // Add 'active' class to the clicked tab link
    $(this).addClass('active');

    // Hide all tab contents
    $('.tab-content').hide().removeClass('active');

    // Show the corresponding tab content
    var target = $(this).attr('href');
    $(target).show().addClass('active');
  });

  // Make the first tab link active by default
  $('.tab-link:first').addClass('active');
});
