/**
 * 函数防抖
 * @param {*} func 回调函数
 * @param {*} wait 延迟执行 毫秒
 * @param {*} immediate 是否立即执行 默认为true 立即执行， 传入false非立即执行
 * @returns 
 */
const debounce = function(func, wait, immediate = true){
    let timer
    return function() {
        let args = [].slice.call(arguments);
        if (timer) clearTimeout(timer)
        if (immediate) {
            var callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, wait)
            if (callNow) func.apply(this, args)
        } else {
            timer = setTimeout(function() {
                func.apply(this, args)
            }, wait)
        }
    }
}

module.exports = debounce