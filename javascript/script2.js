// 此处的test其实就是defaultexport中的默认导出
import test from "./defaultexport";
// const 声明一个只读的常量，一旦声明，常量的值就不能改变
// const定义常量与使用let 定义的变量相似：
// （1）二者都是块级作用域
// （2）都不能和它所在作用域内的其他变量或函数拥有相同的名称
const test2 = test();
export default expression
export default function () {}