$(document).ready(function() {    
    function heightDetect() {
        $(".full_page").css("height", $(window).height());
    };

    heightDetect();
    svg_position_func();
    $(window).resize(function() {
        svg_position_func();
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
                skills_animation();
            }
        }
           
};



function svg_position_func(){
    let svg_height = $(".skills_item").outerHeight(false);
    let svg_width = $(".skills_item").outerWidth(false);
//    alert(svg_height);
    $(".bottom").attr({
        y1:svg_height,
        y2:svg_height,
        x2:svg_width
    });
    $(".right").attr({
        x1:svg_width,
        x2:svg_width
    });
};



