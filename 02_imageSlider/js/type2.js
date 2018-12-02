$(document).ready(function() {
    /*효과 https://api.jquery.com/category/effects/ */ */
    $("#slider ul li.item:gt(0)").hide();
//gt
    setInterval(function() {
        $("#slider ul li.item:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slider ul");
        //appendTo : 뒤에다 붙이기
        //prependTo : 앞에다 붙이기
    },2000);
});