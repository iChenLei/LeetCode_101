/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


/**
 *  course_schedule_ii在course_schedule的基础上加入了
 *  一个rightSchedule的数组 来记录有效的课程完成顺序
 *  耗时 149ms
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
    var rightSchedule = [];
    for(var i = 0;i<numCourses;++i){
        if(inAndOut[i] == 0){ 
            queue.push(i);
            rightSchedule.push(i); 
        }
    }
    
    var count = 0;
    while(queue.length != 0){
        var a = queue.shift();
        ++count;
        nodeMatrix[a].forEach(function(item){
            --inAndOut[item];
            if(inAndOut[item] == 0){
                queue.push(item);
                rightSchedule.push(item);
            }
        })
    }
    
    //如果有正确方案 就返回数组
    if(count === numCourses){
            return rightSchedule;        
    }else{
        //没有就返回空数组
        return [];
    }
};