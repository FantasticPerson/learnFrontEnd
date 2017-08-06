$(document).ready(function(){
    refreshNews('精选');    
    $('nav a').click(function(e){
        e.prevnetDefault();
        var type=$(this).text();
        refreshNews(type);
    })
})

function refreshNews(type){
    $.ajax({
        url:'http://localhost/zuoye/server/getnews.php',
        type:'get',
        data:{newstype:type},
        datatype:'json',
        success:function(data){
            var $lists = $('article ul');
            $lists.empty();
            if(data.length > 0){
                data.forEach(function(item,index) {
                    var $list = $('<li></li>').addClass('news-list').appendTo($lists);
                    var $newImg = $('<div></div>').addClass('mewsimg').appendTo($list);
                    var $img = $('<img>').attr('src',item.newsimg).appendTo($newImg);
                    var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                    var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                    var $p = $('<p></p>').appendTo($newsContent);
                    var $newsTime = $('<span></span>').addClass('newsTime').html(item.newstime).appendTo($p);
                    var $newsSrc = $('<span></span>').addClass('newsrc').html(item.newssrc).appendTo($p);
                });
            }
        },
        error:function(e,a){
            console.log(e,a);
        }
    })
    
}