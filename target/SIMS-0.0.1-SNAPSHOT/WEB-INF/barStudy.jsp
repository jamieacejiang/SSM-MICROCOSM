<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="top.jsp"%>
<!-- 导航条 -->
<!--此处引用navbarEcharts.js-->                                                                                                                                          
<script src="${path}/js/navbarEcharts.js"></script>
<!-- 试试刚学的echars.js,练练手 -->
<div id="echarsStudy" style="margin:0 auto;">
	<!-- 标准柱状图----为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main1" style="width: 1000px;height:400px;algin:center">
	</div>
</div>

<script src="${path}/js/echarts.js"></script>
<script src="${path}/js/barStudy.js"></script>

<%@ include file="bottom.jsp" %>