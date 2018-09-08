

//1.从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
function TreeDeep(pRoot){
    if(pRoot==null){
        return 0;
    }

    var left=1+TreeDeep(pRoot.left);  //取每个节点的左右子树的最大值
    var right=1+TreeDeep(pRoot.right);
    return Math.max(left,right);
}

//2.判断二叉树是否为平衡二叉树（空树或者左右子树高度差不超过1）
var isBalanced=true;
function IsBalanced_Solution(pRoot){
    if(pRoot==null){
        return true;
    }
    IsBalanced(pRoot);
    var res=isBalanced;
    isBalanced=true;
    return res;
}

function IsBalanced(pRoot){
    if(pRoot==null){
        return 0;
    }
    var left=0;
    var right=0;

    if(pRoot.left){
        left=IsBalanced(pRoot.left); //判断每个节点的左右子树书否是平衡二叉树
    }
    if(pRoot.right){
        right=IsBalanced(pRoot.right);
    }
    if(Math.abs(left-right)>1){
        isBalanced=false;
    }

    return left>right?1+left:1+right;
}

//3.判断二叉树是否为完全二叉树（最后一层的节点可以不是满的，但是节点都连续在最左边）
//思路：用队列按层遍历
function isCBT(head){
    if(head==null){
        return true;
    }
    var queue=[];
    var l;
    var r;
    var leaf=false;
    queue.push(head);
    while(queue.length!=0){
        head=queue.shift();
        l=head.left;
        r=head.right;
        if((leaf && (l!=null || r!=null)) || (r!=null && l==null)){  //分情况讨论
            return false;
        }
        if(l!=null){
            queue.push(l);
        }
        if(r!=null){
            queue.push(r);
        }
        else{
            leaf=true;
        }
    }
    return true;
}

//4.判断二叉树是否为搜索二叉树（左子树任意节点小于根节点，右子树任意节点大于根节点，用中序遍历）

var res=true;
var temp=[];
function judge(head){
    isBST(head);
    return res;
}
function isBST(head){
    if(head==null){
        return null;
    }

    isBST(head.left); //拓展中序遍历
    temp.push(head.value);
    if(temp.length>1){
        if(temp[temp.length-1]<=temp[temp.length-2]){
            res=false;
        }
    }
    isBST(head.right);
}



















