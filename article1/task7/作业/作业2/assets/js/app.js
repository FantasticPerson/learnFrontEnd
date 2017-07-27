$(document).ready(function(){
    $('.header nav li').mouseenter(function(){
        $('.slide-submeu',this).show();
        $('.slide-icon',this).css({transform:"rotateX(180deg)"})
    })
    $('.header nav li').mouseleave(function(){
        $('.slide-submeu',this).hide();
        $('.slide-icon',this).css({transform:""})
    })
    $('.sortMode dl').mouseenter(function(){
        $('dd',this).css({
            backgroundColor:"#FFF",
            opacity:'1',
            visibility:'visible'
        })
        $('.arrow',this).css({visibility:'hidden'})
        $(this).css({height:'108px'})
    })
    $('.sortMode dl').mouseleave(function(){
        $('dd',this).css({
            backgroundColor:"",
            opacity:'0',
            visibility:'hidden'
        })
        $('.arrow',this).css({visibility:'visible'})
        $(this).css({height:'36px'})
    })
    $('.kuai-icon').click(function(){
        $(this).addClass('curr');
        $('.list-icon').removeClass('curr')
        $('.lesson-list2').removeClass('lesson-list2').addClass('lesson-list');
        
    })
    $('.list-icon').click(function(){
        $(this).addClass('curr');
        $('.kuai-icon').removeClass('curr')
        $('.lesson-list').removeClass('lesson-list').addClass('lesson-list2');
        $('.lesson-infor p').css({height:'36px',opacity:1,display:'block'})
        $('.zhongji').css({display:'block'})
    })
    $('.aside-cList li').mouseenter(function(){
        $('.list-show',this).show();
    })
    $('.aside-cList li').mouseleave(function(){
        $('.list-show',this).hide();
    })
});