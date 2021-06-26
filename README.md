### NPM

```shell
npm install project-helper-tools --save
```

### 简介

本项目持续收录开发过程中经常性使用到的工具类函数，提高开发效率，避免每次做项目每次都要写通用的工具类函数。 

### 文档

- `deepClone` 深拷贝方法
  - 参数：source原始数据，待拷贝对象
  - 返回：返回一个新的数据
- `formatMoney` 金额千分位格式化
  - 参数：num原始金额数据
  - 规则：该参数不可为空，除小数点格式外不可包含非数字
- `phoneNumber` 手机号格式化，中间4位以*号代替
  - 参数：phone 必须为以1开头的11位数字



### 举个栗子

```javascript
const projectHelperTools = require('project-helper-tools');

const obj1 = {
    str:'wang',
    age:23,
    info:{
        peo:'haole'
    },
    arr:[1,2,3]
}
const obj2 = projectHelperTools.deepClone(obj1);

var price = 23451.23
console.log(projectHelperTools.formatMoney(price))

var tel = 15979086967
console.log(projectHelperTools.phoneNumber(tel))
```



