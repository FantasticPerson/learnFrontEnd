/**
 * Created by wdd on 2017/7/12.
 */
$(document).ready(function(){
    $('#btn').click(function(){
        // $('p').hide(1000,function(){
        //     alert('finish');
        // })
        $('p').css("color","red").slideUp(1000).slideDown(1000)
    })
})