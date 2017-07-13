/**
 * Created by wdd on 2017/7/13.
 */
//parent 遍历一层
// parents 遍历上面的所有层
// parentsUntil 遍历到指定的层下面一层

$(document).ready(function(){
    // $('a').parent().css({border:'3px solid #FF0000'})
    // $('p').parent().css({border:'3px solid #FF0000'})
    // $('p').parents().css({border:'3px solid #FF0000'});
    $('a').parentsUntil("#div1").css({border:'3px solid #FF0000'})
});