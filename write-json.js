module.exports = function(res, data) {
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify(data))
}