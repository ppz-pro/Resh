# Resh
node.js 上的 web 服务器

# 使用
##### 安装
``` bash
npm install @ppzp/http-router @ppzp/resh
```

##### main.js
``` js
const writeJson = require('@ppzp/resh/aop').writeJson
const Router = require('@ppzp/http-router')

const router = Router({
  prePath: '/api',
  preHandlerList: [writeJson]
})

let reaper = router.Reaper('/demo')
reaper.get(function() {
  return 1
})
reaper.post('/1', function() {
  return 2
})

reaper = router.Reaper('/demo2')
reaper.put('/2', function() {
  return 3
})
reaper.delete(function() {
  return 4
})

const Resh = require('@ppzp/resh')
const server = Resh({
  router
})
server.listen(3000, () => {
  console.log('ready!')
})
```

##### 运行
``` bash
node main.js
```