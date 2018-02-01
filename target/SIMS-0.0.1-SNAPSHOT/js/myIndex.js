
$(function () {
	//基本的表格和按钮的加载
	initTable();
	initButton();

});

//关闭弹出的模态框时,清空form表单数据
$('#addModal').on('hide.bs.modal', function(){
	//这里是点击关闭后的效果
	clearForm(addForm);//模态框隐藏时，清空里面各元素的数据
	$(this).removeData("bs.modal");//我们在使用js动态打开modal框使用remote请求数据，只会加载一次数据，所以我们需要在每次打开modal框钱移除节点数据
	
});
$('#editModal').on('hide.bs.modal', function(){
	clearForm(editForm);
	$(this).removeData("bs.modal");
	
});
$('#delModal').on('hide.bs.modal', function(){
	//clearForm(editForm);
	$(this).removeData("bs.modal");
	
});
//show.bs.modal	在调用 show 方法后触发。
//设置模态框的水平垂直方向的位置；
$('#addModal,#editModal,#delModal').on('show.bs.modal',centerModals);

//禁用空白处点击关闭
$('#addModal,#editModal,#delModal').modal({
	backdrop: 'static',
	keyboard: false,//禁止键盘
	show:false
});

//新增模态框点击确定按钮,提交表单数据
$('#addBtn').click(function(){
	//提交前验证
	if(!addValid()){
		return false;
	}
	//序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20
	var data = $('#addForm').serialize()+'&rd='+Math.random();
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
			$("#addBtn").attr({ disabled: "disabled" });//避免脏数据
		},
		success:function(result){
			//请求成功时
			if(result.status==0){
				$('#addModal').modal('hide');
				alert("添加成功！");
				//刷新table数据
				$('#tb_user').bootstrapTable('refresh');
			}else{
				alert(result.msg);
			}
		},
		complete:function(){
			//请求完成后回调函数 (请求成功或失败之后均调用)。
			$("#addBtn").removeAttr("disabled");//避免脏数据
		},
		error:function(){
			//请求失败时
			alert("程序出错,需看后台！");
		}
	});
});

//修改模态框点击确定按钮,提交表单数据
$('#editBtn').click(function(){
	//提交前验证
	if(!editValid()){
		return false;
	}
	//序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20
	var data = $('#editForm').serialize()+'&rd='+Math.random();
	//submitData是解码后的表单数据，结果同上
	var submitData=decodeURIComponent(data,true);
	//序列化中文以及字符时会出现乱码，是因为.serialize()调用了encodeURLComponent方法将数据编码了
	//解决方法：**调用decodeURIComponent(XXX,true);将数据解码 
	$.ajax({
		url:'updateUser.do',
		data:submitData,
		method: 'post',                      //请求方式（*）
		dataType:'json',
		cache:false,//false是不缓存此页面，true为缓存,cache的作用就是第一次请求完毕之后，如果再次去请求，可以直接从缓存里面读取而不是再到服务器端读取。
		async:true,//true为异步，false为同步
		beforeSend:function(){//XMLHttpRequest 对象是唯一的参数。
			//发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
			//这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
			$("#editBtn").attr({ disabled: "disabled" });//避免脏数据
		},
		success:function(result){
			//请求成功时
			if(result.status==0){
				$('#editModal').modal('hide');
				alert(result.msg);
				//刷新table数据
				$('#tb_user').bootstrapTable('refresh');
			}else{
				alert("提交失败！");
			}
		},
		complete:function(){
			//请求完成后回调函数 (请求成功或失败之后均调用)。
			$("#editBtn").removeAttr("disabled");//避免脏数据
		},
		error:function(){
			//请求失败时
			alert("程序出错,需看后台！");
		}
	});
});

//删除模态框点击确定按钮,提交表单数据
$('#delBtn').click(function(){
	var submitData = 'id='+$('#delId').val()+'&rd='+Math.random();
	$.ajax({
		url:'deleteUser.do',
		data:submitData,
		method: 'post',
		dataType:'json',
		cache:false,//false是不缓存此页面，true为缓存,cache的作用就是第一次请求完毕之后，如果再次去请求，可以直接从缓存里面读取而不是再到服务器端读取。
		async:true,//true为异步，false为同步
		beforeSend:function(){//XMLHttpRequest 对象是唯一的参数。
			//发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
			//这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
			$("#delBtn").attr({ disabled: "disabled" });//避免脏数据
		},
		success:function(result){
			//请求成功时
			if(result.status==0){
				$('#delModal').modal('hide');
				alert(result.msg);
				//刷新table数据
				$('#tb_user').bootstrapTable('refresh');
			}else{
				alert("提交失败！");
			}
		},
		complete:function(){
			//请求完成后回调函数 (请求成功或失败之后均调用)。
			$("#delBtn").removeAttr("disabled");//避免脏数据
		},
		error:function(){
			//请求失败时
			alert("程序出错,需看后台！");
		}
	});
});



function initTable() {
		$('#tb_user').bootstrapTable('destroy');
        $('#tb_user').bootstrapTable({
            url: 'queryUsers.do',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            //toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            //search: false,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            //strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: 420,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
			cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            showExport: true,                     //是否显示导出
            exportDataType: "all",              //导出的模式是当前页、所有数据还是选中数据basic', 'all', 'selected'.
            rowStyle: function (row, index) {	//设置tr的背景色
                //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
                var strclass = "";
                if (row.username == "877166116") {
                    strclass = 'success';//还有一个active
                }
                else if (row.username == "Amanda") {
                    strclass = 'danger';
                }
                else {
                    return {};
                }
                //按照bootstrap table的规则，必须返回一个json格式的对象型如： { classes: strclass } 。
                return { classes: strclass };
            },
            columns: [/*{
                checkbox: true
            }, */{//隐藏列visible
                field: 'id',
                title: 'id',
                align: 'center',
                visible: false,
            }, {
                field: 'username',
                title: '登录用户名',
                align: 'center',
                //editable:true
            }, {
                field: 'password',
                title: '登录密码',
                align: 'center'
            }, {
                field: '#',
                title: '操作',
                align: 'center',
                formatter:function(value,row,index){
                    return "<a href='javascript:;' onclick='openEditModal(\""+row.id+"\")'>修改</a> <a href='javascript:;' onclick='openDelModal(\""+row.id+"\")'>删除</a>";
                }
            }],
            //四个参数field, row, oldValue, $el分别对应着当前列的名称、当前行数据对象、更新前的值、编辑的当前单元格的jQuery对象。
            //onEditableSave: function (field, row, oldValue, $el) {	//行编辑,以后再完善研究,目前先完成基本的增删改查功能
                /*$.ajax({
                    type: "post",
                    url: "/Editable/Edit",
                    data: { strJson: JSON.stringify(row) },
                    success: function (data, status) {
                        if (status == "success") {
                            alert("编辑成功");
                        }
                    },
                    error: function () {
                        alert("Error");
                    },
                    complete: function () {

                    }

                });*/
           // }
        });
    };

    //得到查询的参数
    function queryParams(params) {
    	var p_limit = params.limit;
    	var p_offset = params.offset;
    	if(typeof(p_limit)=="undefined"){
    		p_limit = -1;
    	}
    	if(typeof(p_offset)=="undefined"){
    		p_offset = -1;
    	}
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: p_limit,   //页面大小
            offset: p_offset,  //页面大小起始值
            username: $("#txt_username").val(),
            password: $("#txt_password").val()
        };
        //alert("limit is :"+temp.limit);
        //alert("offset is :"+temp.offset);
        return temp;
    };



function initButton () {
    //初始化页面上面的按钮事件
	$('#btn_query').click(function(){
		initTable();
	});
	$('#btn_add').click(function(){
		//alert("新增");
	});
	/*$('#btn_edit').click(function(){
		//alert("修改");
	});
	$('#btn_delete').click(function(){
		//alert("删除");
	});*/
};

//设置模态框水平垂直方向的居中
function centerModals(){
	$('#addModal,#editModal,#delModal').each(function(i){
		var $clone = $(this).clone().css('display','block').appendTo('body');
		var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
		top = top > 0 ? top : 0;
		$clone.remove();
		$(this).find('.modal-content').css("margin-top", top);
	});
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

//点击修改超链接弹出模态框页面
function openEditModal(id){
	var data = 'id='+id+'&rd='+Math.random();
	//submitData是解码后的表单数据，结果同上
	var submitData=decodeURIComponent(data,true);
	$.ajax({
		url:'queryBean.do',
		data:submitData,
		dataType:'json',
		cache:false,//false是不缓存此页面，true为缓存,cache的作用就是第一次请求完毕之后，如果再次去请求，可以直接从缓存里面读取而不是再到服务器端读取。
		async:true,//true为异步，false为同步
		success:function(result){
			//请求成功时
			$("#editModal").modal().on("shown.bs.modal", function () {
				$('#editId').val(result.id);
                $('#editUsername').val(result.username);
                //密码就不显示了,显示也是加密的。直接重置。
                $('#editPassword').val();
                $('#editPwdRepeat').val();
            });
			$('#editModal').modal('show');
		},
		error:function(){
			//请求失败时
			alert("程序出错,需看后台！");
		}
	});
	
};

//点击删除超链接弹出模态框页面
function openDelModal(id){
	$("#delModal").modal().on("shown.bs.modal", function () {
		$('#delId').val(id);
    });
	$('#delModal').modal('show');
};

//提交表单前验证
function addValid(){
	var reg = new RegExp(/^\w+$/);
	var addUsername = $('#addUsername').val();
	var addPassword = $('#addPassword').val();
	var addPwdRepeat = $('#addPwdRepeat').val();
	if(addUsername == null || addUsername == "" || addUsername.trim() == ""){
		alert("请输入登录用户名！");
		return false;
	}
	if(!reg.test(addUsername)){
		alert("请确保登录用户名中只有英文/数字/下划线,无其它！");
		return false;
	}
	if(addPassword == null || addPassword == ""){
		alert("请输入登录密码！");
		return false;
	}
	if(addPassword.length<8){
		alert("登录密码请至少输入8位！");
		return false;
	}
	if(addPwdRepeat == null || addPwdRepeat == ""){
		alert("请输入确认密码！");
		return false;
	}
	if(addPwdRepeat!=addPassword){
		alert("确认密码和登录密码输入不一致！");
		return false;
	}
	return true;
};

//提交表单前验证
function editValid(){
	var reg = new RegExp(/^\w+$/);
	var editUsername = $('#editUsername').val();
	var editPassword = $('#editPassword').val();
	var editPwdRepeat = $('#editPwdRepeat').val();
	if(editUsername == null || editUsername == "" || editUsername.trim() == ""){
		alert("请输入登录用户名！");
		return false;
	}
	if(!reg.test(editUsername)){
		alert("请确保登录用户名中只有英文/数字/下划线,无其它！");
		return false;
	}
	if(editPassword == null || editPassword == ""){
		alert("请输入登录密码！");
		return false;
	}
	if(editPassword.length<8){
		alert("登录密码请至少输入8位！");
		return false;
	}
	if(editPwdRepeat == null || editPwdRepeat == ""){
		alert("请输入确认密码！");
		return false;
	}
	if(editPwdRepeat!=editPassword){
		alert("确认密码和登录密码输入不一致！");
		return false;
	}
	return true;
};