const http = require('http')
const writeJson = require('./write-json')
const NBug = require('./exception').NBug

module.exports = function({
  RequestContext = require('./request-context'),
  log = console,
  router,
  handle404 = __handle404,
  handle500 = __handle500
} = {}) {
  return http.createServer(async function(req, res) {
    const ctx = RequestContext(req, res)
    
    if(!router || !(router.getHandler instanceof Function))
      throw Error('请传入正确的 router 对象')
    const method = ctx.request.method
    const path = ctx.url.pathname
    const handler = router.getHandler(method, path)
    try {
      if(handler)
        await handler(ctx)
      else
        handle404(ctx)
    } catch(e) {
      if(e instanceof NBug)
        writeJson(NBug)
      else {
        log.error('未捕获的异常：')
        log.error(e)
        try {
          handle500(ctx)
        } catch(e) {
          log.error('handle500 又出了问题……')
          log.error(e)
        }
      }
    }
  })
}

const err404 = new NBug('未找到资源', 404)
function __handle404(ctx) {
  writeJson(ctx.response, err404)
}

const err500 = new NBug('未知错误', 500)
function __handle500(ctx) {
  writeJson(ctx.response, err500)
}