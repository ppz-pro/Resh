const Controller = require('@ppzp/controller')
// @ppzp/controller 随 @ppzp/resh 一起安装

const con = new Controller('/book') // 创建一个 bookController

con.get(function() {
  return 'GET /book'
})

con.get('/xx', function() {
  return 'GET /book/xx'
})

con.post(function() {
  return 'POST /book'
})

con.delete(function() {
  return 'DELETE /book'
})

module.exports = con // 导出 bookController