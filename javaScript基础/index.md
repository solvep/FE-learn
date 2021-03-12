✅什么是词法作用域
javascript中的作用域就是词法作用域，javascript中的词法作用域是一种静态的概念，既在代码的书写阶段就已经确定（如果不使用eval、with这类改变词法作用域的方法）
✅tree-shaking 的原理
show code 
commjs ： 下面这种写法被允许 ，这些模块是 dynamic 动态加载的，这意味着我们可以根据代码中的条件导入新模块。
var myDynamicModule; // 
if (condition) {
    myDynamicModule = require("foo");
} else {
    myDynamicModule = require("bar");
}
es module: 这是 static 的。使用import语法，我们不再能够动态导入模块。
import foo from "foo";
import bar from "bar";
if (condition) {
    // do stuff with foo
} else {
    // do stuff with bar
}
我们必须在任何条件之外定义全局范围内的所有导入
🔲