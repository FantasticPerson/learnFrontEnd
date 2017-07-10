/**
 * Created by wdd on 2017/7/10.
 */
$(document).ready(function(){
    // $('#click').click(function(){ //这种方法在时间较多时 性能消耗较大
    //     alert('hello');
    // })
    $('#click').bind('click',clickHandler);
    $('#click').bind('click',clickHandler1);
    $('#click').unbind('click');
    $('#click').unbind('click',clickHandler);//解除某个事件的绑定


    //jQuert 1.7+ 版本可以这么写
    $('#click').on('click',clickHandler);
    $('#click').on('click',clickHandler1);
    $('#click').off('click');
    $('#click').off('click',clickHandler);
});
function clickHandler(){
    console.log('clickhandler');
}
function clickHandler1(){
    console.log('clickhandler1');
}