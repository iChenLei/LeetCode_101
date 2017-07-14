/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */


//耗时342ms  不太理想
var cloneGraph = function(graph) {

    //创建一个set来保存已经访问过的节点
    var nodeMap = new Map();

    //为空的话 直接返回
    if(graph === null){
        return null;
    }else{
        //不然就深度优先遍历图
        return DFS(graph);
    }
    
    function DFS(graph){
        var newNode = null;

        //如果点是访问过的 直接返回这个点
        if(nodeMap.has(graph.label)){
            newNode = nodeMap.get(graph.label);
        }else{

            //不然就new一个新的节点
            newNode = new UndirectedGraphNode(graph.label);
            //set保存 key为node的值  value为该节点
            nodeMap.set(graph.label,newNode);
        }
        
        //对我们要克隆的图的节点的neightbors数组做循环  其实可以试试 Array.forEach() 这样简单点
        for(var i = 0;i < graph.neighbors.length;++i){

            //如果这个节点和我们的newNode值不一样
            if(graph.neighbors[i].label !== newNode.label){

                //如果我们的nodeMap里面已经存了这个点
                if(nodeMap.has(graph.neighbors[i].label)){
                    //直接取出来push进neighbors数组
                    newNode.neighbors.push(nodeMap.get(graph.neighbors[i].label));
                }else{
                    //如果没有的话 就DFS咯
                     newNode.neighbors.push(DFS(graph.neighbors[i]));
                }   
            }else{
                //如果值一样 就直接从nodeMap里面取出来push进去
                 newNode.neighbors.push(nodeMap.get(graph.label));
            }
        }

        //返回我们的newNode
        return newNode;
    }
};