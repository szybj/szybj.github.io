/*
 * @Author: szybj
 * @Date:   2017-02-04 13:38:32
 * @Last Modified by:   szybj
 * @Last Modified time: 2017-02-04 22:14:35
 */

'use strict';
(function() {

    var timer = null;
    var n = 0;
    var $f = $('.f');
    init();
    console.log($f)
    timer = setInterval(function(){
        init();
    }, 6000);
    function init() {
        n++;
        if (n > $f.length - 1) {
            n = 0;
        }
        show();
    }
    function show(){
        $($f[n]).children().css({'transform':'scale(1) rotate(360deg)'});
        $f[n].style.opacity = 1;
        setTimeout(function(){
             $($f[n]).children().css({'transform':'scale(0) rotate(0deg)'});
             $f[n].style.opacity = 0;
        },5000)

    }


})();
