const App = require('@ppzp/resh') // 导入 Resh

const app = new App() // 创建一个 Resh 对象

// 三明治的面包
function bread(vege, $) {
  console.log('之前')
  const result = vege($) // vege 是三明治的夹心
  console.log('之后')
  return result
}

app.controller.get('/aop1', bread, function($) {
  console.log('1 之中')
  return '[@ppzp/resh] GET /aop1'
})

app.controller.get('/aop2', bread, function($) {
  console.log('2 之中')
  return '[@ppzp/resh] GET /aop2'
})

app.start(8080) // 启动服务器，监听 8080 端口
console.log('浏览器访问 \n http://localhost:8080/aop1 \n http://localhost:8080/aop2')