/*
 * @Author: szybj
 * @Date:   2017-02-04 13:38:32
 * @Last Modified by:   szy
 * @Last Modified time: 2017-02-23 18:46:36
 */

'use strict';
(function() {
    var data = ['works/images/4.jpg','works/images/5.jpg','works/images/6.jpg', 'works/images/1.jpg', 'works/images/2.jpg', 'works/images/3.jpg','works/images/7.png'],
        titleData = ['外卖app(vue)','贪吃蛇','下雪效果','css3网页平滑过渡效果', '评论功能', '在线教育','五一·E起游'],
        linkDate = [ 'https://szybj.github.io/elm/index.html','https://szybj.github.io/%E8%B4%AA%E5%90%83%E8%9B%87/index.html','https://szybj.github.io/%E4%B8%8B%E9%9B%AA%E6%95%88%E6%9E%9C/index.html','https://szybj.github.io/css3%E7%BD%91%E9%A1%B5%E5%B9%B3%E6%BB%91%E8%BF%87%E6%B8%A1%E6%95%88%E6%9E%9C/index.html', 'https://szybj.github.io/rr/index.html', 'https://szybj.github.io/e-Learning/','https://szybj.github.io/Mobile-terminal/cctv/index.html']
    var str = '';
    var timer = null;
    var timer_1 = null;
    var n = 0;
    var flag = true;
    var $ul = $('.tvItem');
    var $next = $('.btn').find('.next');
    var $prev = $('.btn').find('.prev');
    var $x51E = $('.x51E');
    var $x51EImg = $x51E.next();
    for (var i = 0; i < data.length; i++) {
        str += '<li title="' + titleData[i] + '"><a href="' + linkDate[i] + '" target="_blank"><img src="' + data[i] + '"></a></li>';
    }

    $ul.html(str);
    var $li = $('.tvItem').find('li');
    init($li);
    $next.on('click', function() {

        next($li);
    });
    $prev.on('click', function() {

        prev($li);
    })
    timer = setInterval(function() {
        next($li);
    }, 2000);
    $ul.on('mouseenter', function() {

        clearInterval(timer);
    });
    $ul.on('mouseleave', function() {
        timer = setInterval(function() {
            next($li);
        }, 2000);
    });
    for (var i = 0; i < $li.length; i++) {
        $li[i].onmouseover = function() {
            $(this).css({ 'transform': 'scale(1.2)' })
        }
        $li[i].onmouseout = function() {
            $(this).css({ 'transform': 'scale(1)' })
        }
    }
    function prev(obj) {
        if(flag){
            flag = false;
            n--;
        }
        if (n < 0) {
            n = obj.length - 1;
        }
        init(obj);
    }
    function next(obj) {
        if(flag){
            flag = false;
            n++;
        }
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
        obj[n].addEventListener('transitionend', flagFn);
        function flagFn(){
            flag = true;
            obj[n].removeEventListener('transitionend', flagFn);
        }
    }

    $x51E.on('mouseover',show);
    $x51E.on('mouseout',hide);

    $x51EImg.on('mouseover',show)
    $x51EImg.on('mouseout',hide)
    function show() {
        $x51EImg.css('display','block');
        clearTimeout(timer_1);
        timer_1 = setTimeout(function(){
             $x51EImg.css({'transform':'translateY(-240px)','opacity':'1'})
         },20)
    }
    function hide() {
        timer_1 = setTimeout(function() {
             $x51EImg.css({'transform':'translateY(-360px)','opacity':'0'});
             setTimeout(function(){
                     $x51EImg.css('display','none');
                 },420)
        },400);
    }
})();
