$(function(){

    //메뉴1
// $(".main>li, .sub_bg").hover(function(){
//     $(".sub, .sub_bg").stop().slideDown();
// }, function(){
//     $(".sub, .sub_bg").stop().slideUp();
// })//hover

    //메뉴2
    $(".main>li, .sub_bg").mouseover(function(){
        $(".sub, .sub_bg").stop().slideDown();
    })//
    $(".main>li, .sub_bg").mouseout(function(){
        $(".sub, .sub_bg").stop().slideUp();
    })//

//슬라이드1
    // var n=0;
    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //     }//if
    //     var pos = n * -1200 + "px";
    //     $(".left_move").animate({left:pos},500);
    // },2000)//

//슬라이드2
setInterval(function(){
    $(".left_move").animate({left:"-1200px"}, 500,function(){
        $(".left_move").css({left:"0"});
        $(".left_move").append($(".left_move li").eq(0));
    })//
},2000)//

//모달 pop
$(".p_click").click(function(){
    $(".pop, .m_pop").fadeIn();
})
$(".close").click(function(){
    $(".pop, .m_pop").fadeOut();
})






})//jquery