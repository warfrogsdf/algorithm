/**
 * Created by lib7311 on 2016/10/24.
 * stable sorting
 */

/**
 * bubble sorting
 * arr.sort([comp])
 * @param {function} comp - Specifies a function that defines the sort order
 * @param {boolean} up - default up order
 * @result {array} arr - The sorted array
 */
export default function bubble(comp, up = true) {
  let arr = this,
    ordered = false, //false表示还处于无序,需要继续迭代; true表示有序
    i = arr.length - 1,
    j,
    tempItem,
    temp;
  for (; i > 0 && !ordered; --i) {
    //每次循环开始认为是有序的
    ordered = true;
    for (j = 0; j < i; ++j) {
      temp = comp(arr[j], arr[j + 1]);
      // up order
      if(up){
        if (temp > 0) {
          tempItem = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tempItem;
          ordered = false;
        }
      }else{
        if (temp < 0) {
          tempItem = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tempItem;
          ordered = false;
        }
      }
    }
  }
  return arr;
};
