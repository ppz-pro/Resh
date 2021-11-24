const Http = require('http')
const HttpRouter = require('@ppzp/http-router')
const Context = require('./context')
const defaults = require('@ppzp/utils/defaults')
const returnData = require('./breads/return-data')

module.exports = class Resh {
  constructor(options) {
    options = defaults(options, {
      Context,
      breads: [],
      returnData: true
    })

    if(options.returnData)
      options.breads.unshift(returnData)
    this.router = new HttpRouter(options)
    if(options.controllers)
      this.router.setChildren(options.controllers)

    this.server = Http.createServer( (req, res) => {
      const ctx = new options.Context(req, res)
      const handler = this.router.getHandler(req.method, ctx.url.pathname)
      if(handler)
        try {
          await handler(ctx)
        } catch(e) {
          ctx.handle500(e)
        }
      else
        ctx.handle404()
    })
  }

  start() {
    this.router.makeSandwich()
    this.server.listen(...arguments)
  }
}
