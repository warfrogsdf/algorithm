/**
 * Created by lib7311 on 2016/10/24.
 * 插入排序
 */

// import binarySearch from '../search/binarySearch'

/**
 * binary insert sorting
 * arr.sort([comp])
 * @param {function} comp - Specifies a function that defines the sort order
 * @param {number} start - default 0
 * @param {number} end - default arr.length
 * @result {array} arr - The sorted array
 */

export default function insert(comp, start = 0, end) {
  let arr = this,
    len = end || arr.length,
    left,
    right,
    i,
    j,
    tempItem,
    temp,
    mid;
  for (i = start + 1; i < len; ++i) {
    tempItem = arr[i];
    left = start;
    right = i - 1;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      temp = comp(tempItem, arr[mid]);
      if (temp < 0) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    for (j = i - 1; j >= left; --j) {
      arr[j + 1] = arr[j];
    }
    arr[left] = tempItem;
  }
  return arr;
};
