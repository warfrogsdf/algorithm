/**
 * Created by lib7311 on 2016/10/24.
 * 基数排序
 */

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

let bucket = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];

bucket.reset = function () {
  let i = 0;
  for (; i < 20; ++i) {
    this[i] = [];
  }
};

export default function radix(arr, comp, getNumber) {
  let len = arr.length,
    i,
    j,
    index,
    tmp,
    number,
    positiveNum = 0,
    negativeNum = 0;

  for (i = 0; i < len; ++i) {
    tmp = arr[i].toString().split('.');
    if (tmp[0] && tmp[0].length > positiveNum) {
      positiveNum = tmp[0].length;
    }
    if (tmp[1] && tmp[1].length > negativeNum) {
      negativeNum = tmp[1].length;
    }
  }

  // 基数排序正数部分
  for (i = 0; i < negativeNum + positiveNum; ++i) {
    for (j = 0; j < len; ++j) {
      // 一次获取i位上的数字，然后插入对象桶
      number = getNumber(arr, j);
      if (i < negativeNum) {
        // 处理负数部分
        tmp = number.toString().split('.')[1];
        if (!tmp || !tmp[negativeNum - 1 - i]) {
          index = 0;
        } else {
          index = Number(tmp[negativeNum - 1 - i]);
        }
      } else {
        // 处理正数部分
        index = ~~(~~(~~number / Math.pow(10, i - negativeNum)) % 10);
      }
      //console.log(index)
      if (comp(0, number) < 0) {
        bucket[Math.abs(index) + 10].push(arr[j]);
      } else {
        bucket[9 - Math.abs(index)].push(arr[j]);
      }
      //console.log(index)
    }
    arr.length = 0;
    arr = Array.prototype.concat.apply(arr, bucket);
    bucket.reset();
  }
  // 基数排序负数部分
  for (i = 0; i < negativeNum; ++i) {

  }

  return arr;
};
