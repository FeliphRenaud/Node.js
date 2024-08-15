const { log } = require('console')
const fs = require('fs')

const antigoNomeArquivo = "arquivo.txt"
const novoNomeArquivo = "NovoArquivo.txt"

fs.rename(antigoNomeArquivo, novoNomeArquivo, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log(`O arquivo ${antigoNomeArquivo} foi Renomeado para ${novoNomeArquivo} com sucesso`);
  
})