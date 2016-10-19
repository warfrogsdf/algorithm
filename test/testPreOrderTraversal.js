/**
 * Created by lib7311 on 2016/10/19.
 */

var traversal = require("../index").PreOrderTraversal;
//生成一个多叉树
var Node = function (value, childNodes) {
    this.value = value;
    this.childNodes = childNodes || [];
};
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);
var node8 = new Node(8);
var node9 = new Node(9);
var node1 = new Node(1, [node4, node5]);
var node2 = new Node(2, [node6]);
var node3 = new Node(3, [node7, node8, node9]);
var node0 = new Node(0, [node1, node2, node3]);
var res = traversal(node0);

for(var i = 0, l = res.length; i < l; ++i){
    console.log(res[i].value);
}