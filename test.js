var turboWalk = require('.').default
var rawWalk = require('./walk').default
var path = require('path')

async function test() {
  var files = []
  await rawWalk(path.join(__dirname, 'src'), results => {
      files.push(...results)
  })
  console.log(files)
}

test()