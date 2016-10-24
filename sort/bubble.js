/**
 * Created by lib7311 on 2016/10/24.
 * 冒泡排序-稳定
 */

/**
 * 使用传入的迭代器，对数组进行冒泡排序
 * @param array
 * @param iterator
 */
var Bubble = function (array, iterator) {
    var hasOrder = false, //false表示还处于无序,需要继续迭代; true表示有序
        i = array.length - 1,
        j,
        temp;
    for (; i > 0 && !hasOrder; --i) {
        //每次循环开始认为是有序的
        hasOrder = true;
        for (j = 0; j < i; ++j) {
            if(array[j] > array[j + 1]){
                //当
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                hasOrder = false;
            }
        }
    }
    return array;
};

module.exports = Bubble;