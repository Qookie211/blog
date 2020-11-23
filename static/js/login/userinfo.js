$('#logout').on('click',function () {
   $.get("/logout",function (data ,status) {
        if(data==="logout"){
            alert('你已经退出登陆，点击确认返回首页');
            window.location.replace("http://127.0.0.1:8000");
        }else {
            alert("为什么没有登陆成功呢？")
        }
       }
   )
});