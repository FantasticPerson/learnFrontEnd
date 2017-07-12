/**
 * Created by wdd on 2017/7/11.
 */
$(document).ready(function(){
    $('#btn1').click(function(){
        $('#p1').text("极客学院")
    });
    $('#btn2').click(function(){
        $('#p2').html("<a href='#'>极客学院</a>")
    });
    $('#btn3').click(function(){
        $('#p3').val("极客学院")
    });
    $('#btn4').click(function(){
        $('#aid').attr({
            'href':"http://www.jikexueyuan.com",
            'title':"节科学院"
        });
    });
    $('#btn5').click(function(){
        $('#p5').text(function(i,ot){
            return "old:"+ot+' new:thie si new content'
        })
    });
});