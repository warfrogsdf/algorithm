/**
 * Created by lib7311 on 2017/4/12.
 */
import {default as isNumber} from "./isNumber";

export default function isInteger(n) {
    return isNumber(n) && n % 1 === 0;
}