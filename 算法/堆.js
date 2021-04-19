function heapify(arr, index, heapSize) {
  // 让数组变成大根堆
  let left = index * 2 + 1;

  while (left < heapSize) {
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;

    largest = arr[largest] > arr[index] ? largest : index;

    if (largest == index) break;

    swap(arr, largest, index);
    index = largest;
    left = index * 2 + 1;
  }
}

function heapInsert(arr, index) {
  // 插入
  while (arr[index] > arr[(index - 1) >> 2]) {
    swap(arr, index, (index - 1) >> 2);
    index = (index - 1) >> 2;
  }
}

function swap(arr, i, j) {
  let tem = arr[i];
  arr[i] = arr[j];
  arr[j] = tem;
}

function heapSort(arr) {
  if (arr == null || arr.length < 2) return;

  for (let i = 0; i < arr.length; i++) {
    // O(n)
    heapInsert(arr, i); // O(log(n))
  }

  let heapSize = arr.length;
  swap(arr, 0, --heapSize);

  while (heapSize > 0) {
    // O(n)
    heapify(arr, 0, heapSize); // O(log(n))
    swap(arr, 0, --heapSize); // O(1)
  }
}
