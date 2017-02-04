/*
 * @Author: szybj
 * @Date:   2017-02-04 13:38:32
 * @Last Modified by:   szybj
 * @Last Modified time: 2017-02-04 19:05:31
 */

'use strict';
(function() {
    var data = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'],
        titleData = ['百度', '京东', 'css3平滑过渡', '个人站'],
        linkDate = ['https://www.baidu.com', 'https://www.jd.com/', 'https://szybj.github.io/css3%E7%BD%91%E9%A1%B5%E5%B9%B3%E6%BB%91%E8%BF%87%E6%B8%A1%E6%95%88%E6%9E%9C/index.html', 'https://szybj.github.io/works/index.html']
    var str = '';
    var timer = null;
    var n = 0;

    var $ul = $('.tvItem');
    var $next = $('.btn').find('.next');
    var $prev = $('.btn').find('.prev');

    for (var i = 0; i < data.length; i++) {
        str += '<li title="' + titleData[i] + '"><a href="' + linkDate[i] + '" target="_blank"><img src="' + data[i] + '"></a></li>';
    }

    $ul.html(str);
    var $li = $('.tvItem').find('li');
    init($li);
    $next.on('click',function(){
        next($li);
    });
    $prev.on('click', function(){
        prev($li);
    })
    timer = setInterval(function(){
        next($li);
    }, 6000);
    $ul.on('mouseenter',function(){

        clearInterval(timer);
    });
    $ul.on('mouseleave',function(){

        timer = setInterval(function(){
        next($li);
    }, 6000);
    });
    for(var i = 0; i<$li.length;i++){
        $li[i].onmouseover = function(){

            $(this).css({'transform':'scale(1.2)'})
        }
        $li[i].onmouseout = function(){

            $(this).css({'transform':'scale(1)'})
        }
    }
    function prev(obj) {
        n++;
        if (n > obj.length - 1) {
            n = 0;
        }
        init(obj);
    }
    function next(obj) {
        n++;
        if (n > obj.length - 1) {
            n = 0;
        }
        init(obj);
    }
    function init(obj) {
        for (var i = 0; i < obj.length; i++) {
            obj[i].style.zIndex = 0;
            obj[i].style.opacity = 0;
        }
        obj[n].style.zIndex = 1;
        obj[n].style.opacity = 1;
    }

})();
