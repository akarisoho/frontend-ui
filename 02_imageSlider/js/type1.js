$(document).ready(function(){   //html과 css불러오기전에 js실행 방지
    $items = $("#slider ul li.item");
    
    var currentIndex = 1; //현재
    var imgCount = $items.length; //이미지갯수

    /*  시간제어 함수
    setTimeout()    3초후에 실행 
    setInterval()   3초마다 반복
    */
    setInterval(function() {
        //예외처리 : 이미지 갯수와 같거나 커지면 currentIndex는 0
        if(currentIndex >= imgCount){
            currentIndex = 0;
        }
        //모든 이미지에 active 클래스를 제거한다.
        $items.removeClass('active');
        $items.eq(currentIndex++).addClass('active');
    },1000);
});