const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,

})

readline.question('Qual a sua linguangem de programação favorita ?', (languege) => {
  if (languege == 'python') {
    console.log('ISSO NEM É LINGUAGEM');
  } else {
    console.log(`A minha linguagem preferida é: ${languege}`)
  }
  readline.close()
})