//  用递归方法找出数组中的最大值

// 递归行为的时间复杂度 估计 使用的master公式
//  T(N) = a * T(N/b) + O(N ^ d)
// 1) log(b,a) > d -> 复杂度为O(N^log(b,a))
// 2) log(b,a) == d -> 复杂度为O(N^d * logN)
// 3) log(b,a) < d -> 复杂度为O(N^d)


function process(arr, left, right) {
  if(left == right) return arr[left] // 出口

  let mid = left + ((right - left) >> 1)
  console.log('mid', mid)
  let leftMax = process(arr, left, mid)
  let rightMax = process(arr, mid + 1, right)
  return Math.max(leftMax, rightMax)
}

let arr = [1,24,4,65,32,245,345,345,575]

console.log('---', process(arr, 0, 3))