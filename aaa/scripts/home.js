$(document).ready(function(){
   $(window).bind('scroll', function() {
   var containerHeight = $('div.container').height();
   var bottomHeight  = $('#bottom-nav').height();
   var navHeight = containerHeight - bottomHeight;
   console.log("navHeight: ", navHeight);
   console.log($(window).scrollTop());
         if ($(window).scrollTop() > navHeight) {
             $('#bottom-nav').addClass('fixed');
         }
         else {
             $('#bottom-nav').removeClass('fixed');
         }
    });
});