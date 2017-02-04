/*
* @Author: szybj
* @Date:   2017-02-02 17:48:02
* @Last Modified by:   szybj
* @Last Modified time: 2017-02-03 14:24:48
*/

'use strict';
(function(){
    $(window).resize(function(){
        e_layOut();
    });
    e_layOut();
    var tY = 30;
    var ping  = true;
    setInterval(function(){
        if(ping){
            tY = 30;
        }else{
            tY = 0;
        }
        $('.pingzi').css({
            'transform':'translateY('+tY+'px) rotate('+ranDom(-10,11)+'deg)',
            'transition':'all 3s ease-in-out'
        })
        ping = !ping;
    },3000);
    $('.pz').on('mouseover',function(){
        $(this).css({
           'transform':'translateY(20px) rotate('+ranDom(-10,11)+'deg)',
            'transition':'all 0.35s ease-out'
        });
    });
     $('.pz').on('mouseout',function(){
        $(this).css({
           'transform':'translateY(0px) rotate('+ranDom(-10,11)+'deg)',
            'transition':'all 0.35s ease-out'
        });
    })
    $('.pz').on('click',function(){
        $(this).css({
            'transform':'translateY(100px)',
            'transition':'all 0.6s ease-out'
        });
    setTimeout(function(){
        $('.pz').css({
        'transform':'translateY(0px)',
        'transition':'all 0.6s ease-out'
    });
    },1000)
})
    function ranDom(a,b){
        return parseInt(Math.random() * (a-b))+b;
    }
    function e_layOut(){
         var $width = $(window).width(),
             trX = $width/2;
             $('.ping').css({'transform':'translateX('+(trX-41)+'px)'})
        if($(window).width() < 800){
             $('.emailOuter').css({
                'width':$width,
                'margin':'0',
                'transform':'translateX('+(-trX)+'px)'
            })
        }else{
            $('.emailOuter').css({
                'width':'800px',
                'transform':'translateX(0px)',
                'margin-left':'-400px'
            })
        }
    }


})();