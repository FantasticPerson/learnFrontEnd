/**
 * Created by wdd on 2017/7/13.
 */
//sibling() 所用的同级
//next()下一个元素
//nextAt()下面所以的元素
//nextUntil()下面元素的区间修改
//prev()上面的一个元素
//prevAr()上面所有的元素
//prevUntil()上面元素的区间
$(document).ready(function(){
    // $('h4').siblings().css({border:'3px solid green'});
    // $('h4').next().css({border:'3px solid green'});
    // $('h4').nextAll().css({border:'3px solid green'});
    // $('p').nextUntil('h6').css({border:'3px solid green'});
    $('h4').prev().css({border:'3px solid green'});
});