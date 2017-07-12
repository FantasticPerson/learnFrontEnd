/**
 * Created by wdd on 2017/7/11.
 */
//append prepend before after
$(document).ready(function(){
   // $('#btn1').click(function(){
   //     $('#p1').append("this is my webpage and content");
   // })
    $('#btn1').click(function(){
        $('#p1').prepend("this is my webpage and content");
    })
    $('#btn2').click(function(){
        $('#p2').before("hello");
        $('#p2').after("after");
    })
});

function appendText(){
//html jQuery DOM
    var text1 = "<p>iwen</p>"
    var text2 = $("<p></p>").text('ime');
    var text3 = document.createElement('p');
    text3.innerHTML = "acely";
    $("body").append(text1,text2,text3);
}