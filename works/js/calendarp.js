/*
 * @Author: szybj
 * @Date:   2017-02-05 15:01:02
 * @Last Modified by:   szybj
 * @Last Modified time: 2017-02-06 00:02:01
 */

'use strict';
(function() {
    var data = {
        images: ['images/62930.jpg', 'images/68052.jpg', 'images/68071.jpg', 'images/68198.jpg', 'images/68582.jpg'],
        link: ['http://y.qq.com/vip/nine_anniversary/index.html', 'https://y.qq.com/portal/mv/c/g3nr24jdgv07dkn.html', 'http://y.qq.com/topic/yt165/index.html', 'https://y.qq.com/portal/album/00490g2Q44YI6x.html#', 'https://y.qq.com/portal/album/004Ldkvp2qw8os.html#'],
        title: ['绿钻豪华版', 'MV精选', '乐谈', '音乐综艺', '独家首发']
    }
    var iLen = data.images.length,
        iNub = 0,
        iNow = 0,
        flag = true,
        iZindex = iLen,
        $li;
    var $a = $('.navList').find('a');
    var $list3d = $('.list3d'),
        $tab = $('#calendarp').find('.tab'),
        $btn_3d = $('.btn_3d');

    /*图片全部加载完成后，执行入场动画*/
    for (var i = 0; i < iLen; i++) {
        var oImg = new Image();
        oImg.src = data.images[i];
        oImg.onload = function() {
            iNub++;
            if (iNub == iLen) {
                start();
            }
        }
    }

    $tab.on('mouseenter', function() {
        $btn_3d.css({ 'opacity': '1' })
    });
    $tab.on('mouseleave', function() {
        $btn_3d.css({ 'opacity': 0 })
    });

    $a.on('click', function(ev) {
        console.log(this)
        if (this.dataset.hash == 'Calendarp') {
            start();
        }
    })

    function start() {

        var sHtml = '';
        for (var i = 0; i < iLen; i++) {
            sHtml += '<li><a href="' + data.link[i] + '" target="_blank" title="' + data.title[i] + '"></a></li>'
        }
        $list3d.html(sHtml);
        $li = $list3d.children();
        for (var i = 0; i < iLen; i++) {
            var iDeg = parseInt(Math.random() * 100) % 4 + i * 3;
            $li[i].iDeg = iDeg;
            $li[i].style.WebkitTransform = 'rotate(' + iDeg + 'deg) scale(1.5)';

            $li[i].style.backgroundImage = 'url(' + data.images[i] + ')';
            $li[i].style.zIndex = iLen - i;

        }
        setTimeout(function() {
            show($li);
        }, 300);
    }

    $btn_3d.eq(0).on('click', function() {
        if (flag) {
            flag = false;
            iNow--;
            if (iNow < 0) {
                iNow = iLen - 1;
            }
            $li.eq(iNow).css({ 'left': '-100%', 'transition': '0.6s', 'opacity': '0' });
            $li.eq(iNow).on('transitionend', transitionEnd);
        }

    });
    $btn_3d.eq(1).on('click', function() {
        if (flag) {
            flag = false;
            iNow++;
            if (iNow > iLen - 1) {
                iNow = 0;
            }
            $li.eq(iNow).css({ 'left': '100%', 'transition': '0.6s', 'opacity': '0' });
            $li.eq(iNow).on('transitionend', transitionEnd);
        }
    });

    function transitionEnd() {
        var _this = this;
        iZindex++;
        flag = true;
        $(this).off('transitionend', transitionEnd);
        $(this).css({ 'WebkitTransform': 'rotate(' + this.iDeg + 'deg) scale(1.2)', 'zIndex': '' + iZindex + '', 'transition': 'none' });
        setTimeout(function() {
            $(_this).css({ 'WebkitTransform': 'rotate(' + _this.iDeg + 'deg) scale(1)', 'left': '0', 'opacity': '1', 'transition': '0.6s' });
        }, 50)
    }

    function show(obj) {
        for (var i = 0; i < iLen; i++) {
            obj[i].style.transition = '1s ' + (iLen - i) * 300 + 'ms';
            obj[i].style.WebkitTransform = 'rotate(' + obj[i].iDeg + 'deg) scale(1)';
            obj[i].style.opacity = 1;
        }
    }
})();
