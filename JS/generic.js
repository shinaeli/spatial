$(document).ready(
  function () {
    $('.the_road').hide().slideDown(5000);
    $('.main1 p').hide().fadeIn(2500);
    $('header').hide().fadeIn(2500);
  }
);

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().slideDown(1200);
});

