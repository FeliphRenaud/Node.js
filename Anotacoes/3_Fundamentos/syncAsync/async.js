const fs = require(`fs`);

console.log(`inicio`);

fs.writeFile(
  `arquivo3.txt`,
  `Faala rapaziada Ainda to cheio de fome`,
  function (err) {
    setTimeout(function () {
      console.log(`Arquiv criado, bora lancha`);
    }, 1000);
  }
);

console.log(`fim do codigo`);
