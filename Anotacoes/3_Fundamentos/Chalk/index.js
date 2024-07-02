const chalk = require('chalk')

const nota = 4

if (nota >= 6) {
  console.log(chalk.green('Parabens voce esta aprovado'));
} else if (nota < 6 && nota >= 5) {
  console.log(chalk.yellow('ATENÇÃO: Voce esta em recuperação'));
} else {
  console.log(chalk.red('REPROVADO tente novamente ano que vem'));
}