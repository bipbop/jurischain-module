const fs = require('fs')
const { js } = require('js-beautify')

const buffer = 'module.exports.jurischain = function jurischain() {' +
    fs.readFileSync(require.resolve('jurischain'))
    + '};'

fs.writeFileSync('./lib/jurischain-runner.js', js(buffer))