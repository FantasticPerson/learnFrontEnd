/**
 * Created by wdd on 2017/7/7.
 */
function test(){//js是函数级别作用域  内部的变量都能访问 内部能访问外部的变变量 外部不能访问内部的变量
    if(false){
        var i =0;
    }
    console.log(i);
}
// test()

function test2(){
    var j=10;
    return function(){
        return j;
    }
}
var t = test2();