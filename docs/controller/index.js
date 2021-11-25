const Resh = require('@ppzp/resh')
const userController = require('./user')
const bookControoler = require('./book')

const app = new Resh({
  controllers: [
    userController,
    bookControoler
  ]
})

app.start(8080)
console.log('打开浏览器试试 \n http://localhost:8080/user \n http://localhost:8080/book \n http://localhost:8080/user/xx \n http://localhost:8080/book/xx \n ')
