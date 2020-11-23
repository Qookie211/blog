$('#checkUsername').on('click',
function(){
	let username=$('input[name="username"]');
	let pass=$('input[name="pass"]');
	let cpass=$('input[name="cpass"]');
	let istrue=true;
	if(cpass.val()!=null&&cpass.val()!=""&&username.val()!=""){
		if(cpass.val()!=pass.val()){
			$('.reminder').html('两次输入的密码不一致</br>');
			istrue=false;
		}
		if(pass.val().length>20||pass.val().length<6){
			$('.reminder').append('密码长度：6至20位');
			istrue=false;
		}
		if(istrue){
			$.post("checkName/",
				{"name":username.val(),
				"csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val()},
				function (data,status) {
					if(data=="true"){
						$('.reminder').html('');
						current_fs = $('#checkUsername').parent();
						next_fs = current_fs.next();
						$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
						next_fs.show();
						current_fs.hide();

					}else{
						console.log("data:",data,"status:",status)
					}
                }
			);

		}
	}else{
		$('.reminder').html('请填写你的用户名和密码');
		return false;
	}
});
//点击上一步
$(".previous").click(function(){
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	previous_fs.show();
	current_fs.hide();
});

//点击发送邮件
$('#getAuthCode').on('click',function () {
	let email=$('input[type="email"]');
	//验证邮箱是否正确
　　let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
　
　　if(email.val()=== ""||!reg.test(email.val())){ //输入不能为空
　　　　$('.reminder').html("请输入正确的邮箱地址");
　　　　return false;
　　}else{
　　　　let getAuthCodeBtn=$('#getAuthCode');
		let stopWatch=$('#stopWatch');
		getAuthCodeBtn.attr('disabled','disabled');
		getAuthCodeBtn.removeClass('activeBtn');
		getAuthCodeBtn.addClass('disableBtn');
		getAuthCodeBtn.attr('value','重新获取验证码');
		stopWatch.show();
		$.post("sendEmail/",
				{"email":email.val(),
				"csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val()},
				function (data,status){
					if(data==="error"){//等同符,当两边值的类型相同时,直接比较值
						$('.reminder').html("邮箱发送失败，请检查邮箱是否正确");
					}
				});
		//开始倒计时，重新获取邮箱验证码
		let count=function(){
			let newTime=parseInt(stopWatch.text())-1;
			stopWatch.text(newTime);
			if(newTime==0){
				window.clearInterval(getCount);
				getAuthCodeBtn.removeAttr('disabled');
				getAuthCodeBtn.addClass('activeBtn');
				stopWatch.text('60');
				stopWatch.hide();
			}
		};
		var getCount=setInterval(count,1000);
	}
});
$('#checkAuthCode').on('click',function () {
	let authCode=$('input[name="authCode"]');
	let email=$('input[type="email"]');
	$.post("checkAuthCode/",
		{"authCode":authCode.val(),
		"email":email.val(),
		"csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val()},
		function (data) {
			if(data!="error"){
				current_fs = $('#checkAuthCode').parent();
				next_fs = current_fs.next();
				$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
				next_fs.show();
				current_fs.hide();
				$('.reminder').html('');
			}else {
				$('.reminder').html("验证码输入错误，请重新尝试获取");
			}
        }
	);
});

//由于设计不是太合理，导致后面还需要把所有变量再重新上报一次,其实可以只在这个submit里面判断一次。后续有时间可以优化
$('input[name="submit"]').on('click',function () {
	let istrue=true;
	let nickName=$('input[name="nickName"]');
	let details=$('input[name="details"]');
	let username=$('input[name="username"]');
	let pass=$('input[name="pass"]');
	let cpass=$('input[name="cpass"]');
	let email=$('input[type="email"]');
	let authCode=$('input[name="authCode"]');
	let imgFile=document.getElementById("chooseImage");//注意这里只能用ducoment的方法获取元素，否则没有files[0]的属性
	let headPortraits=imgFile.files[0];
	let formData=new FormData();
	let nikeNamePush=nickName.val();
	let detailsPush=details.val();
	if(nikeNamePush){
		if(nickName.val().length>20){
		$('.reminder').append('昵称的最大长度为20</br>');
		istrue=false;
		}
	}else {
		nikeNamePush=username.val();
	}
	if(details.val()){
		if(details.val().length>2000){
		$('.reminder').append('个人介绍信息不能超过2000个字符</br>');
		istrue=false;
		}
	}else {
		detailsPush="这个人很懒，什么都没有留下"
	}
	if(!headPortraitsOk){
		istrue=false
	}
	formData.append("csrfmiddlewaretoken",$("[name='csrfmiddlewaretoken']").val());
	formData.append("username",username.val());
	formData.append("pass",pass.val());
	formData.append("cpass",cpass.val());
	formData.append("email",email.val());
	formData.append("authCode",authCode.val());
	formData.append("nickName",nikeNamePush);
	formData.append("details",detailsPush);
	if(headPortraits){
		formData.append("headPortraits",headPortraits);
	}
	if(istrue){
		$.ajax({
			url:"register/",
			type:'POST',
			data:formData,
			async:false,
			processData:false,
			contentType:false,
			success:function (data) {
				if(data==="sucess"){
					//采用的是硬编码，如果不想用硬编码，可以写在html内，再传参过来
					window.location.replace("http://127.0.0.1:8000/register/sucess");
				}else{
					let parsedata=$.parseJSON(data);
					$.each(parsedata, function(i,item) {
						$('.reminder').append(item);
                	});
				}

            }
		});
	}
});

var headPortraitsOk=true;
$("#chooseImage").change(function () {
	let headPortraits=$('#chooseImage');
	let headPortraitsFile=document.getElementById('chooseImage');
	let headPortraitsFilepath = headPortraits.val();
	let extStart = headPortraitsFilepath.lastIndexOf(".");
	let ext = headPortraitsFilepath.substring(extStart, headPortraitsFilepath.length).toUpperCase();
	 if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
	 	$('.reminder').html('请传入图片格式的文件');
	 	headPortraitsOk=false;
	 	return false;
	 }else if(headPortraitsFile.files[0].size>=5*1024*1024){
	 	headPortraitsOk=false;
	 	$('.reminder').html('文件大小必须小于5M');
	 }else{
	 	headPortraitsOk=true;
	 	$('.reminder').html('');
	 }
});

