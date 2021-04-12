//  用递归方法找出数组中的最大值

// 递归行为的时间复杂度 估计 使用的master公式
//  T(N) = a * T(N/b) + O(N ^ d)
// 1) log(b,a) > d -> 复杂度为O(N^log(b,a))
// 2) log(b,a) == d -> 复杂度为O(N^d * logN)
// 3) log(b,a) < d -> 复杂度为O(N^d)

function process(arr, left, right) {
  if (left == right) return arr[left]; // 出口

  let mid = left + ((right - left) >> 1);
  let leftMax = process(arr, left, mid);
  let rightMax = process(arr, mid + 1, right);
  return Math.max(leftMax, rightMax);
}

// let arr = [1,24,4,65,32,245,345,345,575]

// console.log('---', process(arr, 0, 3))

// 递归排序

function process2(arr, left, right) {
  if (left == right) return; // 出口

  let mid = left + ((right - left) >> 1);
  process2(arr, left, mid);
  process2(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, L, M, R) {
  let help = [];
  let i = 0;
  let p1 = L;
  let p2 = M + 1;
  while (p1 <= M && p2 <= R) {
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= M) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }

  for (i = 0; i < help.length; i++) {
    console.log("---", arr[L + i]);
    arr[L + i] = help[i];
  }
}

// let arr = [1,24,4,65,32,245,345,345,575]
// let arr = [1, 24, 4]

// console.log('---', process2(arr, 0, 2), arr)

/**
归并排序的扩展问题
小和问题 和 逆序对问题
1. 小和问题
在一个数组中，每一个数左边比当前数小对数累加起来，
叫做这个数组的小和。求一个数组的小和。

2. 逆序对问题
在一个数组中，左边的数如果比右边的数大，则两个数构成一个逆序对，请打印所有的逆序对。
**/

// 小和问题。

function process3(arr, left, right) {
  if (left == right) return 0; // 出口

  let mid = left + ((right - left) >> 1);
  return (
    process3(arr, left, mid) +
    process3(arr, mid + 1, right) +
    merge1(arr, left, mid, right)
  );
}

function merge1(arr, left, mid, right) {
  let tem = [];
  let i = 0;
  let p1 = left;
  let p2 = mid + 1;
  let totalNum = 0;
  while (p1 <= mid && p2 <= right) {
    if (arr[p1] <= arr[p2]) {
      tem[i++] = arr[p1++];
      totalNum += arr[p1 - 1] * (right - p2 + 1);
    } else {
      tem[i++] = arr[p2++];
    }
  }

  while (p1 <= mid) {
    tem[i++] = arr[p1++];
  }
  while (p2 <= mid) {
    tem[i++] = arr[p2++];
  }

  for (i = 0; i < tem.length; i++) {
    arr[left + i] = tem[i];
  }
  return totalNum;
}

let arr = [1, 3, 4, 2, 5];

console.log("---", process3(arr, 0, 4), arr);

// 荷兰过期问题
/**
 * 问题一， 给定一个数组arr， 和一个数num，请把小于等于num的数放在数组的左边，
 * 大于num的数放在数组的右边。 要求额外的空间复杂度O（1），时间复杂度 n
 *
 **/

function process4(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  for (let k = 0; k < j; k++) {
    if (arr[k] < target) {
      swap(arr, k, i);
      i++;
    }

    if (arr[k] > target) {
      swap(arr, k, j);
      j--;
    }
    // console.log("----", arr, i, j, k);
  }

  return arr;
}

function swap(arr, i, j) {
  let tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
}

console.log("process4", process4([3, 5, 0, 3, 4, 5, 2, 6, 9, 6], 5));

// 求最大值

function main(arr) {
  return maxFn(arr, 0, arr.length - 1);
}

function maxFn(arr, left, right) {
  if (left < right) {
    let mid = left + ((right - left) >> 1);
    let rightValue = maxFn(arr, mid + 1, right);
    let leftValue = maxFn(arr, left, mid);
    console.log("--", rightValue, leftValue);
    return Math.max(rightValue, leftValue);
  } else {
    if (arr[left] === undefined) return 0;
    return arr[left];
  }
}

console.log("maxFn:", main([123, 4, 09, null, undefined, 134]));
