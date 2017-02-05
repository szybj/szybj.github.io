   /*
    * @Author: szy
    * @Date:   2016-12-29 01:51:31
    * @Last Modified by:   szybj
    * @Last Modified time: 2017-02-05 22:27:14
    *
    */
   'use strict';
   (function() {
       var win = function() {
           var setting = {
               init: function() {
                   setting.setTime();
                   setting.phone();
                   setting.plane();
                   setting.peopleTab();
                   setting.volume();
                   setting.tv();
                   setting.clickFn();
                   setting.linkInOut();
                   setting.navToggle();
                   setting.navTab();
                   setting.layOut();
                   setting.boat();

                   $(window).resize(function() {
                       setting.layOut();
                   })
               },
               /*导航菜单切换*/
               navTab: function() {

                   var $navList = $('.navList'),
                       $menuHome = $('.menuHome'),
                       flag = true,
                       hash = '';
                   hash = window.location.hash;
                   if (hash != '') {
                       $menuHome.css({
                           'left': '0px'
                       });
                       homeHide();
                   };
                   show1();
                   window.onhashchange = hide1;
                   function hide1() {
                       switch (hash) {
                           case '#About':
                               aboutHide();
                               break;
                           case '#Voiceover':
                               voiceoverHide();
                               break;
                           case '#Presenting':
                               presentingHide();
                               break;
                           case '#Calendarp':
                               calendarpHide();
                               break;
                           case '#Contact':
                               contactHide();
                               break;
                           default:
                               homeHide();
                       };
                   };
                   function show1() {
                       hash = window.location.hash;
                       switch (hash) {
                           case '#About':
                               aboutShow();
                               break;
                           case '#Voiceover':
                               voiceoverShow();
                               break;
                           case '#Presenting':
                               presentingShow();
                               break;
                           case '#Calendarp':
                               calendarpShow();
                               break;
                           case '#Contact':
                               contactShow();
                               break;
                           default:
                               homeShow();
                       };
                   };
                   function aboutShow() {
                       $('#about').show();
                       setTimeout(function() {
                           $('#about').css({ 'left': '0%', 'top': '0%' });
                       }, 100);
                   };
                   function aboutHide() {
                       $('#about').css({
                           'top': '-140%'
                       });
                       setTimeout(function() {
                           $('#about').hide();
                       }, 800);
                       show1();
                   };
                   function voiceoverShow() {
                       $('#voiceover').show();
                       setTimeout(function() {
                           $('#voiceover').css({ 'left': '0%', 'top': '0%' });
                       }, 100)
                   };
                   function voiceoverHide() {
                       $('#voiceover').css({ 'top': '-140%' });
                       setTimeout(function() {
                           $('#voiceover').hide();
                       }, 800);
                       show1();
                   };
                   function presentingShow() {
                       $('#presenting').show();
                       setTimeout(function() {
                           $('#presenting').css({ 'left': '0%', 'top': '0%' });
                       }, 100)
                   };
                   function presentingHide() {
                      $('#presenting').css({ 'top': '-140%' });
                      setTimeout(function() {
                           $('#presenting').hide();
                      }, 800);
                      show1();
                  };
                  function calendarpShow() {
                      $('#calendarp').show();
                      setTimeout(function() {
                          $('#calendarp').css({ 'left': '0%', 'top': '0%' });
                      }, 100)
                    };
                   function calendarpHide() {
                       $('#calendarp').css({ 'top': '-140%' });
                       setTimeout(function() {
                           $('#calendarp').hide();
                       }, 800);
                       show1();
                   };
                   function contactShow() {
                       $('#contact').show();
                       setTimeout(function() {
                           $('#contact').css({ 'top': '0%' });
                       }, 50);
                       $('#home').css({ 'top': '-100%' });
                       setTimeout(function() {
                           $('#home').hide();
                       }, 800);
                   };
                   function contactHide() {
                       $('#contact').css({ 'top': '140%' });
                       $('#home').css({ 'top': '0%' });
                       setTimeout(function() {
                           $('#contact').hide();
                       }, 800);
                       show1();
                   };
                   function homeShow() {
                       $('#home').show()
                       setTimeout(function() {
                           $('#home').css({ 'top': '0%' });
                       }, 100)
                   };
                   function homeHide() {
                       $('#home').css({ 'top': '100%' });
                       setTimeout(function() {
                           $('#home').hide();
                       }, 800);
                       $('.boxWrap').css('top','0%')
                       show1();
                   };
                   $menuHome.click(function() {
                       $navList.find('a').removeClass('active');
                       window.location.hash = '';
                       $(this).css({
                           'left': '36px'
                       })
                       $('#home').show()
                       setTimeout(function() {
                           $('#home').css({ 'transform': 'translateY(0%)' });
                       }, 30)
                   })
                   $navList.find('a').click(function(ev) {
                       var navH = $('#nav').height();
                       $(this).addClass('active').parent().siblings().find('a').removeClass('active');
                       ta();
                       //setting.navToggle();
                       $('.onOff').find('.close').css('opacity', 0);
                       $('.onOff').find('.open').css('opacity', 1);
                       $('.onOff').find('ul').css('left', 0);
                       $menuHome.css({
                           'transition': '0.5s',
                           'left': '0px'
                       });
                       ev.stopPropagation();
                   });
               },
               /*导航菜单的显示隐藏*/
               navToggle: function() {
                   var $menuOnOff = $('#menu').find('.onOff');
                   var navH = $('#nav').height();
                   var navOn = true;
                   moveTop();
                   $(window).resize(function() {
                       moveTop();
                   });

                   function moveTop() {
                       navH = $('#nav').height();
                       if (navOn) {
                           if ($(window).width() < 450) {
                               navH += 100;
                           }
                           $('nav').css('transition', 'none');
                           $('#nav').css('transform', 'translateY(' + -navH + 'px)');
                       } else {
                           if ($(window).width() < 450) {
                               navH += 100;
                           }
                       }
                   }
                   $menuOnOff.on('click', tab);

                   function tab() {
                       $('nav').css('transition', 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.1)');
                       if (navOn) {
                           $('.onOff').find('.close').css('opacity', 1);
                           $('.onOff').find('.open').css('opacity', 0);
                           $('.onOff').find('ul').css('left', -31);
                           $('#nav').css('transform', 'translateY(0px)');
                           /* $('#nav').css('display','block');*/
                       } else {
                           $('.onOff').find('.close').css('opacity', 0);
                           $('.onOff').find('.open').css('opacity', 1);
                           $('.onOff').find('ul').css('left', 0);
                           $('#nav').css('transform', 'translateY(' + -navH + 'px)');
                           /*  $('#nav').css('display','none');*/
                       }
                       navOn = !navOn;
                       return tab;
                   }
                   window.ta = tab;
               },
               /*链接移入移出*/
               linkInOut: function() {
                   var $link = $('.link');
                   $link.on('mouseover', function() {
                       $(this).css('backgroundPositionX', -187);
                       $(this).prev().css({
                           'backgroundPositionX': -287,
                           "transform": "translate(60px,-180px)"
                       });
                   });

                   $link.on('mouseout', function() {
                       $(this).css('backgroundPositionX', -86);
                       $(this).prev().css({
                           'backgroundPositionX': -58,
                           "transform": "translate(60px,-178px)"
                       });
                   });
               },
               //点击抖动掉落
               clickFn: function() {
                   var $d = $('.d');
                   $('.d').on('mouseover', moveDown);
                   $('.d').on('mouseout', moveUp);

                   function moveDown() {
                       $(this).css({
                           'transition': 'all 0.15s linear',
                           'transform': 'translateY(10px)'
                       });
                       //$(this).toggleClass('moveDown');
                   }

                   function moveUp() {
                       //console.log(this)
                       var _this = this;
                       this.timer = setTimeout(function() {
                           $(_this).css({
                               'transition': 'all 0.15s linear',
                               'transform': 'translateY(0px)'
                           });
                       }, 500);
                   }
                   /*点击下落*/
                   $.each($d, function(i, item) {
                       $(item).on('click', function() {
                           var _this = this;
                           $(this).off('mouseout', moveDown);
                           $(this).off('mouseout', moveUp);
                           $(this).css({
                               'transition': 'all 0.6s ease-out',
                               'transform': 'translateY(200px)'
                           });
                           $(_this).timer = setTimeout(function() {
                               $(_this).css({
                                   'transform': 'translateY(0px)'
                               })
                               $(_this).on('mouseout', moveDown);
                               $(_this).on('mouseout', moveUp);
                           }, 3000);
                       })
                   });
               },
               /* 日期*/
               setTime: function() {
                   setInterval(setHM, 1000);
                   setHM();

                   function setHM() {
                       var date = new Date(),
                           year = date.getFullYear(),
                           day = date.getDate(),
                           hour = date.getHours(),
                           minutes = date.getMinutes();
                       $('.h').css({
                           'transform': 'rotate(' + ((hour % 12) * 30 - 90 + (minutes / 60 * 30)) + 'deg)'
                       })
                       $('.m').css({
                           'transform': 'rotate(' + (minutes * 6 - 180) + 'deg)'
                       })

                       $('.number').css('transform', 'translateY(' + (1 - day) * 28 + 'px)');
                   }

               },
               /*手机*/
               phone: function() {
                   var flag = true;
                   setInterval(function() {
                       if (flag) {
                           $('.bg29').css('transform', 'translateX(-29px)');
                       } else {
                           $('.bg29').css('transform', 'translateX(0px)');
                       }
                       flag = !flag;
                   }, 4000);
               },
               /*电视*/
               tv: function() {
                   var flag = true;
                   setInterval(function() {
                       if (flag) {
                           $('.bg24').css('transform', 'translateY(100%)');
                       } else {
                           $('.bg24').css('transform', 'translateY(0%)');
                       }
                       flag = !flag;
                   }, 2000);
               },
               /*音量*/
               volume: function() {
                   var flag = true;
                   setInterval(function() {
                       if (flag) {
                           $('.con46').css('transform', 'translateY(100%)');
                       } else {
                           $('.con46').css('transform', 'translateY(0%)');
                       }
                       flag = !flag;
                   }, 2000);
               },
               /*飞机*/
               plane: function() {
                   var n = 1;
                   var isPlane = true; //运动状态
                   $('.planePic').mouseover(function() {
                       var _this = this;
                       if (!isPlane) {
                           return 0
                       };
                       isPlane = false;
                       $(this).css({
                           'transform': 'rotate(' + n * 360 + 'deg)',
                           'transform-origin': 'bottom',
                           'animation-play-state': ' paused',
                           'transition': 'transform 2s linear'
                       });

                       function transitionEnd() {
                           $(_this).css({
                               'animation-play-state': ' running'
                           });
                           isPlane = true;
                           n++;
                           $(_this).off('transitionend', transitionEnd);
                       }
                       $(this).on('transitionend', transitionEnd);
                   })
               },
               /*头像切换*/
               peopleTab: function() {
                   //产生随机数[n,m)
                   function ranDom(n, m) {
                       return parseInt(Math.random() * (m - n)) + n;
                   }
                   setInterval(function() {
                       $('.picTop').css('transform', 'translateX(' + -ranDom(0, 5) * 44 + 'px)');
                   }, 3500);
                   setInterval(function() {
                       $('.picBottom').css('transform', 'translateX(' + -ranDom(0, 5) * 44 + 'px)');
                   }, 3000);
               },
               /*布局转换*/
               layOut: function() {
                   var clientWidth = $(window).width();

                   if (clientWidth > 1021) {

                       $('.seaF').css({
                           'height': '100px'
                       })

                       $('.wrap').css({
                           'width': '925px',
                           'marginLeft': '-462px'
                       })
                       $('.c1').css({
                           'top': '0px',
                           'left': '0px'
                       })
                       $('.c2').css({
                           'top': '0px',
                           'left': '185px'
                       })
                       $('.c3').css({
                           'top': '0px',
                           'left': '370px'
                       })
                       $('.c4').css({
                           'top': '0px',
                           'left': '555px'
                       })
                       $('.c5').css({
                           'top': '0px',
                           'left': '740px'
                       })
                   } else if (801 < clientWidth && clientWidth < 1020) {
                       $('.seaF').css({
                           'height': '360px'
                       })
                       $('.wrap').css({
                           'width': '740px',
                           'marginLeft': '-370px'
                       })
                       $('.c1').css({
                           'top': '0px',
                           'left': '0px'
                       })
                       $('.c2').css({
                           'top': '0px',
                           'left': '185px'
                       })
                       $('.c3').css({
                           'top': '0px',
                           'left': '370px'
                       })
                       $('.c4').css({
                           'top': '0px',
                           'left': '555px'
                       })
                       $('.c5').css({
                           'left': '277px',
                           'top': '270px'
                       })
                   } else if (620 < clientWidth && clientWidth < 800) {
                       $('.seaF').css({
                           'height': '360px'
                       })
                       $('.wrap').css({
                           'width': '554px',
                           'marginLeft': '-277px'
                       })
                       $('.c1').css({
                           'top': '0px',
                           'left': '0px'
                       })
                       $('.c2').css({
                           'top': '0px',
                           'left': '185px'
                       })
                       $('.c3').css({
                           'top': '0px',
                           'left': '370px'
                       })
                       $('.c4').css({
                           'left': '92px',
                           'top': '270px'
                       })
                       $('.c5').css({
                           'left': '277px',
                           'top': '270px'
                       })
                   } else if (451 < clientWidth && clientWidth < 619) {
                       $('.wrap').css({
                           'width': '370px',
                           'marginLeft': '-185px'
                       })
                       $('.seaF').css({
                           'height': '640px'
                       })
                       $('.c1').css({
                           'top': '0px',
                           'left': '0px'
                       })
                       $('.c2').css({
                           'top': '0px',
                           'left': '185px'
                       })
                       $('.c3').css({
                           'left': '0px',
                           'top': '270px'
                       })
                       $('.c4').css({
                           'left': '185px',
                           'top': '270px'
                       })
                       $('.c5').css({
                           'left': '92px',
                           'top': '540px'
                       })
                   } else if (clientWidth < 450) {
                       $('.wrap').css({
                           'width': '185px',
                           'marginLeft': '-92px'
                       })
                       $('.seaF').css({
                           'height': '1160px'
                       })
                       $('.c1').css({
                           'top': '0px',
                           'left': '0px'
                       })
                       $('.c2').css({
                           'left': '0px',
                           'top': '270px'
                       })
                       $('.c3').css({
                           'left': '0px',
                           'top': '540px'
                       })
                       $('.c4').css({
                           'left': '0px',
                           'top': '810px'
                       })
                       $('.c5').css({
                           'left': '0px',
                           'top': '1080px'
                       })
                   }
               },
               boat: function() {
                   var timer = null;
                   var flag = true;
                   var $boat = $('.boat');
                   var $bigBoat = $('.bigBoat');
                   lean($boat);
                   lean($bigBoat);

                   function lean(obj) {
                       obj.on('mouseover', function() {
                           var _this = this;
                           if (flag) {
                               flag = !flag;
                               clearTimeout(this.timer);
                               $(this).css({
                                   'transformOrigin': '50% 90%',
                                   'transition': '2s',
                                   'transform': 'rotate(-10deg)'
                               });
                               this.timer = setTimeout(function() {
                                   console.log(_this.timer)
                                   $(_this).css({
                                       'transition': '2s',
                                       'transform': 'rotate(10deg)'
                                   });
                               }, 1000);
                               this.timer = setTimeout(function() {
                                   console.log(_this.timer)
                                   $(_this).css({
                                       'transition': '2s',
                                       'transform': 'rotate(0deg)'
                                   });
                                   flag = !flag;
                               }, 2000);
                           }
                       })
                   }
               }

           }
           return setting.init();
       }
       window.w = win;
   })(window);
