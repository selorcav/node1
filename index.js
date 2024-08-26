const { registrar, leer } = require('./operaciones');

const argv = process.argv.slice(2);

if (argv[0] === "registrar") {
  registrar(argv[1], argv[2], argv[3], argv[4], argv[5]);
} else if (argv[0] === "leer") {
  leer();
} else{
  console.log('no has ingresado una función válida')
}
