/**
 * binary search
 * @param start
 * @param end
 * @param k
 * @param compareFunction
 * @returns {number} mid
 */
export default function binarySearch(start, end, k, compareFunction) {
  let arr = this;
  let temp,
    mid,
    midData;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    midData = arr[mid];
    temp = compareFunction(midData, k)
    if (temp < 0) {
      end = mid - 1;
    } else if (temp > 0) {
      start = mid + 1;
    } else {
      return mid
    }
  }
  return -1;
};
