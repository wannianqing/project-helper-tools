/**
 * 
 * @param {*} data 元数据，必须为数组类型
 * @param {*} selfField 当前某条数据的 id 字段
 * @param {*} fatherField 当前某条数据的 父级id 字段
 * @returns 
 */
const list2tree = function(data,selfField,fatherField){
    if(Object.prototype.toString.call(data) !== '[object Array]'){
        throw new Error('The value passed in must be an array type')
    }

    const id = selfField ? selfField : 'id'
    const parentId = fatherField ? fatherField : 'parentId'

    let result = [];

    let obj = {};

    data.forEach(item => {
        obj[item[id]] = item
    })

    data.forEach(item => {
        let parent = obj[item[parentId]];

        if(parent){
            (parent.children || (parent.children = [])).push(item)
        }else{
            result.push(item)
        }
    })
    return result
}

module.exports = list2tree;