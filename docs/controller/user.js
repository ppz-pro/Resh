const Controller = require('@ppzp/controller')
// @ppzp/controller 随 @ppzp/resh 一起安装

const con = new Controller('/user') // 创建一个 userController

con.get(function() {
  return 'GET /user'
})

con.get('/xx', function() {
  return 'GET /user/xx'
})

con.post(function() {
  return 'POST /user'
})

con.delete(function() {
  return 'DELETE /user'
})

module.exports = con // 导出 userController