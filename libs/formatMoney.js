/**
 * 
 * @param {*} num 将要格式化的金额
 * @returns 
 */
 const formatMoney = function(num){
    if(/[^0-9\.]/.test(num)){
        throw new Error('the target value is wrong')
    }
    
    num = num + '';
    if (!num.includes('.')) {
        num += '.'
    }
    return num.replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
        return $1 + ',';
    }).replace(/\.$/, '');
}   

module.exports = formatMoney