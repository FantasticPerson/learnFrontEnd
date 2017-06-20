/**
 * Created by wdd on 2017/6/20.
 */
function range(from,to){//���������������һ���µġ���Χ����
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

var r2 = range(1,3) //��ʹ�� new �½� ����



//����һ�����캯�������Գ�ʼ���´����ġ���Χ����
//����������ĸҪ��д
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

var r = new Range(1,3);//ʹ�� new �½�����

function inherit(p) {//ͨ��ԭ�ͼ̳д���һ���¶���
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

//�������캯��
//1.
Range.prototype = {
    constructor:Range,//��ʽ�ĸ�ԭ�����һ�����캯��
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
Range.prototype.include = function (x) {//ʹ��Ԥ�����ԭ�Ͷ���
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

//һ�����Զ������ĺ���
function defineClass(constructor,methods,statics){
    if(methods) extend(constructor.prototype,methods);
    if(statics) extend(constructor,statics);
    return constructor;
}

//ʹ��defineClass������
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

//�ֶ�ʵ�� ��Javascriptģ��Java�����Ա
function Complex(real,imaginary){
    if(isNaN(real) || isNaN(imaginary))
        throw new TypeError();
    this.r = real;
    this.i = imaginary;
}
/*
* ���ʾ����������Ϊԭ�Ͷ���ĺ���ֵ����
* ���ﶨ������з������Ա�����ʵ���̳У���Ϊ�����ṩ�������Ϊ
* ��Ҫע����ǣ�JavaScript��ʵ����������ʹ�ùؼ���this
* ����ȡʾ�����ֶ�
*/

Complex.prototype.add = function(that){
    return new Complex(this.r+that.r,this.i+that.i);
};
Complex.prototype.mul = function(that){
    return new Complex(this.r * that.r,this.i*that.i);
};

//�������ֶ�
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

//ǰ��Ӹ��»��� ��ʾ ���ڲ�ʹ��
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