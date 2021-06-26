### NPM

```shell
npm install project-helper-tools --save
```

### 简介

本项目持续收录开发过程中经常性使用到的工具类函数，提高开发效率，避免每次做项目每次都要写通用的工具类函数。 

### 用法

- `deepClone` 深拷贝方法
  - 参数：source原始数据，待拷贝对象
  - 返回：返回一个新的数据
  
  ```javascript
  const obj1 = {
      str:'wang',
      age:23,
      info:{
          peo:'haole'
      },
      arr:[1,2,3]
  }
  const obj2 = projectHelperTools.deepClone(obj1);
  ```
  
- `formatMoney` 金额千分位格式化
  - 参数：num原始金额数据
  - 规则：该参数不可为空，除小数点格式外不可包含非数字
  
  ```javascript
  var price = 23451.23
  projectHelperTools.formatMoney(price)
  ```
  
- `phoneNumber` 手机号格式化，中间4位以*号代替
  
  - 参数：phone 必须为以1开头的11位数字
  
  ```javascript
  var price = 23451.23
  projectHelperTools.formatMoney(price)
  ```
  
- `objectToQuery` 参数对象转成查询参数 

  - 带转换的参数对象的属性值都为基本类型

  ```javascript
  const parameter:{
      name:'王胖子',
      age:23,
      id:1
  }
  projectHelperTools.objectToQuery(this.parameter)
  ```

- `list2tree`数组结构转换成树形结构

  - 参数 data 为将要转换的数组
  - fatherField 当前某条数据的 id 字段
  - sonField 当前某条数据的 父级id 字段

  ```javascript
  const arr = [
      {id:1,text:'节点1',pid:0},
      {id:2,text:'节点2',pid:1},
      {id:3,text:'节点3',pid:2},
      {id:4,text:'节点4',pid:0},
      {id:5,text:'节点4',pid:4}
  ]
  
  const arr1 = projectHelperTools.list2tree(this.arr,'id','pid');
  ```

  