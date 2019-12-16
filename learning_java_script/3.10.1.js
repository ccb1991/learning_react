function test() {
    if (1===1){
        var j=0;
        for (var k=0;k<10;k++){
            // K打印1~9
            console.log(k);
        }
        // K输出10
        console.log(k)
    }
    // J 打印0
    console.log(j)
}

test();

var scope= "global";
function f() {
    console.log(scope); //输出"undefined", 而不是"global",
                        // 因为下面那行语句覆盖了全局变量的global
                        // 而真正的赋值还没有进行。所以这里是undefined
    var scope = "local"; //变批在这里赋初始值，但变量本身在函数体内任何地方均是有定义的
    console.log(scope); //输出"local"
}

console.log([1,2,3].toLocaleString());
console.log([1,2,3].toString());

function counter(n){
    return {
        get count(){return n++;},
        set count(m) {
            if (m>=n) n=m;
            else throw Error("count can only be set to a larger value");
        }
    };
}

var c= counter(1000);
c.count;
c.count;
c.count=2000;
// console.log(c.count);
// c.count=2000;

function constfuncs() {
    var funcs=[];
    for(var i=0;i<10;i++)
        funcs[i]=function () {return i;};
    return funcs;
}

var funcs=constfuncs();
console.log(funcs[5]());