<%--
  Created by IntelliJ IDEA.
  User: jiangman
  Date: 2018/2/5 0005
  Time: 10:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"  pageEncoding="UTF-8"%>
<%@include file="top.jsp"%>
<link rel="stylesheet" href="${path}/css/cropper.css">
<!-- 页面css文件的引用 -->
<link rel="stylesheet" href="${path}/css/editPerMess.css">
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
                    <li><a href="multiTable/toMultiTableIndex.do">MultiTableOperate</a></li>
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
<div class="container" id="crop-avatar">
    <div class="row" style="padding-top:80px;">
        <div class="col-md-3"></div>
        <div class="col-md-6" style="text-align: center;" id="wtmm">
            <form id="updateForm">
                <div class="form-group" style="position:relative;display:inline-block;">
                    <%--<label for="exampleInputFile">上传头像(File input)</label>
                    <input type="file" id="exampleInputFile">--%>
                    <%--<p class="help-block">Example block-level help text here.</p>--%>
                    <%--<img class="img-circle" src="${path}/images/testProfilePhoto.jpg" width="150px" height="150px" id="profilePhoto" >
                    <div width="150px" height="150px" style="position:absolute;bottom:10%;left:45%;background: rgba(0,0,0,0.5);z-index: 100" id="ahaha" >
                        <a style="color: #ffffff;font-size: 1.1em;">上传头像</a>
                    </div>--%>
                    <%--<img src="${path}/images/testProfilePhoto.jpg" width="100%" height="100%" id="profilePhoto" >--%>
                    <div class="box" style="border-radius:89px">
                        <img class="img-circle" id="image" style="width: 178px;" src="upload/downloadPhoto.do?fileName=${user.photoSrc}" >
                        <div class="box-content">
                            <span class="title"><a href="javascript:void(sDialog());" class="btn btn-danger" >上传头像</a></span>
                        </div>
                    </div>
                    <!-- multiple属性为多文件上传 -->
                    <%--<input type="file" name="uploadFile" id="uploadFile" style="display:none" multiple="multiple" onchange="openDelModal()">--%>
                </div>

                <div class="form-group">
                    <label for="txt_nickname">昵称(Nick name)</label>
                    <input type="text" class="form-control" id="txt_nickname" name="nickname" placeholder="Nick name" value="${user.nickname}">
                </div>
                <input type="hidden" name="id" value="${user.id}">
                <div class="form-group">
                    <label for="txt_birthday">生日(Birthday)</label>
                    <!-- 键盘按键松开时发生 []中可以放正则 比如匹配数字等等 onkeyup="value=value.replace(/[]/g,'')" -->
                    <!-- /^\d{4}\-\d{2}\-\d{2}$/ 匹配yyyy-mm-dd格式的正则表达式 -->
                    <input type="text" class="form-control" id="txt_birthday" name="birth" placeholder="Birthday" value="${user.birth}" >
                </div>
                <div class="form-group">
                    <label for="txt_email">邮箱(Email address)</label>
                    <input type="email" class="form-control" id="txt_email" name="email" placeholder="Email address" value="${user.email}">
                </div>
                <div class="form-group">
                    <label for="txt_personSign">个性签名(Individuality signature)</label>
                    <input type="text" class="form-control" id="txt_personSign" name="personSign" placeholder="Individuality signature" value="${user.personSign}">
                </div>
                <%--<div class="checkbox">
                    <label>
                        <input type="checkbox"> Check me out
                    </label>
                </div>--%>
                <button type="button" id="submitBtn" class="btn btn-default">提交</button>
            </form>
        </div>
        <div class="col-md-3"></div>
    </div>
    <!-- 上传头像模态框 -->
    <div class="modal fade" id="avatar-modal" tabIndex="-1" role="dialog" aria-labelledby="delModal" aria-hidden="true">
        <div class="modal-dialog" style="width: 60%">
            <div class="modal-content">
                <form class="avatar-form" action="upload/uploadPhoto.do" enctype="multipart/form-data" method="post">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="outline:none;">×</button>
                        <h4 class="modal-title">上传头像(Upload picture)</h4>
                    </div>
                    <div class="modal-body">

                        <div class="avatar-body">

                            <!-- Upload image and data -->
                            <div class="avatar-upload">
                                <input type="hidden" class="avatar-src" name="avatar_src">
                                <input type="hidden" class="avatar-data" name="avatar_data">
                                <input type="hidden" name="id" value="${user.id}">
                                <%--<label for="avatarInput">选择图片</label>--%>
                                <span class="title"><a href="javascript:void(openFileDialog());" class="btn btn-danger" >选择图片</a></span>
                                <input type="file" class="avatar-input" id="avatarInput" name="avatar_file" style="display:none">
                            </div>

                            <!-- Crop and preview -->
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="avatar-wrapper"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="avatar-preview preview-lg"></div>
                                    <div class="avatar-preview preview-md"></div>
                                    <div class="avatar-preview preview-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal" style="outline:none;">取消</button>
                        <button type="submit" class="btn btn-primary" style="outline:none;" id="uploadSubBtn">确定</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<%--<script>
$(function(){
    $("#ahaha").css("visibility","hidden");
    $("#ahaha").on('mouseover',function(){
        $("#ahaha").css("visibility","visible");
    });
    $("#ahaha").on('mouseout',function(){
        $("#ahaha").css("visibility","hidden");
    });
});
    $('#profilePhoto').hover(
        function(){
            //鼠标进入
            //$(this).find('.caption').slideDown(300);
            $("#ahaha").css("visibility","visible");
        },
        function(){
            //鼠标离开
            //$(this).find('.caption').slideUp(300);
            $("#ahaha").css("visibility","hidden");
        }
    );
function mask() {
    var masks = $("#ahaha");
    for(var i = 0; i < masks.length; i++){
        masks[i].style.top=(masks[i].offsetHeight - 45)+"px";
    }
    //console.log("hehe");
}
$(window).resize(mask);
$(window).load(mask);

</script>--%>
<!-- 页面Js文件的引用 -->
<script src="${path}/js/cropper.js"></script>
<script src="${path}/js/editPerMess.js"></script>
<%@ include file="bottom.jsp" %>
