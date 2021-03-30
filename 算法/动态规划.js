// arr = [5, 10, 25, 1] ,aim = 1000
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。

let memo = {}
function main(arr, aim) {

  if(arr.length <= 0) {
    return -1
  }

  return process(arr, aim)

}

function process(arr, aim) {

  if(aim < 0) {
    return -1;
  }

  if(aim === 0) {
    return 0;
  }
  
  let min = Number.MAX_SAFE_INTEGER // 硬币数量
  
  for(let i = 0; i < arr.length; i++) {
   let res = process(arr, aim - arr[i])
   if(res >= 0 && res < min) {
      min = res + 1
   }
  }
  memo[aim - 1] = min == Number.MAX_SAFE_INTEGER  ? -1 : min
  return memo[aim - 1]

}

console.log('-----', main([1, 2, 5], 10))


