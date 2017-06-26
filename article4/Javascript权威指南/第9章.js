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
            Object.defineProperty(this,names[i],desc);
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
//���ַ��� classof()�����޷����־�������һ����
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
};

var c = new Complex(2,3);
var d = new Complex(c.i,c.r);

//ͨ�������ԭ������·���ʵ���������
//�������ַ����޷��� �������� ����Ϊ ����ö�ٵ�
Complex.prototype.conj = function(){console.log('����·���')};

//js���õĶ���Ҳ�����������
if(!Function.prototype.bind){
    Function.prototype.bind = function(){

    }
}

//��������ļ���
// 1.instanceof �����
//�﷨ obj instanceof c

//2.isPrototypeOf();
//�﷨ range.methods.isPrototypeOf(r)

//ȷ���޷�ͨ�������ȡ����
//ֻ�ܼ������Ƿ�����ָ��������

//3.constructor����
function typeAndValue(x){
    if(x == null) return "";
    switch (x.constructor){
        case Number:return "Number: "+x;
        case String:return "String: '"+x+"'";
        case Date:return "Date: "+x;
        case RegExp:return "RegExp: " + x;
        case Complex:return "Complex: "+x;
    }
}
//constructor���� �� instanceof ȱ�� �ڶ��ִ�������ĵĳ����������޷�����������


//ʹ���Զ���� getName����
Function.prototype.getName = function(){
    return this.name || this.toString().match(/function\s*([^()*])/)[1];
};

function classof(o){
    return Object.prototype.toString.call(0).slice(8,-1);
}

function type(o){
    var t,c,n;//type,class,name
    if(o == null) return 'null';
    if(o !== o) return "nan";
    if((t = typeof 9) !== 'object') return t;
    if((c=classof(0)) !== 'object') return c;
    if(o.constructor && typeof o.constructor === 'function' && (n = o.constructor.getName())) return n;
    return 'Object';
}
//���ַ���Ҳ��һ������  ���������еĶ��󶼾���constructor���ԣ����Ⲣ�������еĺ�����������

//Ѽʽ����
//����ע ������� ��ʲô ֻ��ע���� ����ʲô
function quacks(o) {
    for(var i=1;i<arguments.length;i++){
        var arg = arguments[i];
        switch(typeof arg){
            case 'string':
                if(typeof o[arg] !== 'function') return false;
                continue;
            case 'function':
                arg = arg.prototype;
            case 'object':
                for(var m in arg){
                    if(typeof arg[m] !== "function") continue;
                    if(typeof o[m] !== "function") return false;
                }
        }
        //�����ִ�е����˵��oʵ�������еķ���
        return true;
    }
}
//�������������� ��Ϊ������ķ���������ö�ٵģ� ���ȴ�ʩ ES6 �е� Object.getOwnPropertyNames() ��

//javascript���������ļ���
//set ��ʾ���ظ�ֵ�����򼯺�
//��javascriptʵ�ֵ�ͨ�õ�Set��
function Set(){
    this.values = {};
    this.n = 0;
    this.add.apply(this,arguments);
}

Set.prototype.add = function(){
    for(var i=0;i<arguments.length;i++){
        var val = arguments[i];
        var str = Set._v2s(arguments[i]);
        if(!this.values.hasOwnProperty(str)){
            this.value[str] = val;
            this.n++;
        }
    }
    return this;
};
Set.prototype.remove = function(){
    for(var i=0;i<arguments.length;i++){
        var val = arguments[i];
        var str = Set._v2s(arguments[i]);
        if(!this.values.hasOwnProperty(str)){
            delete this.value[str];
            this.n--;
        }
    }
    return this;
};
Set.prototype.contains = function(value){
    return this.values.hasOwnProperty(Set._v2s(value));
};
Set.prototype.size = function(){
    return this.n;
};
Set.prototype.forEach = function(f,context){
    for(var s in this.values){
        if(this.values.hasOwnProperty(s));
        f.call(context,this.values[s]);
    }
};
Set._v2s = function(val){
    switch(val){
        case undefined:return 'u';
        case null:return 'n';
        case true:return 't';
        case false:return 'f';
        default:switch(typeof val){
            case 'number':return '#' + val;
            case 'string':return '"' + val;
            default:return '@'+objectId(val);
        }
    }
    function objectId(o){
        var prop = "|**objectid**|";
        if(!o.hasOwnProperty(prop))
            o[prop] = Set._v2s.next++;
        return o[prop];
    }
};
Set._v2s.next = 100;//���ó�ʼid��ֵ

//ö������
function enumeration(namesToValues){
    var enumeration = function() {throw "Can't Instantiate Enumerations"};
    var proto = enumeration.prototype = {
        constructor:enumeration,
        toString:function(){return this.name},
        valueOf:function(){return this.value;},
        toJSON:function () {
            return this.name
        }
    };
    enumeration.values = [];
    for(var name in namesToValues){
        var e = inherit(proto);
        e.name = name;
        e.value = namesToValues[name];
        enumeration[name] = e;
        enumeration.values.push(e);
    }
    //һ���෽�������������ʾ�����е���
    enumeration.forEach = function(f,c){
        for(var i=0;i<this.values.length;i++){
            f.call(c,this.values[i]);
        }
    };
    return enumeration;
}

var Coin = enumeration({Penny:1,Nickel:5,Dime:10,Quarter:25});
var c = Coin.Dime;
c instanceof Coin;
c.constructor == Coin;
Coin.Quarter + 3*Coin.Nickel;
Coin.Dime = 10;
Coin.Dime > Coin.Nickel;
String(Coin.Dime) + ":" + Coin.Dime

//ʹ��ö����������ʾһ���˿���
function Card(suit,rank){
    this.suit = suit;
    this.rank = rank;
}

Card.Suit = enumeration({Clubs:1,Diamond:2,Hearts:3,Spades:4});
Card.Rank = enumeration({Two:2,Three:3,Four:4,Five:5,Six:6,Seven:7,Eight:8,Nine:9,Ten:10,Jack:11,Queen:12,King:13,Ace:14});

Card.prototype.toString = function(){
    return this.rank.toString() + ' of' + this.suit.toString();
};

Card.prototype.compareTo = function(that){
    if(this.rank < that.rank) return -1;
    if(this.rank > that.rank) return 1;
};

 Card.orderByRank = function(a,b){return a.compareTo(b)};

 Card.orderBySuit = function(){
     if(a.suit < b.suit) return -1;
     if(a.suit > b.suit) return 1;
     if(a.rank < b.rank) return -1;
     if(a.rank > b.rank)  return 1;
     return 0;
 };

 function Deck(){
     var cards = this.cards = [];
     Card.Suit.forEach(function(s){
         Card.Rank.forEach(function(r){
             cards.push(new Card(s,r));
         })
     })
 }
 Deck.prototype.shuffle = function(){
     var deck = this.cards,len=deck.length;
     for(var i=len-1;i>0;i--){
         var r = Math.floor(Math.random()*(i+1)),temp;
         temp = deck[i],deck[i]=deck[r],deck[r]=temp;
     }
     return this;
 };

 Deck.prototype.deal = function(n){
     if(this.cards.length < n) throw 'Out of cards';
     return this.cards.splice(this.cards.length - n,n);
 };

 var deck = (new Deck()).shuffle();
 var hand = deck.deal(13).sort(Card.orderBySuit);

 //��׼ת������
extend(Set.prototype,{
   toString:function(){
       var s = "{",i=0;
       this.forEach(function(v){s+=((i++ > 0) ? ", ":"")+v});
   },
    toLocaleString:function(){
       var s="{",i=0;
       this.forEach(function(v){
           if(i++ >0) s+=", ";
           if(v == null) s+= v;
           else s+=v.toLocaleString();
       });
       return s+'}';
    },
    toArray:function(){
        var a = [];
        this.forEach(function(v){a.push(v)});
        return a;
    }
});

Set.prototype.toJSON = Set.prototype.toArray;

//�Ƚ�
Range.prototype.constructor = Range;
Range.prototype.equals = function(that){
    if(that == null) return false;
    if(that.constructor !== Range) return false;
    return this.from == that.from && this.to == that.to;
};

Set.prototype.equals = function(that){
    if(this == that) return true;

    if(!(that instanceof Set)) return false;
    if(that.size() != this.size()) return false;
    try{
        this.forEach(function (v){
            if(!that.contains(v)) throw false;
            return true;
        })
    }catch(e){
        if(x === false) return false;
        throw x;
    }
}









