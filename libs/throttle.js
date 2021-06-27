/**
 * 节流函数 指定时间内执行只执行一次
 * @param {*} func 执行的回调函数
 * @param {*} wait 指定时间 毫秒数
 * @returns 
 */
const throttle = function(func,wait){
    var timer = null;
    return function(){
        if(!timer){
            timer = setTimeout(() => {
                func.apply(this,arguments);
                timer = null;
            },wait)
        }
    }
}

module.exports = throttle;