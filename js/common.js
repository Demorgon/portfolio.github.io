$(document).ready(function() {    
    function heightDetect() {
        $(".main_section").css("height", $(window).height());
    };
    
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });   
});   

//function openNav() {
//    document.getElementById("mySidenav").style.width = "18%";
//    document.getElementById("main").style.marginLeft = "18%";
//    document.querySelector(".nav_icon").style.marginLeft = "18%";
//}
//
//function closeNav() {
//    document.getElementById("mySidenav").style.width = "0";
//    document.getElementById("main").style.marginLeft = "0";
//    document.querySelector(".nav_icon").style.marginLeft = "0";
//}

var myMenu = document.querySelector(".menu_container");
var oppMenu = document.querySelector(".nav_icon");
var body = document.querySelector(".content_container");

oppMenu.addEventListener("click", toggleClassMenu, false);
body.addEventListener("click", closeMenu, false);

function closeMenu(){
    myMenu.classList.remove('menu--visible');
    oppMenu.style.marginLeft = "0";
}
function toggleClassMenu() {	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
        oppMenu.style.marginLeft = "280px";
//        content.style.marginLeft = "280px";
	} else {
		myMenu.classList.remove('menu--visible');
        oppMenu.style.marginLeft = "0";
//        content.style.marginLeft = "0%";
	}	
}