## 小试牛刀
创建文件 ```index.js```:
``` js
const App = require('@ppzp/resh') // 导入 resh

const app = new App() // 创建一个 resh 对象

// 添加一条路由：GET /hello
app.controller.get('/hello', function() {
  return '小试牛刀'
})

app.start(8080) // 启动服务器，监听 8080 端口
console.log('访问 http://localhost:8080/hello 试试')
```

运行一下：
``` bash
node index.js
```
打开浏览器，访问 [http://localhost:8080/hello](http://localhost:8080/hello) 试试