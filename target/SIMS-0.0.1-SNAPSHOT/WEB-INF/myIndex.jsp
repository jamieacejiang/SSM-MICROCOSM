<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="top.jsp"%>

<!-- bootstrap table组件引用 -->
<link rel="stylesheet" href="${path}/css/bootstrap-table.min.css"/>

<!-- 引入bootstrap-editable编辑bootstrap-table -->
<link rel="stylesheet" href="${path}/css/bootstrap-editable.css">

<!-- 页面css文件的引用 -->
<link rel="stylesheet" href="${path}/css/myIndex.css">

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
		            <li class="active"><a href="${path}/toMyIndex.do">Index</a></li>
		            <li><a href="${path}/multiTable/toMultiTableIndex.do">MultiTableOperate</a></li>
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
<!-- bootstrap-table 查询条件 -->
<!-- 面板（Panels） -->
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
                        <input type="text" class="form-control" id="txt_username">
                    </div>
                    <label class="control-label col-sm-1" for="txt_password">登录密码</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="txt_password">
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

    <table id="tb_user">
    </table>
</div>
<!-- 新增用户信息模态框 -->
<div class="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModal" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="outline:none;">×</button>
				<h4 class="modal-title">新增用户信息</h4>
			</div>
			<div class="modal-body">
				<form role="form" id="addForm">
					<div class="form-group">
						<label for="addUsername">登录用户名</label>
						<input type="text" class="form-control" name="username" id="addUsername" placeholder="登录用户名，可包含字母/数字/下划线。">
					</div>
					<div class="form-group">
						<label for="addPassword">登录密码</label>
						<input type="password" class="form-control" name="password" id="addPassword" placeholder="登录密码，至少8位。">
						<label for="addPwdRepeat">确认密码</label>
						<input type="password" class="form-control" id="addPwdRepeat" placeholder="请输入和上面相同的密码。">
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" style="outline:none;">取消</button>
				<button type="button" class="btn btn-primary" style="outline:none;" id="addBtn">确定</button>
			</div>
		</div>
	</div>
</div>
<!-- 修改用户信息模态框 -->
<div class="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModal" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="outline:none;">×</button>
				<h4 class="modal-title">修改用户信息</h4>
			</div>
			<div class="modal-body">
				<form role="form" id="editForm">
					<input type="hidden" id="editId" name="id" />
					<div class="form-group">
						<label for="editUsername">登录用户名</label>
						<input type="text" class="form-control" name="username" id="editUsername" placeholder="登录用户名，可包含字母/数字/下划线。">
					</div>
					<div class="form-group">
						<label for="editPassword">登录密码</label>
						<input type="password" class="form-control" name="password" id="editPassword" placeholder="重置登录密码，至少8位。">
						<label for="editPwdRepeat">确认密码</label>
						<input type="password" class="form-control" id="editPwdRepeat" placeholder="请输入和上面相同的密码。">
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" style="outline:none;">取消</button>
				<button type="button" class="btn btn-primary" style="outline:none;" id="editBtn">确定</button>
			</div>
		</div>
	</div>
</div>
<!-- 删除用户信息模态框 -->
<div class="modal fade" id="delModal" tabIndex="-1" role="dialog" aria-labelledby="delModal" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="outline:none;">×</button>
				<h4 class="modal-title">删除用户信息</h4>
			</div>
			<div class="modal-body">
				<input type="hidden" id="delId" name="id" />
				确定删除此用户和其相关的信息吗？
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" style="outline:none;">取消</button>
				<button type="button" class="btn btn-primary" style="outline:none;" id="delBtn">确定</button>
			</div>
		</div>
	</div>
</div>


<!-- bootstrap table组件以及中文包的引用 -->
<script src="${path}/js/bootstrap-table.min.js"></script>
<script src="${path}/js/bootstrap-table-zh-CN.min.js"></script>

<!-- bootstrap table扩展的bootstrap-editable引用 -->
<script src="${path}/js/bootstrap-editable.js"></script>
<script src="${path}/js/bootstrap-table-editable.js"></script>

<!-- 引入export相关js文件 -->
<script src="${path}/js/bootstrap-table-export.js"></script>
<script src="${path}/js/tableExport.js"></script>


<!-- 页面Js文件的引用 -->
<script src="${path}/js/myIndex.js"></script>
<%@include file="bottom.jsp"%>