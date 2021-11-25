## 取出请求里的数据
创建文件 ```index.js```:
``` js
const App = require('@ppzp/resh') // 导入 Resh

const app = new App() // 创建一个 Resh 对象

// 添加一条路由：POST /hello
app.controller.post('/hello', async function($) { // 注意，async 关键字
  const params = $.getParams() // 取出 url 里的参数，类似 /hello?name=小明&tel=15642244xxxx
  const data = await $.getJson() // 取出 json 数据，异步过程，需要 await 加持
  return { // 默认情况下，Resh 以 json 格式返回数据
    params,
    data
  }
})

app.start(8080) // 启动服务器，监听 8080 端口
console.log('使用 postman 发个 POST /hello 试试，别忘了带点 json 数据')
```

运行一下：
``` bash
node index.js
```

使用 postman 发个 POST /hello 试试，别忘了带点 json 数据