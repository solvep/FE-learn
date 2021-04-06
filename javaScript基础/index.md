javaScript 是弱类型，但并不是没有类型。
并不像静态语言 java c#这种可以靠类型来在编译阶段检查错误，像js这种动态对弱类型语言在编译的时候是解决不了的。
基本数据类型：
1. boolean
2. number
3. string
4. null：根本就不存在
5. undefined：声明了但并未赋值，存在但并没有值
6. Symbol
Object：
1. Array
2. RegExp
3. Date
4. Math
5. ...
typeof: 
可以识别除null以外的基本数据类型。 
可区分function 和 其他任何对象Object。
总是返回一个字符串。
错误处理： 在es5之前，typeof 保证对任何所给的操作数返回一个字符串。即便没有声明的标识符，typeof也能返回'undefined'，永远不会抛出错误。 但是在加入块级作用域let 和 const 以后，在被声明之前对let 和 const 变量使用typeof会抛出一个 ReferenceError（不存在的变量被引用）。
声明：
1. 使用关键字var：函数作用域
2. 使用关键字let：块级作用域
3. 直接使用：全局作用域 （非严格模式之下）
只声明不赋值，变量的默认值是 undifined
变量提升：
javaScript可以引用稍后声明的变量。
函数：
一个函数就是一个可以被外部代码调用（或者函数本身递归调用）的子程序
定义函数： 
1.函数声明
2.函数表达式
3.Function构造函数
4.箭头函数
function fn() {} // 函数声明
var fn = function() {} // 函数表达式
var fn = new Function(arg1, arg2, ...argN) // Function构造函数
var fn = () => {} // 箭头函数
argument：
1. argument一个包含了传递给当前执行函数参数的类似于数组的对象
2. arguments.length：传给函数的参数的数目
function foo() {
    return arguments;
}
foo(1, 2, 3) // Arguments(3) 类数组
rest:
function foo(..args) {
    return args
}
foo(1, 2, 3) // Array[3] 数组
default:
函数的参数可以在定义的时候有默认值
function foo(a = 2, b = 5) {}
对象：
JavaScript中对象是可变的 键控集合（keyed collections）
定义对象：
a.字面量
b.构造函数
c....
var Object = {
        prop:'value'
}
var date = new Date()
构造函数：
构造函数和普通函数没有区别，使用 new 关键字调用的就是构造函数，使用构造函数可以实例化一个对象
函数的返回值有两种情况：
a. 显式调用return 返回 return 后表达式的求值
b. 没有调用return 返回 undefined
构造函数返回值：
a. 没有返回值
b. 简单数据类型
c. 对象类型
1. 前两种情况构造函数返回构造对象的实例，实例化对象正是利用的这个特性。
2. 第三种构造函数和普通函数表现一致，返回 return 后表达式的结果。
prototype：
1. 每个函数都有一个 prototype 的对象属性，对象内有一个 construtor 属性，默认指向本身
2. 每个对象都有一个 _ ptoto_ 的属性，属性指向其父类型的prototype
this 和 作用域
作用域 ： 隔离 变量和函数 确定其可访问性。
每个函数都会有自己的执行上下文，当代码在这个环境中执行时候，会创建变量对象的作用域链
作用域链式是一个对象列表，保证了变量对象的有序访问。
javaScript的执行分为：解释和执行两个阶段
1. 解释阶段： 
a. 词法分析
b. 语法分析
c. 作用域的确定
2. 执行阶段：
a. 创建执行上下文（this
b. 执行函数代码
c. 垃圾回收
javaScript 解释阶段便会确定作用域规则，因此作用域在函数定义时就已经确定了，而不是在函数调用时去定，但是执行上下文是函数执行之前创建的，执行上下文最明显的就是this的指向是执行时确定的。 而作用域访问的变量是编写代码的结构确定的。
区别：执行上下文是在运行时确定的，随时可能改变。作用域在定义时就确定，并且不会改变。
总结： 如果要查找一个变量的值， 通过作用域确定可访问性，通过执行上下文确定具体的值
链接：
深入理解javaScript原型和闭包：https://www.cnblogs.com/wangfupeng1988/p/3991995.html
JavaScript作用域原理：https://www.laruence.com/2009/05/28/863.html
javascript深入理解--作用域，作用域链，闭包的面试题解：https://www.cnblogs.com/chengxs/p/10451494.html
call 和 apply ， bind：
fn.call(context, arg1, arg2, ...)
fn.apply(context, arg)
改变this 的作用域并执行。
Function.prototype.bind : 返回一个新函数，函数的作用域为 bind 参数。
箭头函数：
简写的函数表达式，拥有词法作用域 和 this值。 在定义时就确定了this
继承：
 在javaScript的场景，继承有两个目标，子类需要得到父类的 属性和方法