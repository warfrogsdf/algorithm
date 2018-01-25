/**
 * Created by lib7311 on 2016/10/24.
 * shell sorting
 * unstable sort
 */

function shellInsertSort(arr, gap, comp) {
  let len = arr.length,
    i,
    j,
    k,
    tempItem;
  for (i = 0; i < gap; ++i) {
    for (j = i + gap; j < len; j += gap) {
      if (comp(arr[j],  arr[j-gap]) < 0) {
        tempItem = arr[j];
        k = j - gap;
        while (k >= 0 && comp(arr[k], tempItem) > 0) {
          arr[k + gap] = arr[k];
          k -= gap;
        }
        arr[k + gap] = tempItem;
      }
    }
  }
};


export default function Shell(comp) {
  let arr = this,
    len = arr.length,
    gap = Math.floor(len / 2);
  while (gap >= 1) {
    shellInsertSort(arr, gap, comp);
    gap = Math.floor(gap / 2);
  }
  return arr;
};
