$(document).ready(function(){
    //    gnb관련코드 // 
    var gnb = $(".mainmenu")
    var dim = $(".header-dim")
    gnb.mouseenter(function(){
    dim.stop().fadeIn(200)
    })
    gnb.mouseleave(function(){
        dim.stop().fadeOut(200)
    })
    })
    // window.onload = function () {
    // };