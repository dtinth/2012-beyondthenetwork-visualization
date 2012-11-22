
var fs = require('fs')

console.log('var songdata = ');

var out = []
fs.readFile('beyond.log', 'utf-8', function(err, data) {
  var lines = data.split('\n')
  lines.forEach(function(line) {
    var o = {text: []}
    line.replace(/(\d+) (\d+) (\d+)/, function(a, sample, row, order) {
      o.sample = parseInt(sample, 10)
      o.row = parseInt(row, 10)
      o.order = parseInt(order, 10)
    }).replace(/\[(\d+) (-?\d+) ([^\]]+)\]/g, function(a, channel, volume, text) {
      o.text.push([parseInt(channel, 10), text, parseInt(volume, 10)])
    })
    out.push(o);
  })
  console.log(JSON.stringify(out))
  console.log(';')
})

