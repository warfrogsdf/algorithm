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
  let edge;
  let left;
  let right;
  while (stack.length) {
    i = stack.pop();
    edge = i;
    left = 2 * i + 1;
    right = 2 * i + 2;

    if (left < len && comp(arr[edge], arr[left]) < 0) {
      edge = left;
    }

    if (right < len && comp(arr[edge], arr[right]) < 0) {
      edge = right;
    }

    if (edge !== i) {
      swap(arr, i, edge);
      stack.push(edge);
    }
  }
}

// 判断是否是叶子节点
function isLeaf(arr, i) {
  let len = arr.length;
  return i > -1 && i < len && (i * 2 + 1) < len;
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
function insert(arr, item, comp) {
  arr.push(item);
  build(arr, comp);
}

// 将新元素提升使其符合堆的性质；
function update(arr, i, item, comp) {
  let len = arr.length;
  arr[i] = item;
  if(isLeaf(arr, i)){
    i = Math.ceil(i/2) -1;
  }
  for (; i >= 0; --i) {
    heapAdjust(arr, i, len, comp);
  }
}

// 获取当前堆顶元素的值；
function get(arr) {
  return arr[0]
}

// 删除堆顶元素；
function del(arr, comp) {
  let tmp = arr[0];
  let len = arr.length;
  arr[0] = arr.pop();
  heapAdjust(arr, 0, len, comp);
  return tmp;
}

// 使删除堆顶元素的堆再次成为堆。
function heapify(){

}

export default {
  build,
  insert,
  update,
  delete: del,
  get
}
