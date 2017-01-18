   /*
    * @Author: szy
    * @Date:   2016-12-29 01:51:31
    * @Last Modified by:   szybj
    * @Last Modified time: 2017-01-18 22:56:07
    *
   'use strict';


    /*导航菜单*/
    (function(){

    var $menuHome = $('#menuHome');
    var $a = $('.navList').find('a');
    $a.on('click',function(){
        $(this).addClass('active').siblings('a').removeClass('active');
        console.log($('.menuHome').position());
        if($('.menuHome').position().left === 81){
            $('.menuHome').css({
                'transform':'translateX(0px)',
                'transition':'all 0.35s ease-out'
            });
        }
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
    });
    })();
    /*导航菜单的显示隐藏*/
    ;(function(){
        var $menuOnOff = $('#menu').find('.onOff');
        var navH = $('#nav').height();
        var navOn = true;
        moveTop();
        $(window).resize(function(){
            moveTop();
        });
        function moveTop(){
            navH = $('#nav').height();
            if(navOn){
                if($(window).width()<450){
                    navH+=100;
                }
                $('nav').css('transition','none');
                $('#nav').css('transform','translateY('+-navH+'px)');
            }else{
                if($(window).width()<450){
                    navH+=100;
                }
            }
        }
        $menuOnOff.click(function(){

            $('nav').css('transition','all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.1)');
            if(navOn){
                $('.onOff').find('.close').css('opacity',1);
                $('.onOff').find('.open').css('opacity',0);
                $('.onOff').find('ul').css('left',-31);
                $('#nav').css('transform','translateY(0px)');
                /* $('#nav').css('display','block');*/
            }else{
                $('.onOff').find('.close').css('opacity',0);
                $('.onOff').find('.open').css('opacity',1);
                $('.onOff').find('ul').css('left',0);
                $('#nav').css('transform','translateY('+-navH+'px)');
              /*  $('#nav').css('display','none');*/
            }
            navOn = !navOn;
        });
    })();
    /*链接移入移出*/
    (function(){
        var $link = $('.link');
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
    })();
    /*变换位置*/
    (function(){
        toggle();
        $(window).resize(function(){
            toggle();
        })
        function toggle(){
            var clientWidth = $(window).width();
            console.log(clientWidth)
            if(clientWidth > 1021){
                $('.seaF').css('height','100px');
                $('.wrap').css({
                    'width':'925px',
                    'marginLeft': '-462px'
                })
                $('.c1').css({
                    'top':'0px',
                    'left':'0px'
                })
                $('.c2').css({
                    'top':'0px',
                    'left':'185px'
                })
                $('.c3').css({
                    'top':'0px',
                    'left':'370px'
                })
                $('.c4').css({
                    'top':'0px',
                    'left':'555px'
                })
                $('.c5').css({
                    'top':'0px',
                    'left':'740px'
                })
            }else if( 801 < clientWidth &&  clientWidth< 1020){
                $('.seaF').css({
                       'height':'360px'
                   })
                 $('.wrap').css({
                     'width':'740px',
                     'marginLeft':'-370px'
                 })
                 $('.c1').css({
                     'top':'0px',
                     'left':'0px'
                 })
                 $('.c2').css({
                     'top':'0px',
                     'left':'185px'
                 })
                 $('.c3').css({
                     'top':'0px',
                     'left':'370px'
                 })
                 $('.c4').css({
                     'top':'0px',
                     'left':'555px'
                 })
                 $('.c5').css({
                     'left':'277px',
                     'top':'270px'
                 })
            }else if( 620 < clientWidth &&  clientWidth < 800){
                $('.seaF').css({
                    'height':'360px'
                })
                $('.wrap').css({
                    'width':'554px',
                    'marginLeft':'-277px'
                })
                $('.c1').css({
                    'top':'0px',
                    'left':'0px'
                })
                $('.c2').css({
                    'top':'0px',
                    'left':'185px'
                })
                $('.c3').css({
                    'top':'0px',
                    'left':'370px'
                })
                $('.c4').css({
                    'left':'92px',
                    'top':'270px'
                })
                $('.c5').css({
                    'left':'277px',
                    'top':'270px'
                })
            }else if( 451 < clientWidth &&  clientWidth < 619){
                $('.wrap').css({
                    'width':'370px',
                    'marginLeft':'-185px'
                })
                $('.seaF').css({
                    'height':'640px'
                })
                $('.c1').css({
                    'top':'0px',
                    'left':'0px'
                })
                $('.c2').css({
                    'top':'0px',
                    'left':'185px'
                })
                $('.c3').css({
                    'left':'0px',
                    'top':'270px'
                })
                $('.c4').css({
                    'left':'185px',
                    'top':'270px'
                })
                $('.c5').css({
                    'left':'92px',
                    'top':'540px'
                })
            }else if( clientWidth < 450){
                $('.wrap').css({
                    'width':'185px',
                    'marginLeft':'-92px'
                })
                $('.seaF').css({
                    'height':'1160px'
                })
                $('.c1').css({
                    'top':'0px',
                    'left':'0px'
                })
                $('.c2').css({
                    'left':'0px',
                    'top':'270px'
                })
                $('.c3').css({
                    'left':'0px',
                    'top':'540px'
                })
                $('.c4').css({
                    'left':'0px',
                    'top':'810px'
                })
                $('.c5').css({
                    'left':'0px',
                    'top':'1080px'
                })
            }
        }
    })();
    /*滑过下降*/
    (function(){
        var $d = $('.d');
        $('.d').on('mouseover',moveDown);
        function moveDown(){
            $(this).css({
                'transition':'all 0.05s ease-out',
                'transform':'translateY(10px)'
              });
           //$(this).toggleClass('moveDown');
        }
        $('.d').on('mouseout', moveUp);
        function moveUp(){
           //console.log(this)
            var _this = this;
            setTimeout(function(){
                $(_this).css({
                    'transition':'all 0.35s ease-out',
                    'transform':'translateY(0px)'
                });
            },500);

        }

        //点击抖动掉落

        $.each($d,function(i,item){
            $(item).on('click',function(){
                var _this = this;
                $(this).off('mouseout',moveDown);
                $(this).off('mouseout',moveUp);
                 $(this).css({
                    'transition':'all 0.6s ease-out',
                        'transform':'translateY(100%)'
                    });
                $(_this).timer = setTimeout(function(){
                    $(_this).css({
                        'transform':'translateY(0%)'
                    })
                    $(_this).on('mouseout',moveDown);
                    $(_this).on('mouseout',moveUp);
                },3000);
            })
        });
    })();

    var date = new Date();
        var setting = {
            year:date.getFullYear(),
            day :date.getDate()
        }
   /* 日期*/
   ;(function(){
        /* 设置时间*/

        $('.number').css('transform', 'translateY('+(1-setting.day)*28+'px)');
   })();
    /*手机*/
    (function(){
        var flag = true;
        setInterval(function(){
            if(flag){
                $('.bg29').css('transform', 'translateX(-29px)');
            }else{
                 $('.bg29').css('transform', 'translateX(0px)');
            }
            flag = !flag;
        },4000);
    })();
    /*飞机*/
    (function(){
        var n = 1;
        var isPlane = true;//运动状态
        $('.planePic').mouseover(function(){

            var _this = this;
            if(!isPlane){
                return 0
            };
            isPlane = false;
            $(this).css({
                'transform':'rotate('+n*360+'deg)',
                'transform-origin':'bottom',
                'animation-play-state':' paused',
                'transition':'transform 2s linear'
            });

            function transitionEnd(){

                $(_this).css({
                    'animation-play-state':' running'
                });
                isPlane = true;
                n++;
                $(_this).off('transitionend', transitionEnd);
            }
           $(this).on('transitionend', transitionEnd);
        })
    })();
     /*产生随机数[n,m)*/
    function ranDom(n,m){
        return parseInt(Math.random()*(m-n))+n;
    }
    /* 电视*/
    (function(){
        var flag = true;
        setInterval(function(){
            if(flag){
                $('.bg24').css('transform', 'translateY(100%)');
            }else{
                 $('.bg24').css('transform', 'translateY(0%)');
            }
            flag = !flag;
        },2000);
    })();

    /*音量*/
    (function(){
        var flag = true;
        setInterval(function(){
            if(flag){
                $('.con46').css('transform', 'translateY(100%)');
            }else{
                 $('.con46').css('transform', 'translateY(0%)');
            }
            flag = !flag;
        },2000);
    })();

    /*头像切换*/
    (function(){
        setInterval(function(){
            $('.picTop').css('transform','translateX('+-ranDom(0,5) * 44+'px)');
        },3500);
        setInterval(function(){
            $('.picBottom').css('transform','translateX('+-ranDom(0,5) * 44+'px)');
         },3000);
    })();





