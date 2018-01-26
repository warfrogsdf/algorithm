/**
 * Created by lib7311 on 2016/10/24.
 * 基数排序
 */

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

export default function radix(arr, comp) {
  let len = arr.length,
    i,
    j,
    tmp,
    max = 0,
    min = 0;
  for (i = 0; i < len; ++i) {
    tmp = arr[i].toString().split('.');
    if (tmp[0].length > max) {
      max = tmp[0].length;
    }
    if (tmp[1] && tmp[1].length > min) {
      min = tmp[1].length;
    }
  }
  // 基数排序正数部分
  for (i = 0; i < max; ++i) {
    for (j = 0; j < len; ++j){
      
    }
  }
  // 基数排序负数部分
  for (i = 0; i < min; ++i) {

  }
};
