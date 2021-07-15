const write = require('./write-json')

exports.writeJson = async function(ctx, vege) {
  const data = await vege(ctx)
  if(data)
    write(ctx.response, {
      errCode: 0,
      data
    })
}