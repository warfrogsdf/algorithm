/**
 * Created by lib7311 on 2016/10/24.
 * 选择排序
 */
export default function selection(comp, up = true) {
  let arr = this,
    len = arr.length,
    temp,
    edgeItem,
    edgeIndex,
    i,
    j;
  for (i = 0; i < len; ++i) {
    edgeItem = arr[i];
    edgeIndex = i;
    for (j = i + 1; j < len; ++j) {
      temp = comp(edgeItem, arr[j]);
      if (temp > 0) {
        edgeItem = arr[j];
        edgeIndex = j;
      }
    }
    for (j = edgeIndex - 1; j >= i; --j) {
      arr[j + 1] = arr[j];
    }
    arr[i] = edgeItem;
  }
  return arr;
};
