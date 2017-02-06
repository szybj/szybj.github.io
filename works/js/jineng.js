/*
 * @Author: szybj
 * @Date:   2017-02-04 13:38:32
 * @Last Modified by:   szybj
 * @Last Modified time: 2017-02-06 19:04:52
 */

'use strict';
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {

     /*   textStyle: {
            color: 'rgba(255, 255, 255, 0.8)'
        },*/
        title: {
            text: '个人专业技能',
            subtext: '前端方向',
            x: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle:{
                color:'#fff'
            },
            data: ['HTML/CSS', 'JavaScript', 'Ajax','React','Vue', 'Java','C']
          /*
          //单独设置样式
          data: [{
               name: '直接访问',
               // 强制设置图形为圆。
               //icon: 'circle',
               // 设置文本为红色
               textStyle: {
                   color: 'red'
               }
           }]*/
        },
        series: [{
            name: '专业技能',
            type: 'pie',
            radius: '55%',
            center: ['52%', '50%'],
            data: [
                { value: 835, name: 'HTML/CSS' },
                { value: 1010, name: 'JavaScript' },
                { value: 234, name: 'Ajax' },
                { value: 135, name: 'React' },
                { value: 300, name: 'Vue' },
                { value: 235, name: 'Java' },
                { value: 135, name: 'C' },

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 1)'
                },
                normal: {
                    // 阴影的大小
                    shadowBlur: 100,
                    // 阴影水平方向上的偏移
                    shadowOffsetX: 0,
                    // 阴影垂直方向上的偏移
                    shadowOffsetY: 0,
                    // 阴影颜色
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    //随机的颜色
                    color: function (){
                        var c = "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
                        console.log(c)
                     return  c;
                     }
                }
            }
        }]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();
