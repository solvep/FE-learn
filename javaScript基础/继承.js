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

function parent3() {
  this.name = 'parent3'
  this.play = [1, 2, 3]
}

parent3.prototype.getName = function (){
  return this.name
}
parent3.prototype.test = [1, 2, 3, 4, 5]


parent3.prototype.nickName = '123'

function child3() {
  parent3.call(this)
  this.type = 'child3'
}

child3.prototype = new parent3()

child3.prototype.constructor = child3

let s1 = new child3()
let s2 = new child3()

s2.name = 1
s2.test.push('090')
s2.play.push('11111')

console.log('-----', s1.test, s2.test, s1.nickName, s2.nickName)