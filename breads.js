/**
 * 接收 handler 的 return，并且以 json 格式相应给前端
 * @param {import('./context')} ctx 
 */
exports.returnData = async function(vege, ctx) {
  const data = await vege(ctx)
  ctx.responseJson(data)
}