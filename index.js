const Http = require('http')
const Controller = require('@ppzp/controller')
const Context = require('./context')
const { defaults, promiseAll } = require('@ppzp/utils')
const returnData = require('./breads/return-data')

module.exports = class Resh {
  constructor(options) {
    options = defaults(options, {
      returnData: true,
      breads: [],
      onInit: [],
      Context
    })

    if(options.returnData)
      options.breads.unshift(returnData)
    this.__onInit = options.onInit

    this.controller = new Controller(options)
    if(options.controllers)
      this.controller.setChildren(options.controllers)

    this.server = Http.createServer( async (req, res) => {
      const ctx = new options.Context(req, res)
      const handler = this.controller.getHandler(req.method, ctx.url.pathname)
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

  onInit(cb) {
    this.__onInit.push(cb)
  }

  async start() {
    try {
      await promiseAll(this.__onInit.map( cb => cb() ))
    } catch(e) {
      console.error('[Resh] 初始化时发生异常')
      throw e
    }

    this.controller.makeSandwich()
    this.server.listen(...arguments)
  }
}
