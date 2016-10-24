/**
 * Created by lib7311 on 2016/10/24.
 */
module.exports = {
    "isArray": function (i) {
        return i && Object.prototype.toString.call(i) === "[object Array]";
    },
    "isFunction": function (i) {
        return i && Object.prototype.toString.call(i) === "[object Function]";
    }
};