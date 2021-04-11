let temp = [];
function main(arr) {
  mergeSort(0, arr.length - 1, arr);
  return temp;
}

function merge(left, right, mid, arr) {
  let index = 0;
  let i = left;
  let j = mid + 1;
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[index++] = arr[i++];
    } else {
      temp[index++] = arr[j++];
    }
  }

  while (i <= mid) {
    //将左边剩余元素填充进temp中
    temp[index++] = arr[i++];
  }
  while (j <= right) {
    //将右序列剩余元素填充进temp中
    temp[index++] = arr[j++];
  }
  index = 0;
  //将temp中的元素全部拷贝到原数组中
  while (left <= right) {
    console.log("---", temp[index]);
    arr[left++] = temp[index++];
  }
}

function mergeSort(left, right, arr) {
  // 子问题
  if (left < right) {
    let mid = left + ((right - left) >> 1);

    mergeSort(left, mid, arr);

    mergeSort(mid + 1, right, arr);

    merge(left, right, mid, arr);
  }
}

console.log("----", main([40, 87, 1, 30, 9, 10]));
