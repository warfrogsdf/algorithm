/**
 * head structure
 */
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function heapAdjust(arr, nodeIndex, len, comp) {
  len = len || arr.length;
  let stack = [nodeIndex];
  let i;
  let largest;
  let left;
  let right;
  while (stack.length) {
    i = stack.pop();
    largest = i;
    left = 2 * i + 1;
    right = 2 * i + 2;

    if (left < len && comp(arr[largest], arr[left]) < 0) {
      largest = left;
    }

    if (right < len && comp(arr[largest], arr[right]) < 0) {
      largest = right;
    }

    if (largest !== i) {
      swap(arr, i, largest);
      stack.push(largest);
    }
  }
}

// 建立一个空堆；
function build(arr, comp){
  let i;
  let len = arr.length;
  for (i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapAdjust(arr, i, len, comp);
  }
}

// 向堆中插入一个新元素；
function insert(arr, item) {

}

// 将新元素提升使其符合堆的性质；
function update() {

}

// 获取当前堆顶元素的值；
function get() {

}

// 删除堆顶元素；
function del() {

}

// 使删除堆顶元素的堆再次成为堆。
function heapify(){

}

export default {
  build,
  insert,
  update,
  get,
  delete: del,
  heapify
}

export default function heap(comp) {
  let arr = this;
  let len = arr.length;
  buildMaxHeap(arr, comp);
  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapAdjust(arr, 0, i, comp);
  }

  return arr;
}
