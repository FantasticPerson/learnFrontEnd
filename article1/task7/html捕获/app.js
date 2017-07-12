/**
 * Created by wdd on 2017/7/11.
 */
$(document).ready(function(){
    $('#btn1').click(function(){
        alert("text:"+$("#text").text())
        alert("text:"+$("#text").html())
        alert("text:"+$("#it").val())
    });

    $('#btn2').click(function(){
        alert('text:'+$("#aid").attr("href"));
        alert('text:'+$("#aid").attr("id"));
    })
});