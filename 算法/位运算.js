//  一个数组中 以知 只有一种数出现了奇数次   求这个数

function process(arr) {
  let res = null
  for(const item of arr) {
    res ^= item
  }
  return res
}

function process1(arr) {
  let res = null 
  for(const item of arr){
    res ^= item
  } 
  let rightOne = res & (~res  + 1)

  let onlyOne = 0
  for(const item of arr) {
    if((item & rightOne) == 0) {
      onlyOne ^= item
    }
  }
  console.log('----', onlyOne, res ^ onlyOne)
}

let arr = [1, 1, 2, 2, 3, 7, 3, 3, 3]
let arr1 = [1, 1, 2, 2, 3, 7, 3, 3, 3, 9]


console.log('--', process(arr))
process1(arr1)






//  俩个数出现了奇数次 其他的都是偶数次  求这两个数