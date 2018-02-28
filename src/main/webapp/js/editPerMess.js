//点击前台超链接，打开文件上传窗口
function openFileDialog() {
    $("#avatarInput").trigger("click");
}
//点击前台超链接,打开模态框
function sDialog() {
    openDelModal();
}

//文件上传方法
function fileUpload(imgFile){
    //验证图片格式,验证图片大小写在后台
    if(!uploadValidate()){
        return false;
    }
    openDelModal();
    /*var submitData = 'imgFile='+imgFile+'&rd='+Math.random();
    $.ajax({
        url:'upload/uploadPhoto.do',
        method:'post',
        data:submitData,
        dataType:'json',
        cache:false,//false是不缓存此页面，true为缓存,cache的作用就是第一次请求完毕之后，如果再次去请求，可以直接从缓存里面读取而不是再到服务器端读取。
        async:true,//true为异步，false为同步
        beforeSend:function(){//XMLHttpRequest 对象是唯一的参数。
            //发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
            //这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
            $("#submitBtn").attr({ disabled: "disabled" });//避免脏数据
        },
        success:function(result){
            //请求成功时
            if(result.status==0){
                //$('#addModal').modal('hide');
                alert("提交成功！");
                //刷新table数据
                //$('#tb_user').bootstrapTable('refresh');
                //刷新数据

            }else{
                alert(result.msg);
            }
        },
        complete:function(){
            //请求完成后回调函数 (请求成功或失败之后均调用)。
            $("#submitBtn").removeAttr("disabled");//避免脏数据
        },
        error:function(){
            //请求失败时
            alert("程序出错,需看后台！");
        }
    });*/
};
//文件上传验证图片格式和大小
function uploadValidate(){
    var filePath = $("#uploadFile").val();
    var fileName;
    //看看文件格式是/还是\\的,不同的系统路径斜杠方向不同
    var pos1 = filePath.lastIndexOf('/');
    var pos2 = filePath.lastIndexOf('\\');
    var pos  = Math.max(pos1, pos2);
    if(pos<0){
        fileName = filePath;
    }else{
        fileName = filePath.substring(pos+1);
    }
    //拆分文件格式后缀
    var str = fileName.split("\.");
    if(str[1]!=null&&str[1]!=""){
        if(!(str[1].toLowerCase() =="jpg" || str[1].toLowerCase() =="jpeg" || str[1].toLowerCase() =="png" || str[1].toLowerCase() =="gif")) {
            alert("请上传一张正确的图片(仅支持JPG,GIF,PNG格式;文件小于5M)！");
            return false;
        }/*else{//此处前台js有兼容性，写至后台
            var img = new Image();
            img.src = filePath;
            alert(img);
            if(img.file.size>4*1024*1024){//4M
                alert("请上传一张正确的图片(仅支持JPG,GIF,PNG格式;文件小于4M)！");
                return false;
            }
        }*/
    }else{
        alert("请上传一张正确的图片(仅支持JPG,GIF,PNG格式;文件小于5M)！");
        return false;
    }
    return true;
}

//点击删除超链接弹出模态框页面
function openDelModal(){
    $('#avatar-modal').modal('show');
};

//设置模态框水平垂直方向的居中
function centerModals(){
    $('#avatar-modal').each(function(i){
        var $clone = $(this).clone().css('display','block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
};

//show.bs.modal	在调用 show 方法后触发。
//设置模态框的水平垂直方向的位置；
$('#avatar-modal').on('show.bs.modal',centerModals);

$('#txt_birthday').datetimepicker({
    format: 'yyyy-mm-dd',//显示格式
    todayHighlight: 1,//今天高亮
    minView: "month",//设置只显示到月份,选择日完就自动关闭了
    startView:2,//日期时间选择器打开之后首先显示的视图
    //forceParse: true,//当选择器关闭的时候，是否强制解析输入框中的值
    showMeridian: false,
    autoclose: true,//选择后自动关闭
    keyboardNavigation:true//是否允许通过方向键改变日期。
});

$('#submitBtn').click(function(){
    var data = $("#updateForm").serialize()+'&rd='+Math.random();
    var submitData=decodeURIComponent(data,true);
    $.ajax({
        url:'sqlOperate/updateUser.do',
        method:'post',
        data:submitData,
        dataType:'json',
        cache:false,//false是不缓存此页面，true为缓存,cache的作用就是第一次请求完毕之后，如果再次去请求，可以直接从缓存里面读取而不是再到服务器端读取。
        async:true,//true为异步，false为同步
        beforeSend:function(){//XMLHttpRequest 对象是唯一的参数。
            //发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。
            //这是一个 Ajax 事件。如果返回 false 可以取消本次 ajax 请求。
            $("#submitBtn").attr({ disabled: "disabled" });//避免脏数据
        },
        success:function(result){
            //请求成功时
            if(result.status==0){
                //$('#addModal').modal('hide');
                alert("提交成功！");
                //刷新table数据
                //$('#tb_user').bootstrapTable('refresh');
                //刷新数据

            }else{
                alert(result.msg);
            }
        },
        complete:function(){
            //请求完成后回调函数 (请求成功或失败之后均调用)。
            $("#submitBtn").removeAttr("disabled");//避免脏数据
        },
        error:function(){
            //请求失败时
            alert("程序出错,需看后台！");
        }
    });
});

//禁用空白处点击关闭
$('#avatar-modal').modal({
    backdrop: 'static',
    keyboard: false,//禁止键盘
    show:false
});




(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node / CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals.
        factory(jQuery);
    }
})(function ($) {

    'use strict';

    var console = window.console || { log: function () {} };

    function CropAvatar($element) {
        this.$container = $element;

        this.$avatarView = this.$container.find('.box');
        this.$avatar = this.$avatarView.find('img');
        this.$avatarModal = this.$container.find('#avatar-modal');
        this.$loading = this.$container.find('.loading');

        this.$avatarForm = this.$avatarModal.find('.avatar-form');
        this.$avatarUpload = this.$avatarForm.find('.avatar-upload');
        this.$avatarSrc = this.$avatarForm.find('.avatar-src');
        this.$avatarData = this.$avatarForm.find('.avatar-data');
        this.$avatarInput = this.$avatarForm.find('.avatar-input');
        this.$avatarSave = this.$avatarForm.find('.avatar-save');
        this.$avatarBtns = this.$avatarForm.find('.avatar-btns');

        this.$avatarWrapper = this.$avatarModal.find('.avatar-wrapper');
        this.$avatarPreview = this.$avatarModal.find('.avatar-preview');

        this.init();
    }

    CropAvatar.prototype = {
        constructor: CropAvatar,

        support: {
            fileList: !!$('<input type="file">').prop('files'),
            blobURLs: !!window.URL && URL.createObjectURL,
            formData: !!window.FormData
        },

        init: function () {
            this.support.datauri = this.support.fileList && this.support.blobURLs;

            if (!this.support.formData) {
                this.initIframe();
            }

            this.initTooltip();
            this.initModal();
            this.addListener();
        },

        addListener: function () {
            this.$avatarView.on('click', $.proxy(this.click, this));
            this.$avatarInput.on('change', $.proxy(this.change, this));
            this.$avatarForm.on('submit', $.proxy(this.submit, this));
            this.$avatarBtns.on('click', $.proxy(this.rotate, this));
        },

        initTooltip: function () {
            this.$avatarView.tooltip({
                placement: 'bottom'
            });
        },

        initModal: function () {
            this.$avatarModal.modal({
                show: false
            });
        },

        initPreview: function () {
            var url = this.$avatar.attr('src');

            this.$avatarPreview.html('<img src="' + url + '">');
        },

        initIframe: function () {
            var target = 'upload-iframe-' + (new Date()).getTime();
            var $iframe = $('<iframe>').attr({
                name: target,
                src: ''
            });
            var _this = this;

            // Ready ifrmae
            $iframe.one('load', function () {

                // respond response
                $iframe.on('load', function () {
                    var data;

                    try {
                        data = $(this).contents().find('body').text();
                    } catch (e) {
                        console.log(e.message);
                    }

                    if (data) {
                        try {
                            data = $.parseJSON(data);
                        } catch (e) {
                            console.log(e.message);
                        }

                        _this.submitDone(data);
                    } else {
                        _this.submitFail('Image upload failed!');
                    }

                    _this.submitEnd();

                });
            });

            this.$iframe = $iframe;
            this.$avatarForm.attr('target', target).after($iframe.hide());
        },

        click: function () {
            this.$avatarModal.modal('show');
            this.initPreview();
        },

        change: function () {
            var files;
            var file;

            if (this.support.datauri) {
                files = this.$avatarInput.prop('files');

                if (files.length > 0) {
                    file = files[0];

                    if (this.isImageFile(file)) {
                        if (this.url) {
                            URL.revokeObjectURL(this.url); // Revoke the old one
                        }

                        this.url = URL.createObjectURL(file);
                        this.startCropper();
                    }
                }
            } else {
                file = this.$avatarInput.val();

                if (this.isImageFile(file)) {
                    this.syncUpload();
                }
            }
        },

        submit: function () {
            if (!this.$avatarSrc.val() && !this.$avatarInput.val()) {
                return false;
            }

            if (this.support.formData) {
                this.ajaxUpload();
                return false;
            }
        },

        rotate: function (e) {
            var data;

            if (this.active) {
                data = $(e.target).data();

                if (data.method) {
                    this.$img.cropper(data.method, data.option);
                }
            }
        },

        isImageFile: function (file) {
            if (file.type) {
                return /^image\/\w+$/.test(file.type);
            } else {
                return /\.(jpg|jpeg|png|gif)$/.test(file);
            }
        },

        startCropper: function () {
            var _this = this;

            if (this.active) {
                this.$img.cropper('replace', this.url);
            } else {
                this.$img = $('<img src="' + this.url + '">');
                this.$avatarWrapper.empty().html(this.$img);
                this.$img.cropper({
                    aspectRatio: 1,
                    preview: this.$avatarPreview.selector,
                    crop: function (e) {
                        var json = [
                            '{"x":' + e.x,
                            '"y":' + e.y,
                            '"height":' + e.height,
                            '"width":' + e.width,
                            '"rotate":' + e.rotate + '}'
                        ].join();

                        _this.$avatarData.val(json);
                    }
                });

                this.active = true;
            }

            this.$avatarModal.one('hidden.bs.modal', function () {
                _this.$avatarPreview.empty();
                _this.stopCropper();
            });
        },

        stopCropper: function () {
            if (this.active) {
                this.$img.cropper('destroy');
                this.$img.remove();
                this.active = false;
            }
        },

        ajaxUpload: function () {
            var url = this.$avatarForm.attr('action');
            var data = new FormData(this.$avatarForm[0]);
            var _this = this;

            $.ajax(url, {
                type: 'post',
                data: data,
                dataType: 'json',
                processData: false,
                contentType: false,

                beforeSend: function () {
                    _this.submitStart();
                },

                success: function (data) {
                    _this.submitDone(data);
                },

                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    _this.submitFail(textStatus || errorThrown);
                },

                complete: function () {
                    _this.submitEnd();
                }
            });
        },

        syncUpload: function () {
            this.$avatarSave.click();
        },

        submitStart: function () {
            this.$loading.fadeIn();
        },

        submitDone: function (data) {
            console.log(data);

            if ($.isPlainObject(data) && data.state === 200) {
                if (data.result) {
                    this.url = data.result;

                    if (this.support.datauri || this.uploaded) {
                        this.uploaded = false;
                        this.cropDone();
                    } else {
                        this.uploaded = true;
                        this.$avatarSrc.val(this.url);
                        this.startCropper();
                    }

                    this.$avatarInput.val('');
                } else if (data.message) {
                    this.alert(data.message);
                }
            } else {
                this.alert('Failed to response');
            }
        },

        submitFail: function (msg) {
            this.alert(msg);
        },

        submitEnd: function () {
            this.$loading.fadeOut();
        },

        cropDone: function () {
            this.$avatarForm.get(0).reset();
            this.$avatar.attr('src', this.url);
            this.stopCropper();
            this.$avatarModal.modal('hide');
        },

        alert: function (msg) {
            var $alert = [
                '<div class="alert alert-danger avatar-alert alert-dismissable">',
                '<button type="button" class="close" data-dismiss="alert">&times;</button>',
                msg,
                '</div>'
            ].join('');

            this.$avatarUpload.after($alert);
        }
    };

    $(function () {
        return new CropAvatar($('#crop-avatar'));
    });

});
