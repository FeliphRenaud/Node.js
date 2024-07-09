const x = '10'
// x é um numero ?

if (!Number.isInteger(x)) {
  throw new Error(`O valor de  x ${x} não é um inteiro `);
}

console.log('Continuando o codigo ...');

// esse codigo é um exemplo de erro na console
// então é obvio que se voce rodar ele
// VAI DAR ERRO 
// sendo assim não faça como eu que fiquei meia hora procurando o que havia de errado 