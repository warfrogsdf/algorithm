/**
 * Created by lib7311 on 2016/10/19.
 */
/**
 * 前序遍历树
 * 采用循环实现，采用辅助空间一个栈
 * 每个node为一个Object实例
 * 返回前序遍历的node引用的数组
 * @param root 树的根节点
 * @param findChildList 用于找到当前节点儿子节点列表的函数，默认为当前节点的childNodes属性
 * @returns {*}
 */
var traversal = function (root, findChildList) {
    var stack = new Array(0),
        res= [],
        currentNode = null,
        childNodeList = null;
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
            if(findChildList){
                childNodeList = findChildList(currentNode);
            }else{
                childNodeList = currentNode.childNodes;
            }
            stack = stack.concat(childNodeList.reverse());
        }
        return res;
    }
};


module.exports = traversal;
