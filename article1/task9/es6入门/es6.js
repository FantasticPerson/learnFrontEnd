//块级作用域
if(false){
    var a = 1;
}
console.log(a);

//静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

let a = '12'
const b = `12{a}er`

//解构赋值
let arr = [1,2,3,4];
const {first,second,...t} = a;

let obj = {firstName:1,secondName:2,thirdName:3};
function getFullName({firstName,secondName}){

}

getFullName(obj);

//定义对象 多行最后一行加逗号，单行 后面不加逗号

//如果添加属性不可避免
//使用Object.assign();

//可以定义动态的属性
let m = a;
const obj = {
    id:5,
    name:'22',
    ['m'+m+'c']:true;
}

//定义对象可以简洁一点
let f='f';
const atom = {
    f,
    add(){
        return 'f';
    }
}