const Resh = require('@ppzp/resh')
const Controller = require('@ppzp/controller')

const app = new Resh({
  baseUrl: '/api'
})

const userController = new Controller({
  baseUrl: '/user'
})
// const bookController = new Controller('/book')

userController.get('/xxxx', function() {
  return 'GET /api/user/xxxx'
})

app.controller.setChildren([
  userController,
  // bookController
])

app.start('8080')
console.log('ok! http://localhost:8080/api/user/xxxx')