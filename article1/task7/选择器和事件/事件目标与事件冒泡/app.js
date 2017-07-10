/**
 * Created by wdd on 2017/7/10.
 */
$(document).ready(function () {
    $('body').bind('click',bodyHandler);
    $('div').bind('click',divHandler);
    $('div').bind('click',divHandler1);
});

function bodyHandler(event){
    event.stopImmediatePropagation();//×èÖ¹ËùÓĞµÄÊÂ¼şÃ°Åİ
    console.log("body",event);
}

function divHandler(event){
    event.stopPropagation();//×èÖ¹Ã°Åİ
    console.log("div",event);
}

function divHandler1(event){
    event.stopPropagation();//×èÖ¹Ã°Åİ ×èÖ¹¸¸¼¶Ã°Åİ
    console.log("div",event);
}