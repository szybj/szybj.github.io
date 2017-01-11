   /*
    * @Author: szy
    * @Date:   2016-12-29 01:51:31
    * @Last Modified by:   szybj
    * @Last Modified time: 2017-01-10 02:27:19
    */
    (function(){
    var $box = $('.box');
    var navOn = true;
    var mFlag = true;
    var $menu = $('#menu').find('.onOff');
    var $link = $('.link');
    var $menuHome = $('#menuHome');
    var $content = $('.content');
    var $d = $('.d');
    var $a = $('.navList').find('a');

    $.each($a,function(i,item){
        $(item).on('click',function(){
            $(this).addClass('active').siblings('a').removeClass('active');
            $('.menuHome').css({
                'transform':'translateX(0px)',
                'transition':'all 0.35s ease-out'
            });
        })
    })
    $a.eq(0).on('click',function(){


        $('#home').css('top','100%');
        $('#about').css('top','0%');
    });
    $a.eq(1).on('click',function(){
        $('#home').css('top','100%');
        $('#voiceover').css('top','0%');
    });
    $a.eq(2).on('click',function(){
        $('#home').css('top','100%');
        $('#presenting').css('top','0%');
    });
    $a.eq(3).on('click',function(){
        $('#home').css('top','100%');
        $('#calendar').css('top','0%');
    });
    $a.eq(4).on('click',function(){
        $('#home').css({
            'top':'-100%'
        })

        $('#contact').css({
            'display':'block',
            'top':'0%'
        })
    });
    $menuHome.on('click',function(){
        console.log($('#home').position());
        $('.menuHome').css({
            'transform':'translateX(36px)',
            'transition':'all 0.35s ease-out'
        });
        $('#about').css('top','-100%');
        $('#voiceover').css('top','-100%');
        $('#presenting').css('top','-100%');
        $('#calendar').css('top','-100%');
        $('#contact').css({
            'display':'none'
        }).css({
            'top':'100%'
        });
        $('#home').css({
            'display':'block',
            'top':'0%'
        });
    })
    //设置时间
    var date = new Date();
    var setting = {
        year:date.getFullYear(),
        day :date.getDate()
    }

    $menu.click(function(){
       var navH = $('#nav').height();
        if(navOn){
            $('.onOff').find('.close').css('opacity',1);
            $('.onOff').find('.open').css('opacity',0);
            $('.onOff').find('ul').css('left',-31);
            $('#nav').css('display','block');
            $('#nav').css('top',0);
        }else{

            $('.onOff').find('.close').css('opacity',0);
            $('.onOff').find('.open').css('opacity',1);
            $('.onOff').find('ul').css('left',0);
            $('#nav').css('top',-navH);
            $('#nav').css('display','none');
        }
        navOn = !navOn;
    });

    /*链接移入移出*/
    $link.on('mouseover',function(){

          $(this).css('backgroundPositionX',-187);
          $(this).prev().css({
            'backgroundPositionX':-287,
            "transform":"translate(60px,-180px)"
          });
    });

    $link.on('mouseout',function(){
          $(this).css('backgroundPositionX',-86);
          $(this).prev().css({
            'backgroundPositionX':-58,
            "transform":"translate(60px,-178px)"
          });
    });

        $('.content').find('.d').on('mouseover',function(){
           $(this).css({
                  'transform':'translateY(10px)'
              });
           //$(this).toggleClass('moveDown');
        });
        $('.content').find('.d').on('mouseout',function(){
            $(this).css({
                  'transform':'translateY(0px)'
              });

        });


    //点击抖动掉落
    var timer = null;
    $.each($d,function(i,item){
        $(item).on('click',function(){
             _this = $(this);
             $(this).css({
                    'opacity':0,
                    'transform':'translateY(100%)'
                });
            _this.timer = setTimeout(function(){
                _this.css({
                    'opacity':1,
                    'transform':'translateY(0%)'
                })
            },1000);
            console.log(_this)
        })
    });

    //日期
    $('.number').css('transform', 'translateY('+(1-setting.day)*28+'px)');
    //手机
    var flag = true;
    setInterval(function(){
        if(flag){
            $('.bg29').css('transform', 'translateX(-29px)');
        }else{
             $('.bg29').css('transform', 'translateX(0px)');
        }
        flag = !flag;
    },4000);
    //电视
    setInterval(function(){
        if(flag){
            $('.bg24').css('transform', 'translateY(100%)');
        }else{
             $('.bg24').css('transform', 'translateY(0%)');
        }
        flag = !flag;
    },2000);
    //音量
    setInterval(function(){
        if(flag){
            $('.con46').css('transform', 'translateY(100%)');
        }else{
             $('.con46').css('transform', 'translateY(0%)');
        }
        flag = !flag;
    },2000);

    //飞机

    var n = 0;
    var isPlane = true;
    $('.plane').find('.planePic').on('mouseover',function(){

         _thisx = $(this);
        if(isPlane){
            isPlane = !isPlane;
            n++;
            setTimeout(function(){
                isPlane = !isPlane;
            },5000)
        }

        $(this).css({
            'transform':'rotate('+n*360+'deg)',
            'transform-origin':'bottom',
            'animation-play-state':' paused',
            'transition':'transform 5s linear'
        });

    });
    $('.plane').find('.planePic').on('mouseout',function(){
        _this =  $(this);
        setTimeout(function(){
            if(isPlane){
                _this.css({
                    'animation-play-state':' running'
                })
            }
        },5000)

    })

     //生成0~5的随机数
     function ranDom(){
        return Math.floor(Math.random() * 5);
     }

    setInterval(function(){
        $('.picTop').css('transform','translateX('+-ranDom() * 44+'px)');
    },3500);
    setInterval(function(){
        $('.picBottom').css('transform','translateX('+-ranDom() * 44+'px)');
     },3000);

    })()

