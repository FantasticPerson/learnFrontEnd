$(document).ready(function(){
    refreshNews('精选');    
    $('nav a').click(function(e){
        e.preventDefault();
        var type=$(this).text();
        refreshNews(type);
    })
})

function refreshNews(type){
    $.ajax({
        url:'/news',
        type:'get',
        data:{
            newstype:type,
            _csrf:$.cookie('_csrf')
        },
        datatype:'json',
        success:function(data){
            var $lists = $('article ul');
            $lists.empty();
            if(data.length > 0){
                data.forEach(function(item,index) {
                    var $list = $('<li></li>').addClass('news-list').appendTo($lists);
                    var $newImg = $('<div></div>').addClass('mewsimg').appendTo($list);
                    var $img = $('<img>').attr('src',filterXSS(item.newsimg)).appendTo($newImg);
                    var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                    var $h1 = $('<h1></h1>').html(filterXSS(item.newstitle)).appendTo($newsContent);
                    var $p = $('<p></p>').appendTo($newsContent);
                    var $newsTime = $('<span></span>').addClass('newsTime').html(filterXSS(item.newstime)).appendTo($p);
                    var $newsSrc = $('<span></span>').addClass('newsrc').html(filterXSS(item.newssrc)).appendTo($p);
                });
            }
        },
        error:function(e,a){
            console.log(e,a);
        }
    })
    
}