/**
 * Created by lib7311 on 2016/10/24.
 *
 */

import insertSort from 'insert';

/**
 * swap array value index i and index j
 * @param arr
 * @param i
 * @param j
 */
function swap(arr, i, j) {
  let tmp = arr[j];
  arr[j] = arr[i];
  arr[i] = tmp;
}

function selectPivot(arr, low, high) {
  let mid = low + ((high - low) >> 1);//计算数组中间的元素的下标

  //使用三数取中法选择枢轴
  if (arr[mid] > arr[high])//目标: arr[mid] <= arr[high]
  {
    swap(arr[mid], arr[high]);
  }
  if (arr[low] > arr[high])//目标: arr[low] <= arr[high]
  {
    swap(arr[low], arr[high]);
  }
  if (arr[mid] > arr[low]) //目标: arr[low] >= arr[mid]
  {
    swap(arr[mid], arr[low]);
  }
  //此时，arr[mid] <= arr[low] <= arr[high]
  return arr[low];
  //low的位置上保存这三个位置中间的值
  //分割时可以直接使用low位置的元素作为枢轴，而不用改变分割函数了
}

/**
 * 快速排序
 * 1）设置两个变量i、j，排序开始的时候：i=0，j=N-1；
 * 2）以第一个数组元素作为关键数据，赋值给key，即key=A[0]；
 * 3）从j开始向前搜索，即由后开始向前搜索(j--)，找到第一个小于key的值A[j]，将A[j]和A[i]互换；
 * 4）从i开始向后搜索，即由前开始向后搜索(i++)，找到第一个大于key的A[i]，将A[i]和A[j]互换；
 * 5）重复第3、4步，直到i=j； (3,4步中，没找到符合条件的值，即3中A[j]不小于key,4中A[i]不大于key的时候改变j、i的值，使得j=j-1，i=i+1，直至找到为止。找到符合条件的值，进行交换的时候i， j指针位置不变。另外，i==j这一过程一定正好是i+或j-完成的时候，此时令循环结束）。
 */
export default function quick(comp) {
  let arr = this,
    len = arr.length,
    low,
    high,
    stack = [
      {
        low: 0,
        high: len - 1
      }
    ],
    stackItem,
    midData,
    leftHigh,
    rightLow;
  while (stack.length) {
    stackItem = stack.pop();
    low = stackItem.low;
    high = stackItem.high;
    selectPivot(arr, low, high);
    midData = arr[low];
    while (low < high) {
      // while (low < high && arr[high] >= midData) {
      while (low < high && comp(arr[high], midData) >= 0) {
        --high;
      }
      arr[low] = arr[high];
      // while (low < high && arr[low] <= midData) {
      while (low < high && comp(arr[low], midData) <= 0) {
        ++low;
      }
      arr[high] = arr[low];
    }
    arr[low] = midData;

    leftHigh = low;
    while (comp(arr[leftHigh - 1], arr[leftHigh]) === 0) {
      --leftHigh
    }

    rightLow = low;
    while (comp(arr[rightLow + 1], arr[leftHigh]) === 0) {
      ++rightLow
    }

    if (leftHigh - stackItem.low > 10) {
      stack.push({
        low: stackItem.low,
        high: leftHigh - 1
      });
    } else {
      insertSort.call(arr, comp, stackItem.low, leftHigh);
    }

    if (stackItem.high - rightLow > 10) {
      stack.push({
        low: rightLow + 1,
        high: stackItem.high
      });
    } else {
      insertSort.call(arr, comp, rightLow + 1, stackItem.high + 1);
    }
  }
};
