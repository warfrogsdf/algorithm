/**
 * Created by lib7311 on 2016/10/24.
 * 归并排序
 * 每趟采用二分插入排序
 */

import insert from './insert'

export default function merge(arr, comp) {
  let len = arr.length,
    i,
    j,
    _len = Math.pow(2, Math.ceil(Math.log2(len)));
  for(i = 2; i <= _len; i = i << 1){
    for(j = 0; j < len; j += i){
      insert.call(arr, comp, j, Math.min(j + i, len));
    }
  }
  return arr;
};
