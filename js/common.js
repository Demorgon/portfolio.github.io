$(document).ready(function() {    
    function heightDetect() {
        $(".main_section").css("height", $(window).height());
    };
    
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });   
});   


var myMenu = document.querySelector(".menu_container");
var oppMenu = document.querySelector(".nav_icon");
var body = document.querySelector(".content_container");

oppMenu.addEventListener("click", toggleClassMenu, false);
body.addEventListener("click", closeMenu, false);

function closeMenu(){
    myMenu.classList.remove('menu--visible');
    body.classList.remove('content--visible');
    oppMenu.style.marginLeft = "0";
}
function toggleClassMenu() {	
    body.classList.add('menu--animatable');
	if(!myMenu.classList.contains('menu--visible')) {		
		myMenu.classList.add('menu--visible');
        oppMenu.style.marginLeft = "280px";
        body.classList.add('content--visible');
	} else {
		myMenu.classList.remove('menu--visible');
        oppMenu.style.marginLeft = "0";
        body.classList.remove('content--visible');
	}	
}