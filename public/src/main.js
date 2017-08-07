console.log('Hey Mitch, main.js is connected!');

$(function() {
   $('input').focus(function(){
        $(this).toggleClass('visible').fadeIn(2000);
    });
});