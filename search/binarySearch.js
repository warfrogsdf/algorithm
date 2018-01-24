/**
 * binary search
 * @param left
 * @param right
 * @param key
 * @param {function} comp - comparison function which returns ​a negative integer value if the first argument is less than the second,
 a positive integer value if the first argument is greater than the second and zero if the arguments are equal. key is passed as the first argument, an element from the array as the second.
 * @returns {number} mid
 */
export default function binarySearch(left, right, key, comp) {
  let arr = this;
  let temp,
    mid,
    midItem;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    midItem = arr[mid];
    temp = comp(key, midItem);
    if (temp < 0) {
      right = mid - 1;
    } else if (temp > 0) {
      left = mid + 1;
    } else {
      return mid
    }
  }
  return -1;
};
