<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 暂时先不做移动端折叠的导航条 -->
<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0">   -->
<title>杰米儿姜的小宇宙</title>

<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="css/bootstrap.min.css">
 
<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<!-- <link rel="stylesheet" href="css/bootstrap-theme.min.css"> -->

<link rel="stylesheet" href="css/myIndex.css">

</head>
<body style="background-image:url(images/body-bg.png);background-repeat:repeat 0 0;display: block;overflow-x:hidden;overflow-y:auto;">
<!-- 导航条 -->
<!--此处引用navbarEcharts.js-->                                                                                                                                          
<script src="js/navbarEcharts.js"></script>
<!-- 试试刚学的echars.js,练练手 -->
<div id="echarsStudy" style="margin:0 auto;">
 	<!-- 标准散点图----为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main6" style="width: 1000px;height:400px;">
	</div>
</div>


</body>

<!-- jQuery文件，务必在bootstrap.min.js 之前引入 -->  
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/echarts.js"></script>
<script src="js/pieStudy.js"></script>
</html>