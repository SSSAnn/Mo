$(function(){
    $("#menu-bar").on("click",function(){
        $("#menuBar").toggleClass("fa-times");
        $(".navbar").toggleClass("active");      
    })
    $(window).on("scroll",function(){
        $("#menuBar").removeClass("fa-times");
        $(".navbar").removeClass("active");      
    })
  
})


