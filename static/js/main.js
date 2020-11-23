
$('.shrink').on(
    'click',function () {
        if($(this).parent().next().is(':hidden')){
            $(this).parent().next().show();
            $(this).text('-');
            $(this).attr('title','双击收拢章节内容');
        }else{
            $(this).parent().next().hide();
            $(this).text('+');
            $(this).attr('title','双击展开章节内容');
        }
    }
);
$(document).ready(function () {
    let chapters=$('#activeChapter').parents('.chapter');
    chapters.show();
    chapters.prev().children('.shrink').text('-');

    // pathname=window.location.pathname;
    // $('.subjct a').each(function () {
    //      if($(this).attr('href')==pathname){
    //          $(this).addClass("activeSubject")
    //      }
    // })
});

$('.cancel').on('click',function () {
    $('.titleToPush').val('');
    $('.textareToPush').val('');
});

$('.cancelReply').on('click',function () {
    thisReply=$(this);
    thisReply.parent().fadeOut("fast");
    thisReply.parent().prev().show();
});

$('.allComment').on('click',function(){
    // $(this).after("<p class='releaseDate'>评论已展示完全<p>");
    thisComment=$(this);
    pathname=window.location.pathname;
    $.post(pathname,
        {"counter":thisComment.next().next().next().text(),
				"csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val()},
        function (data,status) {
        if(data=="it is all"){
            thisComment.after("<p class='releaseDate'>评论已展示完全<p>");
            thisComment.hide();
        }else{
            if(status==200){
                $(this).parent().html('data')
            }
        }
    })
});
$('.reply').on('click',function () {
    $(this).fadeOut("fast");
    $(this).next().slideDown("slow")
});


$('.commit').on('click',function () {
   theCommit=$(this);
   pathname=window.location.pathname;
   title=theCommit.parent().find('input');
   content=theCommit.parent().find('textarea');

   $.post('/postComment',
        {"title":title.val(),
            "pathname":pathname,
            "content":content.val(),
            "csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val()},
        function (data,status) {
        if(data=="OK"){
            alert("评论提交成功");
            title.val('');
            content.val('');
        }else{
            alert("评论提交失败，请稍后再试")
        }
    })
});
$('.commitReply').on('click',function () {
    thisCommit=$(this);
    replyTitle=thisCommit.parent().find('input');
    replyContent=thisCommit.parent().find('textarea');
    replyCounter=thisCommit.parent().next();
    pathname=window.location.pathname;
    $.post('/postReplys',
        {"replyTitle":replyTitle.val(),
            "pathname":pathname,
            "replyContent":replyContent.val(),
            "replyCounter":replyCounter.text(),
            "csrfmiddlewaretoken":$("[name='csrfmiddlewaretoken']").val()},
        function (data,status) {
        if(data=="OK"){
            alert("回复提交成功");
            replyTitle.val('');
            replyContent.val('');
            thisCommit.parent().hide();
            // thisCommit.parent().show();
        }else{
            alert("评论提交失败，请稍后再试")
        }
    })

});


var t;
$("#chapterNav").mouseenter(function(){
t=setTimeout(function(){$('#chapterNav').parent().css('position','relative');
	$('#chapterNav').hide();
	$('#chapterNav').next().css({'position':'absolute','width':'255px','backgroundColor':'rgba(233,250,3,0.88)','zIndex':'6'});
	$('#chapterNav').next().fadeIn("normal");},1200);
}).mouseleave(function(){
clearTimeout(t);
});

$('#fullGlyphicon').on('click',function(){
	$('.chapter').slideDown("normal");
	$('.shrink').text("-");
});

$('#smallGlyphicon').on('click',function(){
	$('.chapter').slideUp("normal");
	$('.shrink').text("+");
});

