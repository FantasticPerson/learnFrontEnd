/**
 * Created by wdd on 2017/7/13.
 */
//children find 区别 children只适用于儿子辈 find 适用于所有后代
//children 参数可选 find参数必选
$(document).ready(function(){
    // $('#div1').children().css({
    //     border:'3px solid #FF0000'
    // })
    // $('#div1').children("div2").css({
    //     border:'3px solid #FF0000'
    // })
    // $('#div1').find("#div2").css({
    //     border:'3px solid #FF0000'
    // })
    $('#div1').find("p").css({
        border:'3px solid #FF0000'
    })
});