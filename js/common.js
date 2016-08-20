$(document).ready(function() {    
    function heightDetect() {
        $(".main_section").css("height", $(window).height());
    };
    
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });   
});   

$('.nav_icon').on('click', function(){    
    $('.aside_menu').toggle(500);
});