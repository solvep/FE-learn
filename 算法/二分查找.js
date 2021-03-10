//  在一个有序的数组中， 找到某个数的存在

function binarySearch(arr, target) {
  let i = 0
  let j = arr.length - 1

  while (i <= j) {
    let mid = parseInt((i + j) / 2)
    if(arr[mid] !== target){
      if(arr[mid] >= target) {
        j = mid - 1
      } else {
        i = mid + 1
      }
    } else {
      return mid
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5, 7, 12, 13, 15]

console.log('------', binarySearch(arr, 15))


// 在一个有序数组中，找到 >= 某个数左侧的位置

function binarySearch1(arr, target) {
  let i = 0
  let j = arr.length - 1
  var mid
  while (i <= j) {
      mid = parseInt((i + j) / 2)
      if(arr[mid] >= target) {
        j = mid - 1
      } else {
        i = mid + 1
      }
  }
  return mid
}

let arr1 = [1, 2, 3, 4, 5,5,5, 7, 12, 13, 15]

console.log('------', binarySearch1(arr1, 5))


//  局部最小问题， 在一个数组中arr无序，任何两个相邻的数不相等。 
// 如果 0 位置 小于 1位置那么就是局部最下，但是中间的数必须比两侧都小

function binarySearch2(arr) {
  if(!arr && arr.length < 2) return -1
  let i = 0 
  let j = arr.length - 1 

  if(arr[0] < arr[1]) return arr[0]

  if(arr[j] < arr[j-1]) return arr[j]

  while (i <= j) {
    let mid = parseInt((i + j) / 2)
    console.log('mid', mid)
    if(arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
      return mid
    } else {
      if(arr[mid] > arr[mid + 1]) {
        i = mid + 1
      } else {
        j = mid - 1
      }
    }
  }
  retur -2 // error
}

let arr2 = [93, 90, 2, 3, 4,5, 7, 12, 13, 15]

console.log('------', binarySearch2(arr2))