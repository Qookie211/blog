$('input[name="username"]').on('change',
	function(){
		let username=$('input[name="username"]');
		let csrfmiddlewaretoken=$("[name='csrfmiddlewaretoken']").val();
		$.post("verifiy",
			{"username":username.val(),
			"csrfmiddlewaretoken":csrfmiddlewaretoken},
			function (data,status) {
				if(data=="false"){
					$('.reminder').html('请确认用户名是否输入正确');
				}else{
					$('.reminder').html('');
				}
            }
		);
	});

$('input[name="password"]').on('change',
	function(){
		let username=$('input[name="username"]').val();
		let password=$('input[name="password"]').val();
		$.post("verifiy",
			{"username2":username,
			"password":password,
			"csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val()},
			function (data,status) {
                if (data === "false") {
                    $('.reminder').html('用户名或密码输入不正确');
                } else {
                    $('.reminder').html('');
                }
            }
		);
	});

$('input[type="button"]').on('click',function(){
	window.open('http://127.0.0.1:8000/register/');
});