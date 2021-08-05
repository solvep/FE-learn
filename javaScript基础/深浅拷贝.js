// 浅拷贝的原理和实现
// 对于浅拷贝的递归我们可以初步理解为：
/**
 * 自己创建一个新的对象，来接受你要重新复制或引用的对象值。如果对象属性是基本的数据类型，
 * 复制的就是基本类型的值给新对象；但如果属性是引用数据类型，复制的就是内存中的地址
 * 如果其中一个对象改变了这个内存中的地址，肯定会影响到另外一个对象。
 */
// 1. Object.assign(target, ...sources)
/**
 * 1. 不会拷贝对象的继承属性；
 * 2. 不会拷贝对象的不可枚举的属性；
 * 3. 可以拷贝Symbol类型的属性；
 */

// let target = {a: 1, b: 2}
// let source = {c: { b:1 }, sym: Symbol(1)}
// Object.defineProperty(obj1, 'innumerable', {
//   value:'不可枚举属性',
//   enumerable: false
// })

// Object.assign(target, source)

// source.c = 100
// source.d.f = 1000
// console.log('---', target, source)

// --- { a: 1, b: 2, c: 3, d: { f: 1000 } } { c: 100, d: { f: 1000 } }

// 2. 扩展运算符方式 浅拷贝，比Object.assing使用更加方便
// let obj = {a: 1, b:{c:1}}
// let obj2 = {...obj}

// obj.a = 2
// console.log('obj', obj, obj2)

// 3. concat拷贝数组

// let arr = [1, 2, 3, {a: 1}]
// let newArr = arr.concat()
// let nArr = newArr.concat(arr, arr)
// nArr[3].a = 100
// newArr[1] = 100;
// console.log('arr', arr)
// console.log('newArr', nArr)

// 4. slice拷贝数组

// let arr = [1, 2, 4, 5, { a: 1 }]
// let newArr = arr.slice(1)
// newArr[3].a = 100

// console.log('---', arr, newArr)

// 5. 实现浅拷贝

/**
 * 1. 基础的数据类型做一个最基本的拷贝
 * 2. 对引用类型开辟一个新对存储， 并且拷贝一层对象属性
 */

// function shallClone(target) {

//   if(typeof target !== 'object' || target === null) return target
//   let clone =  Array.isArray(target) ?  [] : {}

//   for(const key in target) {
//     target.hasOwnProperty(key) ? clone[key] = target[key] : ''
//   }

//   return clone

// }

// let arr = [1, 2, 3, {a:23}]

// let newArr = shallClone(arr)

// newArr[1] = 1000

// console.log('===', arr, newArr)

/**
 * 深拷贝
 * 将一个对象从内存中完整地拷贝出来一份给目标对象，并从堆内存中开辟一个全新的空间
 * 放新对象，并且新对象的修改不会改变原对象，二者实现真正的分离
 *
 * 使用JSON.stringify
 * 1. 拷贝的对象的值如果有函数，undefined,symbol, 经过JSON.stringify 序列化之后的
 * 字符串中这个键值对会小事
 * 2. 拷贝Date引用类型会变成字符串
 * 3. 无法拷贝不可枚举的属性
 * 4. 无法拷贝对象的原型链
 * 5. 拷贝RegExp引用类型会变成控对象；
 * 6. 对象中含有NaN，Infinity以及-Infinity，JSON序列化的结果会变成null
 * 7. 无法拷贝对象的循环引用，
 */

// 1.乞丐版 JSON.stringify

// let obj = {a: 1, b: 23, c: {a: 123}}

// let newObj = JSON.parse(JSON.stringify(obj))

// newObj.c.a = 12349

// console.log('----', newObj, obj)

// function Obj() {

//   this.func = function () { alert(1) };

//   this.obj = {a:1};

//   this.arr = [1,2,3];

//   this.und = undefined;

//   this.reg = /123/;

//   this.date = new Date(0);

//   this.NaN = NaN;

//   this.infinity = Infinity;

//   this.sym = Symbol(1);

// }

// let obj1 = new Obj();

// Object.defineProperty(obj1,'innumerable',{

//   enumerable:false,

//   value:'innumerable'

// });

// console.log('obj1',obj1);

// let str = JSON.stringify(obj1);

// let obj2 = JSON.parse(str);

// console.log('obj2',obj2);

// 实现一个深拷贝

function deepClone(target) {
  let cloneOje = {};
  if (typeof target === "object") {
    for (const key in target) {
      typeof target[key] === "object"
        ? (cloneOje[key] = deepClone(target[key]))
        : (cloneOje[key] = target[key]);
    }
  }
  return cloneOje;
}
let obj = { a: 1, b: 3, c: { a: 23 } };
let newObj = deepClone(obj);

newObj.c.a = 100;

console.log("----", obj, newObj);

class A {
  constructor() {
    this.name = "1111";
  }
}
A.prototype.x = 100;

class B extends A {
  m() {
    return super.x;
  }
}
const b = new B();
console.log("---", b.m(), b.name);
