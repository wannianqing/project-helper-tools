/**
 * 
 * @param {*} phone 将要格式化的手机号
 *  
 * phone参数必须为长度为11位的数字
 */
 const telFormat = function(phone){
    const v = new String(phone)

    if(!v.trim()){
        throw new Error('the target value can not empty')
    }

    const phoneReg = /^1\d{10}$/;

    if(!phoneReg.test(v)){
        throw new Error('wrong format')
    }

   return v.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

module.exports = telFormat;