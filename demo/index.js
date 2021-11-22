const Resh = require('@ppzp/resh')

const app = new Resh()

app.router.get('/test', function($) {
  console.log($.getParams())
  return {
    success: true
  }
})

app.start(8080, function() {
  console.log('已开启 8080')
})