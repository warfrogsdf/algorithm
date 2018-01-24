/**
 * Created by lib7311 on 2016/10/24.
 * 插入排序
 */

// import binarySearch from '../search/binarySearch'

/**
 * binary insert sorting
 * arr.sort([comp])
 * @param {function} comp - Specifies a function that defines the sort order
 * @param {boolean} up - default up order
 * @result {array} arr - The sorted array
 */

export default function insert(comp, up = true) {
  let arr = this,
    len = arr.length,
    left,
    right,
    i,
    j,
    tempItem,
    temp,
    mid;
  for (i = 1; i < len; ++i) {
    tempItem = arr[i];
    left = 0;
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
