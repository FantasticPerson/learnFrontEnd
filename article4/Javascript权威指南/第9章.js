/**
 * Created by wdd on 2017/6/20.
 */
function range(from,to){//这个工厂方法返回一个新的“范围对象”
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    return r;
}

range.methods = {
    includes:function(x){
        return this.from <= x && x <= this.to;
    },
    foreach:function(f){
        for(var x=Math.ceil(this.from);x<this.to;x++)f(x);
    },
    toString:function(){
        return "("+this.from+"..."+this.to+")";
    }
};

var r2 = range(1,3) //不使用 new 新建 对象



//这是一个构造函数，用以初始化新创建的“范围对象”
//函数名首字母要大写
function Range(from, to) {
    this.from = from;
    this.to = to;
}
Range.prototype = {
    include:function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach:function(f){
        for(var x=Math.ceil(this.from);x<this.to;x++)f(x);
    },
    toString:function(){
        return "("+this.from+"..."+this.to+")";
    }
};

var r = new Range(1,3);//使用 new 新建对象

function inherit(p) {//通过原型继承创建一个新对象
    if(p == null) throw new TypeError();
    if(Object.create){
        return Object.create(p);
    }
    var t = typeof p;
    if(t !== 'object' && t !== 'function') throw new TypeError();
    function f(){};
    f.prototype = p;
    return new f();
}

//声明构造函数
//1.
Range.prototype = {
    constructor:Range,//显式的给原型添加一个构造函数
    include:function (x) {
        return this.from <= x && x <= this.to;
    },
    foreach:function(f){
        for(var x=Math.ceil(this.from);x<this.to;x++)f(x);
    },
    toString:function(){
        return "("+this.from+"..."+this.to+")";
    }
};
//2.
Range.prototype.include = function (x) {//使用预定义的原型对象
    return this.from <= x && x <= this.to;
};


Object.defineProperty(Object.prototype,"extend",{
    writable:true,
    enumerable:false,
    configurable:true,
    value:function(o){
        var names = Object.getOwnPropertyNames(o);
        for(var i=0;i<names.length;i++){
            if(names[i] in this) continue;
            var desc = Object.getOwnPropertyDescriptor(o,names[i]);
            Object.defineProperty(this,name[i],desc);
        }
    }
});

//一个用以定义简单类的函数
function defineClass(constructor,methods,statics){
    if(methods) extend(constructor.prototype,methods);
    if(statics) extend(constructor,statics);
    return constructor;
}

//使用defineClass定义类
var SampleRange = defineClass(function(f,t){this.f=f;this.t=t;},
    {
        include:function (x) {
            return this.from <= x && x <= this.to;
        },
        toString:function(){
            return "("+this.from+"..."+this.to+")";
        }
    },
    {
        upto:function(t){return new SampleRange(o,t)}
    }
);

//手动实现 用Javascript模拟Java的类成员
function Complex(real,imaginary){
    if(isNaN(real) || isNaN(imaginary))
        throw new TypeError();
    this.r = real;
    this.i = imaginary;
}
/*
* 类的示例方法定义为原型对象的函数值属性
* 这里定义的所有方法可以被所有实例继承，并为它们提供共享的行为
* 需要注意的是，JavaScript的实例方法必须使用关键字this
* 来存取示例的字段
*/

Complex.prototype.add = function(that){
    return new Complex(this.r+that.r,this.i+that.i);
};
Complex.prototype.mul = function(that){
    return new Complex(this.r * that.r,this.i*that.i);
};

//定义类字段
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

//前面加个下划线 表示 类内部使用
Complex._format = /^\{([^,]+),([^}]+)\}$/;

Complex.parse = function(s){
    try{
        var m = Complex._format.exec(s);
        return new Complex(parseFloat(m[1]),parseFloat(m[2]));
    }catch(x){
        throw new TypeError("Can't parse '"+s+"'as a complex number.");
    }
};

Complex.prototype.toString = function(){
    with(this){
        return "{"+r+","+i+"}";
    }
}