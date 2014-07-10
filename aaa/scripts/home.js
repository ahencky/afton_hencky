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