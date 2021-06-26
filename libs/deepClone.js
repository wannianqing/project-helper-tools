/**
 * 
 * @param {*} source 原始数据
 * @returns 
 */
const deepClone = function(source){
    var result;
    if(Object.prototype.toString.call(source) === '[object Array]'){
        result = [];
        for(var i=0;i<source.length;i++){
            result[i] = deepClone(source[i])
        }
    }else if(Object.prototype.toString.call(source) === '[object Object]'){
        result = {};
        for(let k in source){
            result[k] = deepClone(deepClone(source[k]))
        }
    }else{
        return source
    }

    return result;
}

module.exports = deepClone;