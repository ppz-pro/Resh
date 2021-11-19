const Http = require('http')
const HttpRouter = require('@ppzp/http-router')
const Context = require('./context')
const defaults = require('lodash/defaults')
const breads = require('./breads')

module.exports = class Resh {
  constructor(options) {
    options = defaults(options, {
      Context,
      breads: [],
      returnData: true
    })

    if(options.returnData)
      options.breads.unshift(breads.returnData)
    this.router = new HttpRouter(options)

    this.server = Http.createServer( (req, res) => {
      const ctx = new options.Context(req, res)
      const handler = this.router.getHandler(req.method, ctx.url.pathname)
      if(handler)
        try {
          handler(ctx)
        } catch(e) {
          ctx.handle500(res, e)
        }
      else
        ctx.handle404(res)
    })
  }

  start() {
    this.router.makeSandwich()
    this.server.listen(...arguments)
  }
}
