$(document).ready(function() {    
    function heightDetect() {
        $(".full_page").css("height", $(window).height());
    };

    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });  
    
    mouse_animation();
    skills_animation();
    

});   


function mouse_animation(){
    $('.circle').animate({'top': '40%'}, {
        duration: 500, 
        complete: function() {
            $('.circle').animate({'top': '5%'}, {
                duration: 500, 
                complete: mouse_animation});
        }});
};
let skills_animation_flag = true; 
function skills_animation(){
        if (skills_animation_flag === true){
            $(".skills_item").css("opacity", "0");
            skills_animation_flag = false;
            $(".skills_item:eq(0)").animate({opacity: '1'}, 500, function () {
            $(this).next().delay(500).animate({opacity: '1'}, 500, arguments.callee);
            }); 
        }
        else {
            if (skills_animation_flag === false && $(".skills_item:last-child").css("opacity") == "1"){
                skills_animation_flag = true;
            }
        }
           
};






