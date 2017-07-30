/**
 * Created by wdd on 2017/7/13.
 */
$(document).ready(function(){
    imgLocation();
    var dataImg = {'data':[
        {'src':'img1.jpg'},
        {'src':'img2.jpg'},
        {'src':'img3.jpg'},
        {'src':'img4.jpg'},
        {'src':'img5.jpg'}
        ]}
    window.onscroll = function(){
        if(scrollside()){
            $.each(dataImg.data,function(index,value){
                var box = $('<div>').addClass('box').appendTo($('#container'));
                var content = $('<div>').addClass('content').appendTo(box);
                $('<img>').attr("src",'./img/'+$(value).attr('src')).appendTo(content);
            });
            imgLocation()
        }
    }
    window.onresize = imgLocation;
});

function scrollside(){
    var box = $('.box');
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2)
    var documentheight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+documentheight ? true : true);

}

function imgLocation(){
    console.log("width:"+window.innerWidth);
    console.log("width1:"+$(window).width());
    var box = $('.box');
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    console.log("num:"+num);
    var boxArr = [];
    box.each(function(i,item){
        // boxArr.push(item.height());
        // console.log(item);
        $(item).css({
            position:'relative',
            float:'left',
            top:'',
            left:''
        })
        var boxHeight = box.eq(i).height();
        if(i < num){
            boxArr[i] = boxHeight;
        } else {
            var minBoxHeigh = Math.min.apply(null,boxArr);
            var boxIndex = $.inArray(minBoxHeigh,boxArr);
            $(item).css({
                position:'absolute',
                top:minBoxHeigh,
                left:box.eq(boxIndex).position().left
            });
            boxArr[boxIndex] += $(item).height();
        }
    });
}