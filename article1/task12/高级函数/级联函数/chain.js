//链式调用
function classA(){
    this.lian= "";
    this.zui = "";
    this.tui = "";
}

classA.prototype = {
    setLian : function(){
        this.lian = "红扑扑";
        return this;
    },
    setTui : function(){
        this.tui = "大长腿";
        return this;
    },
    setZui : function(){
        this.zui = "大嘴";
    }
}

var person = new classA();
person.setLian().setTui().setZui();