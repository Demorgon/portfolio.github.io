$(document).ready(function() {    
    function heightDetect() {
        $(".section").css("height", $(window).height());
    };
    
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });  
});   


var myMenu = document.querySelector(".menu_container");
var oppMenu = document.querySelector(".nav_icon");
var body = document.getElementsByClassName(".flex_container");
var section2 = document.querySelectorAll('.section');

oppMenu.addEventListener("click", toggleClassMenu, false);
//body.addEventListener("click", closeMenu, false);
for (var i = 0; i < section2.length; i++) {
    section2[i].addEventListener("click", closeMenu, false);
}

function closeMenu(){
    myMenu.classList.remove('menu--visible');
    oppMenu.classList.remove('content--visible');
}
function toggleClassMenu() {	
	if(!myMenu.classList.contains('menu--visible')) {		
		myMenu.classList.add('menu--visible');
        oppMenu.classList.add('content--visible');
	} else {
		myMenu.classList.remove('menu--visible');
        oppMenu.classList.remove('content--visible');
	}	
}