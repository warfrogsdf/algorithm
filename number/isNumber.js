/**
 * Created by lib7311 on 2017/4/12.
 */
export default function isNumber(n) {
    return typeof n === 'number' ||
        (n !== null && typeof n === 'object' && Object.prototype.toString.call(n) === '[object Number]');
}