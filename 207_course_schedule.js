/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    //初始化长度为numCourses的数组 顺便复习下Array构造的不同参数
    var inAndOut = new Array(numCourses);
    var nodeMatrix = new Array(numCourses);
    
    //因为Array构造后数组的item都是undefined 所以需要初始化为0
    for(var i = 0;i<numCourses;++i){
        nodeMatrix[i] = [];
        inAndOut[i] = 0;
    }
    
    //对每个课程的入度进行统计
    for(var i = 0;i<prerequisites.length;i++){
        inAndOut[prerequisites[i][0]]++;
        //用领接矩阵来 记录有多少课程完成需要依赖该课程
        nodeMatrix[prerequisites[i][1]].push(prerequisites[i][0]);
    }
    
    //队列来记录入度为0(就是无依赖可以直接完成)的课程
    var queue = [];
    for(var i = 0;i<numCourses;++i){
        if(inAndOut[i] == 0){ queue.push(i); }
    }
    
    var count = 0;
    while(queue.length != 0){
        var a = queue.shift();
        ++count;
        nodeMatrix[a].forEach(function(item){
            --inAndOut[item];
            if(inAndOut[item] == 0){
                queue.push(item);
            }
        })
    }
    
    //判断是否能完成
    return count == numCourses;
};