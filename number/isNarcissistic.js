/**
 * Created by lib7311 on 2017/4/12.
 */
/**
 * To determine whether a narcissistic number
 * @https://en.wikipedia.org/wiki/Narcissistic_number
 * @param n {number}
 * @return {boolean}
 */
import {default as isInteger} from './isInteger';

export default function isNarcissistic(n) {
    if(!isInteger(n) || n < 0){
        return false;
    }
    let nStr = n.toString();
    let sum = 0;
    for(let i =0, l = nStr.length; i < l; ++i){
        sum += Math.pow(nStr[i], l)
    }
    return n === sum;
};