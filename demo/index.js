const Resh = require('@ppzp/resh')

const app = new Resh()

app.router.get('/test', function() {
  return {
    success: true
  }
})

app.server.start(8080, function() {
  console.log('已开启 8080')
})