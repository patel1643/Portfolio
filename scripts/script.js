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




// //
// $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 730);
//   $('.a').toggleClass('scrolled', $(this).scrollTop() >730);
// 	$('.a-bar').toggleClass('scrolled', $(this).scrollTop() > 730);
// });
//
// // ScrollBar Custom
// $(document).ready(function () {
//           if (!$.browser.webkit) {
//               $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
//           }
//       });
