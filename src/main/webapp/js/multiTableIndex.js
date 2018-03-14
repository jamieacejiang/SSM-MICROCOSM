$(function () {
    //基本的表格和按钮的加载
    initTable();
    initButton();
});

function initTable() {
    $('#multiTable').bootstrapTable('destroy');
    $('#multiTable').bootstrapTable({
        url: 'query2Tables.do',         //请求后台的URL（*）
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
        columns: [{
            field: 'id',
            title: 'id',
            align: 'center',
            visible: false,
        }, {
            field: 'role.roleName',
            title: '角色名称',
            align: 'center'
        }, {
            field: 'username',
            title: '登录用户名',
            align: 'center',
        }, {
            field: 'nickname',
            title: '昵称',
            align: 'center',
        }, {
            field: 'email',
            title: '邮箱',
            align: 'center',
        }, {
            field: 'personSign',
            title: '个性签名',
            align: 'center',
        }, {
            field: 'birth',
            title: '出生日期',
            align: 'center',
        }]
    });
}
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
        roleId: $("#txt_roleId").val()
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
};