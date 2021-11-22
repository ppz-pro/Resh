const Resh = require('@ppzp/resh')

const app = new Resh()

app.router.get('/test', async function($) {
  console.log(await $.getJson())
  return {
    success: true
  }
})

app.start(8080, function() {
  console.log('已开启 8080')
})