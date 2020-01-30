$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 730);
  $('.a').toggleClass('scrolled', $(this).scrollTop() >730);
	$('.a-bar').toggleClass('scrolled', $(this).scrollTop() > 730);
});

// ScrollBar Custom
$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });
// $(window).scroll(function(){
//
// 	$('.navbar-default.scrolled').toggleClass('.navbar-default', $(this).scrollTop() > 2730));
//   $('.a-bar.scrolled').toggleClass('.a-bar', $(this).scrollTop() > 2730));
// 	$('.a.scrolled').toggleClass('.a', $(this).scrollTop() > 2730));
// });
// window.onscroll = () => {
//    const nav = document.querySelector('.navbar');
//   if(this.scrollY <= 730) {nav.className = '';}
//   else if(this.scrollY >= 730   and  this.scrollY <= 7300){ nav.className = 'scrolled';}
//   else nav.className = '';
// };
