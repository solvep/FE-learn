function main(arr) {
  let len = arr.length - 1;
  Quicksort(arr, 0, len);
  return arr;
}

function Quicksort(arr, left, right) {
  if (left >= right) return;

  // let mid = left + ((left + right) >> 1);
  let random = parseInt(Math.random() * (right - left + 1));
  swap(arr, left + random, right);

  let p = partition(arr, left, right);

  Quicksort(arr, left, p[0]);
  Quicksort(arr, p[1], right);
}

function partition(arr, left, right) {
  let target = arr[right];
  let i = left - 1;
  let j = right;
  while (left < j) {
    if (arr[left] > target) {
      swap(arr, left, --j);
    } else if (arr[left] < target) {
      swap(arr, left++, ++i);
    } else {
      left++;
    }
  }
  swap(arr, j, right);
  return [i, j];
}

function swap(arr, i, j) {
  let tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
}

function random() {
  let testArr = [];
  for (let i = 0; i < 100; i++) {
    testArr.push(parseInt(Math.random() * 1000));
  }
  if (main(testArr) === testArr.sort()) return true;
}

function test() {
  for (let i = 0; i < 1000; i++) {
    if (!random()) return i;
  }
  return "测试成功";
}
console.log("test:", test());
