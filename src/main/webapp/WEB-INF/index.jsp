<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>我的小宇宙</title>

<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/weather-icons.min.css">

<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<!-- <link rel="stylesheet" href="css/bootstrap-theme.min.css"> -->

<link rel="stylesheet" href="css/index.css">


</head>
<body style="background-image:url(images/bg.jpg);background-repeat:no-repeat;">
<div>
	<!-- 导航条 -->
	<div>
		<nav class="navbar navbar-inverse" role="navigation">
		    <div class="container-fluid">
			    <div class="navbar-header">
			        <a class="navbar-brand" href="#">My Microcosm (我的小宇宙)</a>
			        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation">    
			            <span class="icon-bar"></span>  
			            <span class="icon-bar"></span>  
			            <span class="icon-bar"></span>  
			        </button>
			    </div>
			    <div class="collapse navbar-collapse" id="navigation">
			        <ul class="nav navbar-nav">
			            <li class="active"><a href="#">主页</a></li>
			            <li><a href="#">了解我的小宇宙</a></li>
			            <li class="dropdown">
			                <a href="#" class="dropdown-toggle" data-toggle="dropdown">随便逛逛<b class="caret"></b></a>
			                <ul class="dropdown-menu">
			                    <li><a href="#">宇宙推荐 人物</a></li>
			                    <li><a href="http://news.sina.com.cn/" target="_blank">宇宙推荐 新闻</a></li>
			                    <li><a href="http://www.gexing.com/" target="_blank">宇宙推荐 图片</a></li>
			                    <li class="divider"></li>
			                    <li><a href="https://www.taobao.com/" target="_blank">周边</a></li>
			                </ul>
			            </li>
			        </ul>
			        <ul class="nav navbar-nav navbar-right"> 
			            <li><a href="#" data-toggle="modal" data-target="#registerModal" style="outline:none;"><span class="glyphicon glyphicon-user"></span> 注册我的小宇宙</a></li> 
			            <li><a href="#" data-toggle="modal" data-target="#loginModal" style="outline:none;"><span class="glyphicon glyphicon-log-in"></span> 登录我的小宇宙</a></li> 
			        </ul>
			    </div>
		    </div>
		</nav>
	</div>
	<!-- 居中的醒目的Welcome To My Microcosm -->
	<div class="container">
		<div class="row" style="padding-top:100px;">
			<div class="col-md-1"></div>
			<div class="col-md-10" style="text-align: center;display:none;" id="wtmm">
				<h1 style="font-size:64px">
					<font color="white">Welcome To My Microcosm</font>
				</h1>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div>
	<!-- 居中的醒目的我的小世界 -->
	<div class="container">
		<div class="row">
			<div class="col-md-1"></div>
			<div class="col-md-10" style="text-align: center;display:none;" id="wtmmwz">
				<h1>
					<font color="white">欢 迎 来 到 我 的 小 宇 宙 </font>
				</h1>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div>
	<!-- 现在开始了解我 -->
	<div class="container">
		<div class="row" style="padding-top:20px">
			<div class="col-md-1"></div>
			<div class="col-md-10" style="text-align: center;">
				<a href="http://blog.csdn.net/jamie_jiang" target="_blank">
					<button type="button" class="btn btn-danger btn-lg" style="outline:none;">点击下载 My Microcosm (v1.0)</button>
				</a>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div>
	<!-- 如果嫌麻烦可以直接通过联系方式找我 -->
	<!-- <div class="container">
		<div class="row" style="padding-top:20px">
			<div class="col-md-1"></div>
			<div class="col-md-10" style="text-align: center;">
				标准的按钮
				<a href="#" style="color:white;outline:none;">有急事?点击获取我的联系方式</a>
			</div>
			<div class="col-md-1"></div>
		</div>
	</div> -->
	
	<!-- 注册模态框（Modal） -->
	<!--  .fade class。当模态框被切换时，它会引起内容淡入淡出。 -->
	<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModal" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="outline:none;">×
					</button>
					<h4 class="modal-title" id="regModalLabel">加入小宇宙</h4>
				</div>
				<div class="modal-body">
					<form role="form" id="registerForm">
						<div class="form-group">
							<label for="regUsername">你的名字</label>
							<input type="text" class="form-control" name="username" id="regUsername" placeholder="登录用户名，可包含字母/数字/下划线。">
						</div>
						<div class="form-group">
							<label for="regPassword">你的密码</label>
							<input type="password" class="form-control" name="password" id="regPassword" placeholder="登录密码，至少8位。">
							<label for="regPwdRepeat">确认密码</label>
							<input type="password" class="form-control" id="regPwdRepeat" placeholder="请输入和上面相同的密码。">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal" style="outline:none;">取消</button>
					<button type="button" class="btn btn-primary" style="outline:none;" id="registerBtn">注册</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	
	<!-- 登录模态框（Modal） -->
	<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="outline:none;">×
					</button>
					<h4 class="modal-title" id="logModalLabel">登录小宇宙</h4>
				</div>
				<div class="modal-body">
					<form role="form"  id="loginForm">
						<div class="form-group">
							<label for="logUsername">你的名字</label>
							<input type="text" class="form-control" id="logUsername" name="username" placeholder="请输入你的登录名字">
						</div>
						<div class="form-group">
							<label for="logPassword">你的密码</label>
							<input type="password" class="form-control" id="logPassword" name="password" placeholder="请输入你的登录密码">
						</div>
						<div class="form-group">
							<div class="row">
								<label class="col-sm-8" for="checkCode">验证码</label>
							</div>
							<div>
								<input type="text" id="checkCode" name="checkCode" placeholder="请输入验证码">
								<img id="codeImg" src="createImg.do" onclick="this.setAttribute('src','createImg.do?x='+Math.random());" title="点击更换" />
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal" style="outline:none;">取消</button>
					<button type="button" class="btn btn-primary" style="outline:none;" id="loginBtn">登录</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
</div>

</body>

<!-- jQuery文件，务必在bootstrap.min.js 之前引入 -->
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="js/jquery.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/index.js"></script>
</html>

