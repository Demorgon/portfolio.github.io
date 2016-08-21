$(document).ready(function() {    
    function heightDetect() {
        $(".main_section").css("height", $(window).height());
    };
    
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });   
});   

function openNav() {
    document.getElementById("mySidenav").style.width = "18%";
    document.getElementById("main").style.marginLeft = "18%";
    document.querySelector(".nav_icon").style.marginLeft = "18%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.querySelector(".nav_icon").style.marginLeft = "0";
}