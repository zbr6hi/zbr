$(function(){
	$('.box').mouseenter(function(){
	$('.box ol li').eq(0).addClass('m1');
	$('.box ol li').eq(1).addClass('m2');
	$('.box ol li').eq(2).addClass('m3');
	$('.box ol li').eq(3).addClass('m4');
	$('.box ol li').eq(4).addClass('m5');
	$('.box ol li').eq(5).addClass('m6');
});
	$('.box').mouseleave(function(){
	$('.box ol li').eq(0).removeClass('m1');
	$('.box ol li').eq(1).removeClass('m2');
	$('.box ol li').eq(2).removeClass('m3');
	$('.box ol li').eq(3).removeClass('m4');
	$('.box ol li').eq(4).removeClass('m5');
	$('.box ol li').eq(5).removeClass('m6');
	});
	$('.box').on('touchstart',function(){
	$('.box ol li').eq(0).addClass('m1');
	$('.box ol li').eq(1).addClass('m2');
	$('.box ol li').eq(2).addClass('m3');
	$('.box ol li').eq(3).addClass('m4');
	$('.box ol li').eq(4).addClass('m5');
	$('.box ol li').eq(5).addClass('m6');
	});
	$('.box').on('touchend',function(){
    $('.box ol li').eq(0).removeClass('m1');
	$('.box ol li').eq(1).removeClass('m2');
	$('.box ol li').eq(2).removeClass('m3');
	$('.box ol li').eq(3).removeClass('m4');
	$('.box ol li').eq(4).removeClass('m5');
	$('.box ol li').eq(5).removeClass('m6');
	})
/*    $('.box').touchstart(function(){
	$('.box ol li').eq(0).addClass('m1');
	$('.box ol li').eq(1).addClass('m2');
	$('.box ol li').eq(2).addClass('m3');
	$('.box ol li').eq(3).addClass('m4');
	$('.box ol li').eq(4).addClass('m5');
	$('.box ol li').eq(5).addClass('m6');
});
    $('.box').touchend(function(){
    $('.box ol li').eq(0).removeClass('m1');
	$('.box ol li').eq(1).removeClass('m2');
	$('.box ol li').eq(2).removeClass('m3');
	$('.box ol li').eq(3).removeClass('m4');
	$('.box ol li').eq(4).removeClass('m5');
	$('.box ol li').eq(5).removeClass('m6');
    })*/
})