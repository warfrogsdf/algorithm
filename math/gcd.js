/**
 * Created by lib7311 on 2017/4/12.
 */
import {default as isInteger} from './isInteger';
/**
 * Greatest common divisor
 * @param x {number}
 * @param y {number}
 * @return gcd {number | null}
 */
export default function gcd(x, y) {
    if(!isInteger(x) || !isInteger(y)){
        return null;
    }
    let min = Math.min(x, y);
    let max = Math.max(x, y);
    let gcd = max % min;

    while (gcd){
        max = min;
        min = gcd;
        gcd = max % min;
    }
    return min;
}