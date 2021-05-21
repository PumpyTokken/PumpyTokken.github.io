$(window).ready(function(){
    $('.ribbon-text-wrapper').slideDown()
});

var texts = $('.text-block');
var imgs = $('.block-img');
var stages = $('.stage');

window.onscroll = function() {
    var getScr = $(document).scrollTop()+$(window).height();
    for(i = 0; i < texts.length; i++){
        if(getScr >= $(texts[i]).offset().top) $(texts[i]).css("transform", "translate(0%)");
    }
    for(i = 0; i < imgs.length; i++){
        if(getScr >= $(imgs[i]).offset().top) $(imgs[i]).css("transform", "translate(0%)");
    }
    for(i = 0; i < stages.length; i++){
        if(getScr >= $(stages[i]).offset().top) $(stages[i]).css("transform", "translate(0%)");
    }
}