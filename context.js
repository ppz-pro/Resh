module.exports = class Context {
  /**
   * http 请求上下文，包含一些工具函数等
   * @param {import('http').IncomingMessage} req
   * @param {import('http').ServerResponse} res 
   */
  constructor(req, res) {
    this.req = req
    this.res = res
    this.url = new URL(req.url, 'http://' + req.headers.host)
  }

  async json() {
    // TODO
  }

  getParams() {
    if(this.__params)
      return this.__params
    
    this.__params = {}
    this.url.searchParams.forEach((v, k) => {
      this.__params[k] = v
    })
    return this.__params
  }

  responseJson(data) {
    this.res.setHeader('Content-type', 'application/json')
    this.res.end(JSON.stringify(data))
  }

  /** @param {Http.ServerResponse} res */
  handle404(res) {
    res.statusCode = 404
    res.end('404')
  }
  
  /** @param {Http.ServerResponse} res */
  handle500(res, e) {
    console.error('服务器内部错误')
    console.error(e)
    res.statusCode = 500
    res.end('500')
  }
}