//  选择排序

function sort (arr) {
  for( let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++ ){
      if(arr[j] < arr[i]) {
        swap(arr, i , j)
      }
    }
  }
  return arr
}

// 冒泡排序

function sort1(arr) {
  for(let i = 0; i < arr.length -1; i++) {
    for(let j = i; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}


// 插入排序

function sort2(arr) {
  if(arr == null || arr.length < 2) {
    return
  }
  for(let i = 1; i < arr.length ; i++) {
    for(let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1 )
    }
  }
  return arr
}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j]
  arr[j] = arr[i] ^ arr[j]
  arr[i] = arr[i] ^ arr[j]
}

let arr = [1, 3, 34, 5, 23, 567, 354, 234, 43]

console.log('arr', sort(arr))
console.log('arr', sort1(arr))
console.log('arr', sort2(arr))


function test() {
  let testArr = []
  for(let i = 0; i < 100; i++) {
    testArr.push(parseInt(Math.random() * 1000))
  }
  if(sort(testArr) === sort1(testArr)) return true
}

function main() {
  for(let i = 0; i < 1000; i++) {
    if(!test()) return i
  }
  return 1000
}
console.log('main()', main())

