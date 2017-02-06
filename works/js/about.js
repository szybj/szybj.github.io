/*
 * @Author: szybj
 * @Date:   2017-02-04 13:38:32
 * @Last Modified by:   szybj
 * @Last Modified time: 2017-02-06 13:56:51
 */

'use strict';
(function() {

    var timer = null;
    var n = 0;
    var $f = $('.f'),
        $facesWrap = $('.facesWrap');

   init();

timer = setInterval(function() {
        init();
    }, 6000);

    function init() {
        n++;
        if (n > $f.length - 1) {
            n = 0;
        }
        show();
    }

    function show() {
        $($f[n]).children().css({ 'transform': 'scale(1) rotate(360deg)' });
        $f[n].style.opacity = 1;
        setTimeout(function() {
            $($f[n]).children().css({ 'transform': 'scale(0) rotate(0deg)' });
            $f[n].style.opacity = 0;
        }, 5000)

    }

    $facesWrap.on('mouseover',function(ev){
        var iX = ev.clientX - (getX(this)+this.offsetWidth/2),
            iY = ev.clientY - (getY(this)+this.offsetHeight/2);
     /*   var iY = parseInt(ev.clientY - getY(this));*/
        this.style.transform = 'rotateX('+iY*0.15+'deg) rotateY('+iX*0.15+'deg)'
     document.title = iX;



    });

    function getX(obj){
        var iLeft = 0;
        while(obj){
            iLeft += obj.offsetLeft;
            obj = obj.offsetParent;
        }
        return iLeft;
    }
   function getY(obj){
        var iTop = 0;
        while(obj){
            iTop += obj.offsetTop;
            obj = obj.offsetParent;
        }
        return iTop;
    }

})();
