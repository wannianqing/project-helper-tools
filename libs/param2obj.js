/**
 * 获取浏览器域名参数，并将参数拼装成键值对
 * 不支持node中使用，仅在web项目中可用
 * @returns 
 */
const param2obj = function(){
    //获取url参数
    var search = window.location.search;

    if(!search) return null;

    var paramStr = search.substring(1);
    var arr = paramStr.split('&');
    var obj = {};

    for(var i=0;i<arr.length;i++){
        var tempArr = arr[i].split('=');
        obj[tempArr[0]] = tempArr[1];
    }
    return obj
}

module.exports = param2obj;