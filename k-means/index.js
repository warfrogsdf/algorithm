/**
 * Created by lib7311 on 2016/4/22.
 */
/**
 * 生成数组
 * @param n {number} 产生的点的个数
 * @param range {number} 产生的点位于[0, range)之间
 * @returns {Array}
 */
var generateData = function (n, range) {
    var i = 0,
        arr = [];
    for(; i < n; ++i){
        arr.push({
            "x": rand(0, range, true),
            "y": rand(0, range, true),
            "index": null
        });
    }
    return arr;
};
/**
 * 生产介于min和max的随机证书
 * @param min {number} int
 * @param max {number} int
 * @param noInt {boolean} 表示是否返回整数随机数
 * @returns {number} int min <= r < max
 */
var rand = function (min, max, noInt) {
    var tmp;
    if(min > max){
        tmp = min;
        min = max;
        max = tmp;
    }
    if(!noInt){
        return Math.floor(Math.random()*(max - min)) + min;
    }else{
        return Math.random()*(max - min) + min;
    }

};

/**
 * 计算两个二维点的欧几里德距离
 * @param x {x: 1, y: 2}
 * @param y {x: 1, y: 2}
 * @returns {number}
 */
var distance = function (x, y) {
    return Math.sqrt(Math.pow(y.x - x.x, 2) + Math.pow(y.y - x.y, 2));
};

/**
 * 判断k个聚类中心点的改变是否在阀值之内，如果改变很小<=threshold,则迭代完成
 * @param oldCenterPoint
 * @param newCenterPoint
 * @param threshold
 * @returns {boolean}
 */
var ok = function (oldCenterPoint, newCenterPoint, threshold) {
    var i = 0,
        l = oldCenterPoint.length,
        oldItem,
        newItem;
    for(; i < l; ++i){
        oldItem = oldCenterPoint[i];
        newItem = newCenterPoint[i];
        if(distance(oldItem, newItem) > threshold){
            return false;
        }
    }
    return true;
};

/**
 * 将数组里面的x， y求平均，找出质心
 * @param arr
 * @returns {{x: number, y: number}}
 */
var average = function (arr) {
    var X = 0,
        Y = 0;
    for(var i = 0, l = arr.length; i < l; ++i){
        X += arr[i].x;
        Y += arr[i].y;
    }
    return {
        x: X / l,
        y: Y / l
    }
};

/**
 * 执行一此k-means迭代，根据旧的聚类中心点，找到新的聚类中心点
 * @param oldCenterPoint
 * @param k
 * @param data
 * @returns {*}
 */
var iterator = function (oldCenterPoint, k, data) {
    var newCenterPoint = [],
        min,
        dis,
        i,
        j,
        dataLength = data.length,
        tmpCenterPoint = [];
    for(i = 0; i < dataLength; ++i){
        min = null;
        for(j = 0; j < k; ++j){
            dis = distance(data[i], oldCenterPoint[j]);
            if(j == 0 || min.value > dis){
                min = {
                    "value": dis,
                    "index": j
                }
            }
        }
        data[i].index = min.index;
    }

    for(i = 0; i < dataLength; ++i){
        if(!tmpCenterPoint[data[i].index]){
            tmpCenterPoint[data[i].index] = [data[i]];
        }else{
            tmpCenterPoint[data[i].index].push(data[i])
        }
    }

    for(i = 0; i < k; ++i){
        var _average = average(tmpCenterPoint[i]);
        newCenterPoint.push({
            x: _average.x,
            y: _average.y
        })
    }
    return newCenterPoint;
};

/**
 * k-means算法
 * @param centerPoint array
 * @param k number
 * @param data array
 * @param threshold number
 * @returns {{data: *, flag: Array}}
 * @constructor
 */
var KMeans = function (centerPoint, k, data, threshold) {
    //补全参数
    if(typeof centerPoint == "number"){
        data = k;
        k = centerPoint;
        centerPoint = [];
    }
    if(Object.prototype.toString.call(data) != "[object Array]"){
        return null;
    }
    if(data.length < k){
        return null;
    }
    var flag = [];
    var i,
        j,
        l,
        dataLength = data.length,
        _rand,
        randIndexArr = [],
        oldCenterPoint,
        newCenterPoint,
        tmpCenterPoint;

    //如果没有自己传入最初的k个聚类中心
    if(centerPoint.length != k){
        centerPoint = [];
        while(centerPoint.length < k){
            _rand = rand(0, dataLength, false);
            if(randIndexArr.indexOf(_rand) === -1){
                randIndexArr.push(_rand);
                centerPoint.push(data[_rand]);
            }
        }
    }
    //保留一份聚类中心点，便于比较
    oldCenterPoint = centerPoint;
    //根据本次的聚类质点，对所有点进行聚类，以获取新的质点
    newCenterPoint = iterator(oldCenterPoint, k, data);

    //迭代，将不同的点归并到不同的聚类里面
    while(!ok(oldCenterPoint, newCenterPoint, threshold)){
        oldCenterPoint = newCenterPoint;
        newCenterPoint = iterator(oldCenterPoint, k, data);
    }

    return {
        data: data,
        flag: flag
    }
};
/**
 * * 启动函数
 * 1、生成数据集
 * 2、执行k-means算法
 * @param k 中心点个数
 * @param n 数据集大小
 * @param r 数据点x、y方向最大值
 * @param t 阈值
 */
var main = function (k, n, r, t) {
    var data = generateData (n, r);
    var result = KMeans(k, data, t);
    return result;
};

/**
 * 随机生成颜色
 * @returns {string}
 */
var randColor = function () {
    var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
    result = '#';
    for(var i = 0, l = 6; i < l; ++i){
        result += a[rand(0, 16, false)];
    }
    return result;
};
/**
 * 用于将最初结果和最终的聚类结果展示出来
 */
var render = function (data) {
    var before = document.getElementById("before").getContext("2d"),
        after = document.getElementById("after").getContext("2d");

    var i,
        l,
        item;
    //画初始图
    before.strokeStyle="#0000ff";
    for(i =0, l = data.data.length; i < l; ++i){
        item = data.data[i];
        before.beginPath();
        before.arc(item.x, item.y, 1, 0, 2*Math.PI);
        before.stroke();
    }
    //画聚类图
    var colorArr = [];

    for(i =0, l = data.data.length; i < l; ++i){
        if(!colorArr[data.data[i].index]){
            colorArr[data.data[i].index] = randColor();
        }
        item = data.data[i];
        after.strokeStyle = colorArr[item.index];
        after.beginPath();
        after.arc(item.x, item.y, 1, 0, 2*Math.PI);
        after.stroke();
    }
};

//启动函数
(function () {
    var result = main(10, 1000, 400, 1);
    render(result);
}());