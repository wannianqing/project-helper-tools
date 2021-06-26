const objectToQuery = function(obj){
    //如果传入的不是object类型，则中断
    if(Object.prototype.toString.call(obj) !== '[object Object]') return;

    var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");

    var arr = [];
    for(var key in obj){
        if(typeof obj[key] == 'function' || typeof obj[key] == 'object'){
            throw new Error('The value of the parameter must be a basic type')
        }
        if(reg.test(obj[key])){
            arr.push(key + '=' + encodeURIComponent(obj[key]))
        }else{
            arr.push(key + '=' + obj[key])
        }
    }

    return arr.join("&");

}

module.exports = objectToQuery;