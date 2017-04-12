/**
 * Created by lib7311 on 2017/4/12.
 */
import {default as isInteger} from "./isInteger";
/**
 * To determine whether a prime number
 * @https://en.wikipedia.org/wiki/Prime_number
 * @param n {number}
 * @return {boolean}
 */
export default function isPrime(n) {
    if (!isInteger(n) ||
        n < 2 ||
        (n !== 2 && n % 2 === 0)
    ) {
        return false;
    }
    let i;
    let mid = Math.fround(Math.sqrt(n));
    for (i = 2; i <= mid; i++) {
        if (0 === n % i) {
            return false;
        }
    }
    return true;
};