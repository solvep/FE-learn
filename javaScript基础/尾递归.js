
/* 
  尾递归： 在函数的最后一步调用自身 tail-recursive
  tailRecursive
*/

function tailRecursive() {
  
  return tailRecursive()
}

/* 
  尾调用： 在函数的最后一步另外一个函数
*/
function tailCall() {

  return otherFun()
}

/* 
传统递归
 */

function sum(n) {
  if(n === 1) return 1
  return n + sum(n - 1)
}
// 执行过程 
sum(5)
5 + sum(4)
5 + (4 + sum(3))
5 + (4 + (3 + sum(2)))
5 + (4 + (3 + (2 + sum(1))))
5 + (4 + (3 + (2 + 1)))
5 + (4 + (3 + 3))
5 + (4 + 6)
5 + 10
15

/* 尾递归 */
function sum(x, total) {
  if(x === 1) return x + total

  return sum(x - 1, total + x)
}

sum(5, 0)
sum(4, 5)
sum(3, 9)
sum(2, 12)
sum(1, 14)
15

// 尾递归的判断标准是函数运行 最后一步 是否调用自身，而不是 是否在函数的 最后一行 调用自身。
// 最后一行调用其他函数 并返回叫尾调用。



function id(x) {
  return x + c; // (A)
}

function f(a) {
  let b = a + 1;
  let c = 100
  return id(b); // (B)
}

console.log(f(2)); // (C)