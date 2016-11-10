$(document).ready(function() {    
    function heightDetect() {
        $("section").css("height", $(window).height());
    };
    
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });  
});   