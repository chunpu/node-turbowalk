var turboWalk = require('.').default
var path = require('path')

async function test() {
  var files = []
  await turboWalk(path.join(__dirname, 'src'), results => {
      files.push(...results)
  })
  console.log(files)
}

test()