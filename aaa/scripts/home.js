$(document).ready(function(){
   $(window).bind('scroll', function() {
   var containerHeight = $('div.container').height();
   var bottomHeight  = $('#bottom-nav').height();
   var navHeight = containerHeight - bottomHeight;
         if ($(window).scrollTop() > navHeight) {
             $('#bottom-nav').addClass('fixed');
         }
         else {
             $('#bottom-nav').removeClass('fixed');
         }
    });
});

//Animated scroll to sections
$("#menu a").click(function(event){
  event.preventDefault();
  var section = $(this).attr('href');
  $('html, body').animate({scrollTop: $(section).offset().top - 100}, 1500);

});

//animated scroll to top
$("a.arrow").click(function(event){
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 1500);

});