function inherit(p) {
    if (p==null) throw TypeError();
    if (Object.create)
        return Object.create(p);
    var t=typeof p;
    if (t!=="object"&&t!=="function")
        throw TypeError();
    function f() {};
    f.prototype=p;
    return new f()
}

function Range(from,to) {
    this.from=from;
    this.to=to;
}

// 构造函数的prototype属性会被用作新对象的原型
Range.prototype={
    //显示设置构造函数反向引用
    constructor:Range,

    includes:function (x) {
        return this.from<=x && x<=this.to;
    },

    foreach:function (f) {
        for (var x=Math.ceil(this.from); x<=this.to;x++) f(x);
    },
    toString:function () {
        return "("+this.from+"..."+this.to+")";
    }
};

var r= new Range(1,3);
r.includes(2);
r.foreach(console.log);
console.log(r);