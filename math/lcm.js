/**
 * Created by lib7311 on 2017/4/12.
 */
/**
 * Least common multiple
 * @param x {number}
 * @param y {number}
 * @return lcm {number | null}
 */
import {default as isInteger} from './isInteger';
import {default as gcd} from './gcd';

export default function lcm(x, y) {
    if(!isInteger(x) || !isInteger(y)){
        return null;
    }
    return x * y /gcd(x, y);
};