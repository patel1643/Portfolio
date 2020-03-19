$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 730);
  $('.a').toggleClass('scrolled', $(this).scrollTop() >730);
	$('nav').toggleClass('navbar-dark',  $(this).scrollTop() < 730);

});
//This function changes the hamburger colour when bg is white to
$(window).scroll(function(){
	$('nav').addClass('navbar-light', $(this).scrollTop() >730);
});

// ScrollBar Custom
$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });
