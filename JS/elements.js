$(document).ready(
  function () {
    $('header').hide().fadeIn(2500);
  }
);

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(1200);
});