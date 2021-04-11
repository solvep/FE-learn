// 原型链继承

// function parent1() {
//   this.name = 'parent1'
//   this.paly = [1,2,3]
// }

// function child1() {
//   this.type = 'child2'
// }

// child1.prototype = new parent1()

// let s1 = new child1()
// let s2 = new child1()

// s1.paly.push(1)
// console.log('---', s1.paly, s2.paly, s2.type)

// 原型链的缺陷  原型链上面的改变会影响所有的实例

// 构造函数继承

// function parent2() {
//   this.name = 'parent2'
// }

// parent2.prototype.getName = function () {
//   return this.name
// }

// function child2() {
//   parent2.call(this)
//   this.type = 'child1'
// }

// let child = new child2()

// console.log('---', child.name)

// console.log('+++', child.getName())

// 只能继承父类的实例属性和方法， 不能继承原型属性或者方法。

// 组合继承

// function parent3() {
//   this.name = "parent3";
//   this.play = [1, 2, 3];
// }

// parent3.prototype.getName = function () {
//   return this.name;
// };
// parent3.prototype.test = [1, 2, 3, 4, 5];

// parent3.prototype.nickName = "123";

// function child3() {
//   parent3.call(this);
//   this.type = "child3";
// }

// child3.prototype = new parent3();

// child3.prototype.constructor = child3;

// let s1 = new child3();
// let s2 = new child3();

// s2.name = 1;
// s2.test.push("090");
// s2.play.push("11111");

// console.log("-----", s1.test, s2.test, s1.nickName, s2.nickName);

/* 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。
Cruze子类实现父类颜色是红色，
价格是140000,售卖方法实现输出如下语句：将 红色的Cruze买给了小王价格是14万。 */

function car() {
  this.color = "blue";
  this.price = "10";
  this.name = "car";
}
car.prototype.method = function () {
  console.log(`将${this.color}的${this.name}买给了小王价格是${this.price}。`);
};
car.prototype.arr = [1, 2, 3];

function cruze() {
  car.call(this);
  this.name = "cruze";
  this.color = "红色";
  this.price = "14万";
}

// cruze.prototype = new car()
let _proto = Object.create(car.prototype);
_proto.constructor = cruze.prototype.constructor;
cruze.prototype = _proto;

console.log("cruze.prototype", cruze.prototype);
let c = new cruze();
let b = new cruze();
c.method();
c.arr.push(1);
console.log("----", b.arr);

// let a = 1;
// let b = 2;
// let c = 3;
// a = b = c;
// console.log("==", a, b, c); // 3 3 3

var x = { a: 1, b: 2 };
