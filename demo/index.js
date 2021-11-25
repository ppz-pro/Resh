const Resh = require('@ppzp/resh')
const Returned = require('@ppzp/resh/breads/return-data').Returned

const app = new Resh()

app.controller.get('/test', async function($) {
  console.log(await $.getJson())
  return {
    success: true
  }
})

app.controller.get('/go', function($) {
  $.res.end('haha')
  return Returned
})

app.start(8080, function() {
  console.log('已开启 8080')
})