const seedrandom = require('seedrandom');

function generar_num(){
    const semilla = seedrandom(1763519);
    const num_random = [];
    for (let i = 0; i < 100000; i++){num_random.push(semilla.int32())}
    return num_random
}

///punto 1
const numerosAleatorios = generar_num()
let positivos = 0
let negativos = 0
for ( let i of num_random){
    if (i > 0){ positivos++};
    if (i < 0){negativos ++} 
}

console.log('La cantidad de positivos es:  ${positivos}');
console.log('la cantidad de negativos es: ${negativos}')