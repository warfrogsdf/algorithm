/**
 * Created by lib7311 on 2016/10/24.
 * 插入排序
 */

import binarySearch from '../search/binarySearch'

/**
 * insert sorting
 * arr.sort([compareFunction])
 * @param {function} compareFunction - Specifies a function that defines the sort order
 * @result {array} arr - The sorted array
 */

export default function Insert(compareFunction) {
  let arr = this,
    len = arr.length,
    start,
    end, k,
    tempItem,
    temp,
    mid;
  for (i = 1; i < len; ++i) {
    tempItem = arr[i];
    start = 0;
    end = i - 1;
    while (start <= end) {
      mid = Math.floor((i+j)/2);
      temp = compareFunction(tempItem, arr[mid]);
      if (temp > 0) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return arr;

  for (var i = 1; i < arr.length; i++) {
    var temp = arr[i];
    var low = 0, high = i - 1;
    var mid = -1;
    while (low <= high) {
      mid = low + (high - low) / 2;
      if (arr[mid] > temp) {
        high = mid - 1;
      } else { // 元素相同时，也插入在后面的位置                
        low = mid + 1;
      }
    }
    for(var j = i - 1; j >= low; j--) {
      arr[j + 1] = arr[j];
    }
    arr[low] = temp;
  }
};
