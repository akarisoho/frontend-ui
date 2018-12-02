$(document).ready(function() {
    /* mouse over Event    https://api.jquery.com/category/events/ */
    $("#slider ul li.item:gt(0)").hide();

    var fading;
    function start() {
        fading = setInterval(function() {
            $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");        
        },2000);        
    };
    function stop(){
        clearInterval(fading);
    }
    //.hover(handlerIn,handlerOut)
    start();

    $("#slider").hover(function() {
        stop(); //반복주기 초기화
    }, function() {
        start();
    });
});