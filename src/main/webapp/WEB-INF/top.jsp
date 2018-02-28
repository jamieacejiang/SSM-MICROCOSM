<%--
  Created by IntelliJ IDEA.
  User: jiangman
  Date: 2018/2/6 0006
  Time: 13:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <%
        String path = request.getContextPath();
        String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
        request.setAttribute("path", basePath);
    %>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- 暂时先不做移动端折叠的导航条 -->
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0">   -->
    <title>我的小宇宙</title>

    <!-- 新 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="${path}/css/bootstrap.min.css">

    <!-- 可选的Bootstrap主题文件（一般不用引入） -->
    <%--<link rel="stylesheet" href="css/bootstrap-theme.min.css">--%>

    <!-- 时间控件laydate CSS 文件 -->
    <link rel="stylesheet" href="${path}/css/bootstrap-datetimepicker.min.css">



    <!-- 由于现在我们用的是页面分开了,头部，中部和底部，所以jquery需要放在最上面加载，要不然中部的js用不了jquery -->
    <!-- jQuery文件，务必在bootstrap.min.js 之前引入 -->
    <script src="${path}/js/jquery.min.js"></script>

    <script src="${path}/js/bootstrap.min.js"></script>
    <script src="${path}/js/bootstrap-datetimepicker.min.js"></script>
</head>
<body style="background-image:url(${path}/images/body-bg.png);background-repeat:repeat;display: block;overflow-x:hidden;overflow-y:auto;">



