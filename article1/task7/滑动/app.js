/**
 * Created by wdd on 2017/7/12.
 */
$(document).ready(function(){
    $('#div1').click(function(){
        $('#content').slideDown(1000)
    })
    $('#div2').click(function(){
        $('#content').slideUp(1000)
    })
    $('#div3').click(function(){
        $('#content').slideToggle(1000)
    })
});