function setActive() {
$(document).ready(function() {
var pathname = window.location.pathname;


$('.mainmenu li').each(function(index) {
    var menuhref = $(this).children().attr('href');

 
    if(menuhref == pathname){
    $(this).addClass('active');
    }

   
});
});  
}