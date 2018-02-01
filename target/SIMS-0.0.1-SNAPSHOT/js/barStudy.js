/**
 * 标准柱状图
 */
// 基于准备好的dom，初始化echarts实例
		var $v1 = $("#main1") ; //$('#id')这种获取的是jQuery对象,而echarts需要的是dom对象，所以需要如下转换 
		var v1 = $v1[0]; //DOM对象 
        var myChart1 = echarts.init(v1);
        //当然完全可以这样写,上面只是转换一下,多学一个知识点
        //var myChart1 = echarts.init(document.getElementById('main1'));

        // 指定图表的配置项和数据
        var option1 = {
            title: {
            	x: 'center',
                text: '这是标题title效果center位置',
                //subtext看样子是会随着标题的text位置改变而改变位置的
                subtext: '我是小标题'
            },
            //tooltip触发方式:axis以X轴线触发,item以每一个数据项触发  
            //tooltip下的trigger,当trigger为'item'时只会显示该点的数据，为'axis'时显示该列下所有坐标轴所对应的数据。
            tooltip: {
            	trigger: 'axis',
            	//axisPointer下的type,当type为'none'会去掉轴线
            	axisPointer: {
                    type:'none'
                }
            },
            legend: {
            	y: 35,
                data: ['我是legend小方框1','我是legend小方框2']
            },
            xAxis: {
            	name: '我是X轴是什么',
            	type: 'category',//category是类别,value是数
                data: ["X轴坐标点1","\nX轴坐标点2","X轴坐标点3","\nX轴坐标点4","X轴坐标点5","\nX轴坐标点6"]
            },
            yAxis: {
            	name: '我是Y轴是什么',
            	type: 'value'
            },
            series: [{
                name: '我是legend小方框1',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },{
            	name: '我是legend小方框2',
                type: 'bar',
                data: [10, 2, 30, 3, 5, 2]
            }]
        };
        //清空画布,防止缓存
        myChart1.clear();
        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
