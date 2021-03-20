function heapify(arr, index, heapSize) {
  let left = index * 2 + 1

  let larger = left
  while(left < heapSize) {
    arr[left] > arr[left + 1] ? '' : larger = left + 1
    arr[larger] > arr[left ]
  }


}

function heapInsert (arr, index) {
  while(arr[index] > arr[(index-1) >> 2]) {
    swap(arr, index, (index-1) >> 2)
    index =  (index-1) >> 2
  }
}

function swap(arr, i, j) {
  let tem = arr[i]
  arr[i] = arr[j]
  arr[j] = tem
}