var largestRectangleArea = function(heights) {
    var area = 0;
    var stack = [];
    var i = 0;

    //人为的添加一个0
    heights.push(0);
    while(i < heights.length){
        var s_top = stack[stack.length-1];

        //if这个判断条件  存储一个单调递增序列
        if(stack.length == 0 || heights[s_top] <= heights[i]){
            stack.push(i++);
        }else{

            //遇到小于前一索引位置高度时
            var top = stack.pop();
            //计算面积  存储最大的那个  可能会后退好多步 直到遇到一个小于当前i索引的高度停止
            area = Math.max(area,heights[top]*((stack.length == 0) ? i : (i-stack[stack.length-1]-1)));
        }
    }
    return area;
};