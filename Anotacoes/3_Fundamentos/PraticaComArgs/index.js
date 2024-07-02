//externo
const minimist = require("minimist");


//interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

  const a = parseFloat(args['a'])
  const b = parseFloat(args['b'])

soma(a,b)