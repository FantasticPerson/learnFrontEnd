/**
 * Created by wdd on 2017/7/12.
 */
$(document).ready(function(){
    // $('div').css('width','100px');
    // $('div').css('height','100px');
    // $('div').css('background-color','red');
    // $('div').css({
    //     'width':'100px',
    //     'height':'100px',
    //     'background-color':'red'
    // });

    $('div').addClass('style1');
    $('div').click(function(){
        // $('div').addClass('style1')
        // $('div').removeClass('style1')
        $('div').toggleClass('style2')
    })
});