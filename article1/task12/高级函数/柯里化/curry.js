//合并参数
// function add(num1,num2){
//     return num1+num2;
// }

// function totalAdd(){
//     return 50+add(1,2);
// }

function curry(fn){
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(this,args);
    }
}

function add(num1,num2,num3){
    return num1+num2+num3;
}

curry(add,5)(1,2);