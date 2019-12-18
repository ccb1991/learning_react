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