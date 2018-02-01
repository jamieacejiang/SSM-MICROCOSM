//实现一进页面两行标题淡入效果
$("#wtmm").fadeIn(3000);
$("#wtmmwz").fadeIn(3000);


//手动隐藏模态框。在模态框隐藏之前返回到主调函数中 （也就是，在触发 hidden.bs.modal 事件之前）
//$('#registerModal').modal('hide');

//hide.bs.modal	当调用 hide 实例方法时触发。
$('#registerModal').on('hide.bs.modal', function(){
	//这里是点击关闭后的效果
	clearForm(registerForm);//模态框隐藏时，清空里面各元素的数据
	$(this).removeData("bs.modal");//我们在使用js动态打开modal框使用remote请求数据，只会加载一次数据，所以我们需要在每次打开modal框钱移除节点数据
	
});

$('#loginModal').on('hide.bs.modal', function(){
	//这里是点击关闭后的效果
	clearForm(loginForm);//模态框隐藏时，清空里面各元素的数据
	//验证码不能重新加载 这是个问题 先不考虑
	//TODO

	$("#codeImg").attr('src','');
	//$("#codeImg").attr('src','createImg.do?a='+Math.random());
	$(this).removeData("bs.modal");//我们在使用js动态打开modal框使用remote请求数据，只会加载一次数据，所以我们需要在每次打开modal框钱移除节点数据
	
});

//show.bs.modal	在调用 show 方法后触发。
//设置模态框的水平垂直方向的位置；
$('#registerModal,#loginModal').on('show.bs.modal',centerModals);

//关闭重新打开modal,重新加载验证码
$('#loginModal').on('show.bs.modal', function(){
    $('#codeImg').attr('src','createImg.do?a='+Math.random());
});

//禁用空白处点击关闭
$('#registerModal,#loginModal').modal({
	backdrop: 'static',
	keyboard: false,//禁止键盘
	show:false
});

//控制敲击键盘回车实现确定按钮功能
$("#loginModal").keydown(function(e){
    if(e.keyCode==13){
        //$("#loginModal").modal('hide');//关闭
        //event.preventDefault();//禁用默认回车事件
    	loginFunc();
    }
});

//控制敲击键盘回车实现确定按钮功能
$("#registerModal").keydown(function(e){
    if(e.keyCode==13){
        //$("#loginModal").modal('hide');//关闭
        //event.preventDefault();//禁用默认回车事件
    	registerFunc();
    }
});

//页面大小变化是仍然保证模态框水平垂直居中
$(window).on('resize', centerModals);

//点击注册按钮,提交表单数据
$('#registerBtn').click(registerFunc);

//点击登录按钮,提交表单数据
$('#loginBtn').click(loginFunc);

//点击注册按钮,提交表单数据
function registerFunc(){
	//提交前验证
	if(!registerValid()){
		return false;
	}
	//提交表单数据
	//序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20
	var data = $('#registerForm').serialize()+'&rd='+Math.random();
	//submitData是解码后的表单数据，结果同上
	var submitData=decodeURIComponent(data,true);
	//序列化中文以及字符时会出现乱码，是因为.serialize()调用了encodeURLComponent方法将数据编码了
	//解决方法：**调用decodeURIComponent(XXX,true);将数据解码 
	$.ajax({
	  url:'register.do',
	  data:submitData,
	  dataType:'json',
	  cache:false,//false是不缓存此页面，true为缓存,cache的作用就是第一次请求完毕之后，如果再次去请求，可以直接从缓存里面读取而不是再到服务器端读取。
	  async:true,//true为异步，false为同步
	  beforeSend:function(){//XMLHttpRequest 对象是唯一的参数。
		  //发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
		  //这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
		  $("#registerBtn").attr({ disabled: "disabled" });//避免脏数据
	  },
	  success:function(result){
		  //请求成功时
		  if(result.status==0){
			  $('#registerModal').modal('hide');
			  alert(result.msg);
			  $('#loginModal').modal('show');
		  }else{
			  alert(result.msg);
		  }
	  },
	  complete:function(){
		  //请求完成后回调函数 (请求成功或失败之后均调用)。
		  $("#registerBtn").removeAttr("disabled");//避免脏数据
	  },
	  error:function(){
	      //请求失败时
		  alert("程序出错,需看后台！");
	  }
	});
};

//点击登录按钮,提交表单数据
function loginFunc(){
	//提交前验证
	if(!loginValid()){
		return false;
	}
	//提交表单数据
	//序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20
	var data = $('#loginForm').serialize()+'&rd='+Math.random();
	//submitData是解码后的表单数据，结果同上
	var submitData=decodeURIComponent(data,true);
	//序列化中文以及字符时会出现乱码，是因为.serialize()调用了encodeURLComponent方法将数据编码了
	//解决方法：**调用decodeURIComponent(XXX,true);将数据解码 
	$.ajax({
		  url:'login.do',
		  data:submitData,
		  dataType:'json',
		  cache:false,//false是不缓存此页面，true为缓存,cache的作用就是第一次请求完毕之后，如果再次去请求，可以直接从缓存里面读取而不是再到服务器端读取。
		  async:true,//true为异步，false为同步
		  beforeSend:function(){//XMLHttpRequest 对象是唯一的参数。
			  //发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
			  //这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
			  $("#loginBtn").attr({ disabled: "disabled" });//避免脏数据
		  },
		  success:function(result){
			  //请求成功时
			  if(result.status==0){
				  $('#loginModal').modal('hide');
				  alert(result.msg);
				  window.location.href="toMyIndex.do";
			  }else{
				  alert(result.msg);
			  }
		  },
		  complete:function(){
			  //请求完成后回调函数 (请求成功或失败之后均调用)。
			  $("#loginBtn").removeAttr("disabled");//避免脏数据
		  },
		  error:function(){
		      //请求失败时
			  alert("程序出错,需看后台！");
		  }
		});
};

//设置模态框水平垂直方向的居中
function centerModals(){
	$('#registerModal,#loginModal').each(function(i){
		var $clone = $(this).clone().css('display','block').appendTo('body');
		var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
		top = top > 0 ? top : 0;
		$clone.remove();
		$(this).find('.modal-content').css("margin-top", top);
	});
};
//注册提交表单前的验证
function registerValid(){
	var reg = new RegExp(/^\w+$/);
	var regUsername = $('#regUsername').val();
	var regPassword = $('#regPassword').val();
	var regPwdRepeat = $('#regPwdRepeat').val();
	if(regUsername == null || regUsername == "" || regUsername.trim() == ""){
		alert("请输入你的名字！");
		return false;
	}
	if(!reg.test(regUsername)){
		alert("请确保你的名字中只有英文/数字/下划线,无其它！");
		return false;
	}
	if(regPassword == null || regPassword == ""){
		alert("请输入你的密码！");
		return false;
	}
	if(regPassword.length<8){
		alert("你的密码请至少输入8位！");
		return false;
	}
	if(regPwdRepeat == null || regPwdRepeat == ""){
		alert("请输入你的确认密码！");
		return false;
	}
	if(regPwdRepeat!=regPassword){
		alert("确认密码和你的密码输入不一致！");
		return false;
	}
	return true;
};
//清空文本框,单选框,多选框,下拉框
function clearForm(form) {
	// 迭代input清空
	$(':input', form).each(function() {
		var type = this.type;
		var tag = this.tagName.toLowerCase(); // normalize case
		if (type == 'text' || type == 'password' || tag == 'textarea'){
			this.value = "";
		}else if (type == 'checkbox' || type == 'radio'){// 跌代多选checkboxes
			this.checked = false;
		}else if (tag == 'select'){// select 迭代下拉框
			this.selectedIndex = -1;
		}
	});
};
//注册提交表单前的验证
function loginValid(){
	var reg = new RegExp(/^\w+$/);
	var logUsername = $('#logUsername').val();
	var logPassword = $('#logPassword').val();
	if(logUsername == null || logUsername == "" || logUsername.trim() == ""){
		alert("请输入你的名字！");
		return false;
	}
	if(!reg.test(logUsername)){
		alert("请确保你的名字中只有英文/数字/下划线,无其它！");
		return false;
	}
	if(logPassword == null || logPassword == ""){
		alert("请输入你的密码！");
		return false;
	}
	if(logPassword.length<8){
		alert("你的密码请至少输入8位！");
		return false;
	}
	return true;
};






