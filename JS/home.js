$(document).ready(
  function () {
    $('header').hide().fadeIn(2500);
    $('.logo').hide().fadeIn(3000);
    $('.logo-head h1').hide().slideDown(1000);
  }
);

$('.toggle-menu').click(function(e) {
  $('.nav-links').toggleClass('active').hide().fadeIn(1200);
});

// let toggleMenu = document.getElementsByClassName('toggle-menu')[0], navLinks = document.getElementsByClassName('nav-links')[0], toggler = function(e) {
//   navLinks.classList.toggle('active');
// }
// toggleMenu.addEventListener('click', toggler);