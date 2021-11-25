# 三层路由
这也是为代码复用而做出的考虑  
比如所有接口都需要 ```/api``` 前缀时，开发者不应该在每条路由前都加上 ```/api```  
当 user 模块都需要 ```/user``` 前缀时，开发者不应该在 userController 里的每条……  
Resh 鼓励使用三层路由（实际支持无限层嵌套）：
+ App 配置（全局配置）
+ Controller 配置（模块配置）
+ handler 配置

Resh 的处理类似这样：
``` js
const app = new Resh({
  baseUrl: '/api' // 所有接口的前缀
})
const userController = new Controller({
  baseUrl: '/user' // userController 的前缀
})
// /xxxx 只是这一个 handler 的路径
userController.get('/xxxx', function() {
  return 'GET /api/user/xxxx'
})
```
[上例完整源码](https://github.com/ppz-pro/Resh/blob/main/docs/three/index.js)

当然，面包也支持类似的操作：
``` js
const app = new Resh({
  baseUrl: '/api',
  breads: [
    function 记录访问日志() {
      // ...
    }
  ]
})
const userController = new Controller({
  baseUrl: '/user',
  breads: [
    function 控制访问权限() {
      // ...
    }
  ]
})
userController.post(
  function 检查上传的user数据是否合法() {
    // ...
  },
  function 创建用户() {
    // 把数据存入数据库
  }
)
```