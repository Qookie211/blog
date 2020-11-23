$(document).ready(function () {
	let count=function(){
		let second=$('#second').text();
		if(parseInt(second)>1){
			second=parseInt(second)-1;
			$('#second').text(second);
		}else{
			window.location.replace("http://127.0.0.1:8000/login/");
		}	
	};
	let showbord=function(){
		if($('.reminder').hasClass('bord')){
			$('.reminder').removeClass('bord');	
		}else{
			$('.reminder').addClass('bord');
		}
		
	};
	setInterval(count,1000);
	setInterval(showbord,600);
});
