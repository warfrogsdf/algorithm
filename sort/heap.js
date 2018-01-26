/**
 * Created by lib7311 on 2016/10/24.
 * 堆排序
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

function buildMaxHeap(arr, comp) {
  let i;
  let len = arr.length;
  for (i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapAdjust(arr, i, len, comp);
  }
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
