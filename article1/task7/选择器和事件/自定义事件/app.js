/**
 * Created by wdd on 2017/7/10.
 */
$(document).ready(function(){
    $('#click').click(function(){
        var e = jQuery.Event('myEvent');
        $('#click').trigger(e);
    })
    $('#click').bind('myEvent',function(event){
        console.log(event)
    })
});