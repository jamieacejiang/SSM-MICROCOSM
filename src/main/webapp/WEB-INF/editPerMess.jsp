<%--
  Created by IntelliJ IDEA.
  User: jiangman
  Date: 2018/2/5 0005
  Time: 10:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"  pageEncoding="UTF-8"%>
<%@include file="top.jsp"%>
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
                    <li><a href="toMyIndex.do">Index</a></li>
                    <li><a href="#">MultiTableOperate</a></li>
                    <li><a href="#">Daily</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Echarts3 Study(echarts3学习)<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="echartStudy/toLineStudy.do" target="_blank">Line Study(折线图学习)</a></li>
                            <li><a href="echartStudy/toBarStudy.do" target="_blank">Bar Study(柱状图学习)</a></li>
                            <li><a href="echartStudy/toScatterStudy.do" target="_blank">Scatter Study(散点图学习)</a></li>
                            <li><a href="echartStudy/toMapStudy.do" target="_blank">Map Study(地图学习)</a></li>
                            <li><a href="echartStudy/toPieStudy.do" target="_blank">Pie Study(饼图学习)</a></li>
                            <li class="divider"></li>
                            <li><a href="echartStudy/toChinaMap.do" target="_blank">china Map(中国地图)</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="active" class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-cog"></span>设置</a></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">更换主题</a></li>
                            <li><a href="toEditPerMess.do">修改个人信息</a></li>
                            <li><a href="http://www.gexing.com/" target="_blank">其他</a></li>
                            <li class="divider"></li>
                            <li><a href="logout.do" target="_blank">退出登录</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
<!-- 一个容器 -->
<div class="container">
    <div class="row" style="padding-top:100px;">
        <div class="col-md-3"></div>
        <div class="col-md-6" style="text-align: center;" id="wtmm">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile">
                    <p class="help-block">Example block-level help text here.</p>
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox"> Check me out
                    </label>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
<%@ include file="bottom.jsp" %>
