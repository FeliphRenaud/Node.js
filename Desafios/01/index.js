// criar um programa que leia os dados em um arquivo txt e retone esses dados no console

const fs = require('fs');

fs.readFile('../arquivo.txt', 'utf8', (err, data)=>{
  if(err){
    console.log('filtro ' + err);
  }
  console.log(data);
})