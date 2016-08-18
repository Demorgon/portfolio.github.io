$(document).ready(function() {
    
    function heightDetect() {
        $(".main_section").css("height", $(window).height());
    };
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });
    
    
//    var img = document.getElementById('blink');
//
//    var interval = window.setInterval(function(){
//        if(img.style.visibility == 'hidden'){
//            img.style.visibility = 'visible';
//        }else{
//            img.style.visibility = 'hidden';
//        }
//    }, 1000);
});