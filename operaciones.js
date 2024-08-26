const fs = require('fs');
const citasJson = './citas.js';

function registrar(nombre, edad, tipo, color, enfermedad) {
  const cita = {
    "Nombre del animal": nombre,
    "Edad":edad,
    "Tipo de animal":tipo,
    "Color del animal":color,
    "Enfermedad":enfermedad,
  }
  const citas = JSON.parse(fs.readFileSync(citasJson, 'utf8'));
  citas.push(cita);
  fs.writeFileSync(citasJson, JSON.stringify(citas));

  console.log(`Cita registrada con éxito: ${JSON.stringify(cita)}`);
}

function leer(){
  const citas = JSON.parse(fs.readFileSync(citasJson))
  if(citas.length === 0){
    console.log("No hay citas.");
  } else{
    console.log("Citas registradas:");
    citas.forEach((cita, index) => {
      console.log(`Cita ${index + 1}: ${JSON.stringify(cita)}`);
    });
  }
}

module.exports = { registrar, leer };