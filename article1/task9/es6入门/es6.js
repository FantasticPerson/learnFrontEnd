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

//数组
//拷贝数组
let arr = [1,2,3];
let arrCopy = [...arr];

//将类似于数组的对象变为数组
let arr1={

}
Array.from();

//函数
(()=>{

})();//匿名函数

//绑定

//老的方式
const seif = this;
const boundMethod = function(...params){
    return boundMethod.apply(self,params);
}
//.bind(this)

//所有配置项都应该集中在一个对象，放在最后一个参数，bool值不可以直接作为参数
function divide(a,b,{option=false}={}){

}

//map
let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}

//class
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}

//export class 首字母大写 function大写