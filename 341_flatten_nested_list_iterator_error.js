var NestedIterator = function(nestedList) {

    //利用堆栈把嵌套数组拍扁
    var str = nestedList.toString();
    var strArray = str.split(',');
    var numArray = strArray.map(function(item){
        return parseInt(item);
    });
    var len = numArray.length;
    this.nums =  [];

    //这里有一个倒序的操作
    for(var i = 0;i<len ;++i){
        this.nums.push(numArray.pop());
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    if(this.nums.length == 0){
        return false;
    }else{
        return true;
    }
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.nums.pop();
};

// test case..
var i = new NestedIterator([[1,1],2,[3,3]]), a = [];
while (i.hasNext()) a.push(i.next());

// print [1,1,2,3,3]
console.log(a);