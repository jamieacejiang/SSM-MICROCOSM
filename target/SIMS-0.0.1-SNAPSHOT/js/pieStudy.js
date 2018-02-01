/**
 * 饼图
 */
var weatherIcons = {
    'Sunny': './images/weather/sunny_128.png',
    'Cloudy': './images/weather/cloudy_128.png',
    'Showers': './images/weather/showers_128.png'
};
// 基于准备好的dom，初始化echarts实例
		var $v6 = $("#main6") ; //$('#id')这种获取的是jQuery对象,而echarts需要的是dom对象，所以需要如下转换 
		var v6 = $v6[0]; //DOM对象 
        var myChart6 = echarts.init(v6);
        //当然完全可以这样写,上面只是转换一下,多学一个知识点
        //var myChart6 = echarts.init(document.getElementById('main6'));

        // 指定图表的配置项和数据
        var option6 = {
	    		title: {
	    	        text: '天气情况统计',
	    	        subtext: '虚构数据',
	    	        left: 'center'
	    	    },
	    	    tooltip : {
	    	        trigger: 'item',
	    	        //折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
	    	        //散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
	    	        //地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
	    	        //饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
	    	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    	        //系列名称a对应的试试下面series的name 此处series中没有对name进行设置 所以页面显示为-
	    	    },
	    	    legend: {
	    	        //orient: 'vertical',
	    	        //top: 'middle',
	    	        bottom: 10,
	    	        left: 'center',
	    	        data: ['西凉', '益州','兖州','荆州','幽州']
	    	    },
	    	    series : [
	    	        {
	    	        	//name:'哈哈哈',
	    	            type: 'pie',
	    	            //饼图的半径，数组的第一项是内半径，第二项是外半径。
	    	            //支持设置成百分比，相对于容器高宽中较小的一项的一半。
	    	            radius : '65%',//饼图的半径
	    	            //center 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
	    	            //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
	    	            center: ['50%', '50%'],
	    	            //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'，'multiple'，分别表示单选还是多选。
	    	            selectedMode: 'single',
	    	            data:[
	    	                {
	    	                    value:1548,
	    	                    name: '幽州',
	    	                    icon: '',
	    	                    label: {
	    	                        normal: {
	    	                            formatter: [//这里面的title abg啥的都是对应下面rich的样式的,rich就是这么规定这么写的
	    	                                '{title|{b}}{abg|}',
	    	                                '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
	    	                                '{hr|}',
	    	                                '  {Sunny|}{value|202}{rate|55.3%}',
	    	                                '  {Cloudy|}{value|142}{rate|38.9%}',
	    	                                '  {Showers|}{value|21}{rate|5.8%}'
	    	                            ].join('\n'),
	    	                            backgroundColor: '#eee',
	    	                            borderColor: '#777',
	    	                            borderWidth: 1,
	    	                            borderRadius: 4,//文字块的圆角
	    	                            //在 rich 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。
	    	                            rich: {
	    	                                title: {
	    	                                    color: '#eee',
	    	                                    align: 'center'
	    	                                },
	    	                                abg: {
	    	                                    backgroundColor: '#333',
	    	                                    width: '100%',
	    	                                    align: 'right',
	    	                                    height: 25,
	    	                                    borderRadius: [4, 4, 0, 0]
	    	                                },
	    	                                Sunny: {
	    	                                    height: 30,
	    	                                    align: 'left',
	    	                                    backgroundColor: {
	    	                                        image: weatherIcons.Sunny
	    	                                    }
	    	                                },
	    	                                Cloudy: {
	    	                                    height: 30,
	    	                                    align: 'left',
	    	                                    backgroundColor: {
	    	                                    	image: weatherIcons.Cloudy
	    	                                    }
	    	                                },
	    	                                Showers: {
	    	                                    height: 30,
	    	                                    align: 'left',
	    	                                    backgroundColor: {
	    	                                        image: weatherIcons.Showers
	    	                                    }
	    	                                },
	    	                                weatherHead: {
	    	                                    color: '#333',
	    	                                    height: 24,
	    	                                    align: 'left'
	    	                                },
	    	                                hr: {
	    	                                    borderColor: '#777',
	    	                                    width: '100%',
	    	                                    borderWidth: 0.5,
	    	                                    height: 0
	    	                                },
	    	                                value: {
	    	                                    width: 20,
	    	                                    padding: [0, 20, 0, 30],
	    	                                    align: 'left'
	    	                                },
	    	                                valueHead: {
	    	                                    color: '#333',
	    	                                    width: 20,
	    	                                    padding: [0, 20, 0, 30],
	    	                                    align: 'center'
	    	                                },
	    	                                rate: {
	    	                                    width: 40,
	    	                                    align: 'right',
	    	                                    padding: [0, 10, 0, 0]
	    	                                },
	    	                                rateHead: {
	    	                                    color: '#333',
	    	                                    width: 40,
	    	                                    align: 'center',
	    	                                    padding: [0, 10, 0, 0]
	    	                                }
	    	                            }
	    	                        }
	    	                    }
	    	                },
	    	                {value:535, name: '荆州'},
	    	                {value:510, name: '兖州'},
	    	                {value:634, name: '益州'},
	    	                {value:735, name: '西凉'}
	    	            ],
	    	            itemStyle: {
	    	                emphasis: {
	    	                    shadowBlur: 10,//文字块的背景阴影长度。
	    	                    shadowOffsetX: 0,//文字块的背景阴影 X 偏移。
	    	                    shadowColor: 'rgba(0, 0, 0, 0.5)'//文字块的背景阴影颜色。
	    	                }
	    	            }
	    	        }
	    	    ]
        	};
        //清空画布,防止缓存
        myChart6.clear();
        // 使用刚指定的配置项和数据显示图表。
        myChart6.setOption(option6);
        