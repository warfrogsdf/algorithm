/**
 * Created by lib7311 on 2016/10/19.
 */
/**
 * 前序遍历树
 * 采用循环实现，采用辅助空间一个栈
 * 每个node为一个Object实例
 * 返回前序遍历的node引用的数组
 */
var traversal = function (root) {
    var stack = new Array(0),
        res= [],
        currentNode = null;
    if(!root){
        return 'root isn`t null';
    }else{
        //将根节点入栈
        stack.push(root);
        //当栈里面节点为空循环结束
        while (stack.length){
            currentNode = stack.pop();
            res.push(currentNode);
            //将儿子节点数组反转入栈
            stack = stack.concat(currentNode.childNodes.reverse());
        }
        return res;
    }
};