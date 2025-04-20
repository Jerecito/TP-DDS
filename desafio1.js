const seedrandom = require('seedrandom');

function generar_num(){
    const semilla = seedrandom(1763519);
    const num_random = [];
    for (let i = 0; i < 1000000; i++){num_random.push(semilla.int32())}
    return num_random
}

// punto 1
const numerosAleatorios = generar_num()
let positivos = 0
let negativos = 0
for ( let i of numerosAleatorios){
    if (i > 0){positivos++};
    if (i < 0){negativos ++} 
}

console.log(`la cantidad de positivos es: ${positivos}`);
console.log(`la cantidad de positivos es: ${negativos}`);

// punto 2

let contador = 0
for (let i of numerosAleatorios){
    if ((i % 7 === 0) || (i % 7 === 3) || (i % 7 === 5) || (i % 7 === 6)){contador++};
}
console.log(`la cantidad de números con esas caracteristicas son: ${contador}`)

// punto 3
let contadores = Array(10).fill(0)
for ( i of numerosAleatorios){
    numstr = Math.abs(i).toString();
    
    if (numstr.length >= 2){let anteultimo = parseInt(numstr[numstr.length - 2]);
        contadores[anteultimo]++;
    }
}
console.log(contadores)
// punto 4
let menorValor = Infinity
let posicionMenor = -1;

for ( let i = 0; i < numerosAleatorios.length; i++ ){let comparador = numerosAleatorios[i];
    if (comparador < menorValor){(menorValor = comparador) && (posicionMenor = i + 1) };
    }

console.log(menorValor, posicionMenor)