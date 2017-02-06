/*
 * @Author: szybj
 * @Date:   2017-02-04 13:38:32
 * @Last Modified by:   szybj
 * @Last Modified time: 2017-02-06 15:49:34
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
        $facesWrap.css({'transform':'rotateX(0deg) rotateY(0deg)'})
        $($f[n]).children().css({ 'transform': 'scale(1) rotate(360deg)' });
        $f[n].style.opacity = 1;
        setTimeout(function() {
            $($f[n]).children().css({ 'transform': 'scale(0) rotate(0deg)' });
            $f[n].style.opacity = 0;
        }, 5000)
    }
    $facesWrap.on('mouseover',function(ev){
        var iX = (ev.clientX - (getX(this)+this.offsetWidth/2))*0.15,
            iY = (ev.clientY - (getY(this)+this.offsetHeight/2))*0.15;

        this.style.transform = 'rotateX('+iY+'deg) rotateY('+iX+'deg) translateZ(0px)';
        this.style.perspectiveOrigin = '192px 222px';

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
