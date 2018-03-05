<%--
  Created by IntelliJ IDEA.
  User: jiangman
  Date: 2018/2/6 0006
  Time: 10:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@include file="top.jsp"%>

<!-- bootstrap table组件引用 -->
<link rel="stylesheet" href="${path}/css/bootstrap-table.min.css"/>
<!-- 导航条 -->
<div>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <!-- Jamie Jiang 用session动态加载 -->
                <a class="navbar-brand" href="#">${user.username} 's Microcosm</a>
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navigation">
                <ul class="nav navbar-nav">
                    <li><a href="${path}/toMyIndex.do">Index</a></li>
                    <li class="active" ><a href="${path}/multiTable/toMultiTableIndex.do">MultiTableOperate</a></li>
                    <li><a href="#">Daily</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Echarts3 Study(echarts3学习)<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="${path}/echartStudy/toLineStudy.do" target="_blank">Line Study(折线图学习)</a></li>
                            <li><a href="${path}/echartStudy/toBarStudy.do" target="_blank">Bar Study(柱状图学习)</a></li>
                            <li><a href="${path}/echartStudy/toScatterStudy.do" target="_blank">Scatter Study(散点图学习)</a></li>
                            <li><a href="${path}/echartStudy/toMapStudy.do" target="_blank">Map Study(地图学习)</a></li>
                            <li><a href="${path}/echartStudy/toPieStudy.do" target="_blank">Pie Study(饼图学习)</a></li>
                            <li class="divider"></li>
                            <li><a href="${path}/echartStudy/toChinaMap.do" target="_blank">china Map(中国地图)</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-cog"></span>设置</a></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">更换主题</a></li>
                            <li><a href="${path}/toEditPerMess.do">修改个人信息</a></li>
                            <li><a href="http://www.gexing.com/" target="_blank">其他</a></li>
                            <li class="divider"></li>
                            <li><a href="${path}/logout.do" target="_blank">退出登录</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
<!-- 查询条件面板 -->
<div class="panel-body" style="padding-top:75px;padding-bottom:0px;">
    <div class="panel panel-default">
        <!-- 面板标题 -->
        <div class="panel-heading">查询条件</div>
        <!-- 面板主体 -->
        <div class="panel-body">
            <form id="formSearch" class="form-horizontal">
                <!-- 把标签和控件放在一个带有 class .form-group 的 <div> 中。这是获取最佳间距所必需的。 -->
                <!-- form-group 垂直或基本表单 -->
                <div class="form-group" style="margin-top:15px">
                    <label class="control-label col-sm-1" for="txt_username">登录用户名</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="txt_username" name="username">
                    </div>
                    <label class="control-label col-sm-1" for="txt_roleId">角色名称</label>
                    <div class="col-sm-3">
                        <select class="form-control" id="txt_roleId" name="roleId" style="z-index: 1;"
                            onmousedown="if(this.options.length>10){this.size=10}" onblur="this.size=0" onchange="this.size=0">
                            <option value="">请选择</option>
                            <c:forEach items="${roleList}" var="cycle">
                                <option value="${cycle.roleId}">${cycle.roleName}</option>
                            </c:forEach>
                     </select>
                 </div>
                 <div class="col-sm-1"></div>
                 <div class="col-sm-3" style="text-align:left;">
                     <button type="button" id="btn_query" class="btn btn-primary">查询</button>
                     <button type="button" id="btn_add" class="btn btn-primary"  data-toggle="modal" data-target="#addModal">新增</button>
                     <button type="button" id="btn_reset" class="btn btn-primary">清除</button>
                 </div>
             </div>
         </form>
     </div>
 </div>
 <table id="multiTable">
 </table>
</div>

<!-- bootstrap table组件以及中文包的引用 -->
<script src="${path}/js/bootstrap-table.min.js"></script>
<script src="${path}/js/bootstrap-table-zh-CN.min.js"></script>

<!-- 页面Js文件的引用 -->
<script src="${path}/js/multiTableIndex.js"></script>

<%@include file="bottom.jsp"%>
