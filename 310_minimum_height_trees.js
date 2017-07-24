 /**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n == 0 || n == 1){return [0];}
    var anwser = new Array();
    var graphMatrix = new Array(n);

    //这里有个费解的二维数组操作问题
    for(var gM = 0;gM < n; ++gM){
        graphMatrix[gM] = [];
    }
    var queue = new Array();
    
    //领接矩阵
    for(var e = 0; e < edges.length;++e){
        // console.log(edges[e],'-----');
        var left = edges[e][0];
        var right = edges[e][1];
        // console.log(`left is ${left},right is ${right}`);
        graphMatrix[left].push(right);
        graphMatrix[right].push(left);
        // console.log(graphMatrix);
    }
    for(var i = 0;i<n;++i){
        if(graphMatrix[i].length == 1){
           queue.push(i);
        }
    }
    // console.log(queue);
    //反正最多两个节点 可证明
    while(n>2){
        var queue_len = queue.length;
        n = n - queue_len;
        for(var l = 0;l < queue_len;++l){
            //这里坑了一下  队列吗  当然是先进先出
            var flag = queue.shift();
            graphMatrix[flag].forEach(function(item){
                var index = graphMatrix[item].indexOf(flag);
                if(index == 0){
                    graphMatrix[item].shift();
                }else{
                    //这里去除节点 splice(index,deleteCount,...item)
                    graphMatrix[item].splice(index,1);
                }    
               if(graphMatrix[item].length == 1){
                   queue.push(item);
               }
            });
            // console.log(graphMatrix);
            // console.log(`queue is ${queue}`);
            
        }
    }
    
    while(queue.length != 0){
        anwser.push(queue.pop());
    }
    
    return anwser;
    
};