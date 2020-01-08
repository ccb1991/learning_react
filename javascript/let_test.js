function  aFun1(){
    // i 对于for循环外的范围是不可见的(i is not defined)
    for(let i = 1; i<5; i++){
        //  i只有在这里是可见的
    }
    // i 对于for循环外的范围是不可见的(i is not defined)
}
function aFun2(){
    // i 对于for循环外的范围是可见的
    for(var i = 1;i<5; i++){
        // i 在for 在整个函数体内都是可见的
    }
    // i 对于for循环外的范围是可见的
}

function Box(width, length, height) {
    function volume(a,b,c) {
        return a*b*c;
    }
    this.boxVolume = volume(width, length, height);
}

// const crate=new Box(5,4,3);
// console.log("Volume = " + crate.boxVolume); // 正确地工作
// // 由于volume()并没有用关键字this把它设置为对象的方法，所以失败了
// console.log(crate.volume(5,4,3));



var lordify = regularPerson => {
    console.log('$(regularPerson.firstname) Canterbury')
};
var regularPerson = {
    firstname: "Bill",
    lastname: "Wilson"
};
lordify(regularPerson);
