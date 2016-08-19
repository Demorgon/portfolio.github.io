$(document).ready(function() {    
    function heightDetect() {
        $(".main_section").css("height", $(window).height());
    };
    
    heightDetect();
    
    $(window).resize(function() {
        heightDetect();
    });   
});
      
function scaleToFill() {
    $('video.video-background').each(function(index, videoTag) {
       var $video = $(videoTag),
           videoRatio = videoTag.videoWidth / videoTag.videoHeight,
           tagRatio = $video.width() / $video.height(),
           val;
        
       if (videoRatio < tagRatio) {
           val = tagRatio / videoRatio * 1.02;
       } else if (tagRatio < videoRatio) {
           val = videoRatio / tagRatio * 1.02;
       }
       $video.css('transform','scale(' + val  + ',' + val + ')');
    });    
}

$(function () {
    scaleToFill();
    
    $('.video-background').on('loadeddata', scaleToFill);
    
    $(window).resize(function() {
        scaleToFill();
    });
});   