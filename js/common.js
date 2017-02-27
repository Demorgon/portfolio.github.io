$(document).ready(function () {
    function heightDetect() {
        $(".full_page").css("height", $(window).height());
    };

    //    heightDetect();

    $(window).resize(function () {
        heightDetect();
    });
});

//function mouse_animation(){
//    $('.circle').animate({'top': '40%'}, {
//        duration: 500, 
//        complete: function() {
//            $('.circle').animate({'top': '5%'}, {
//                duration: 500, 
//                complete: mouse_animation});
//        }});
//};

//setInterval(function() {
//  $("#page-menu-next-button").click();
//}, (Math.random() * (30000 - 10000) + 10000));