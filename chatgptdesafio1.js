import seedrandom from 'seedrandom';

// Semilla para la generación de números aleatorios
const seed = 1763519;
const rng = seedrandom(seed);
const cantidadNumeros = 1000000;
const numerosAleatorios = [];

// Generar los números aleatorios
for (let i = 0; i < cantidadNumeros; i++) {
  numerosAleatorios.push(rng.int32());
}

// 1. Cantidad de números positivos y negativos
let positivos = 0;
let negativos = 0;
for (const numero of numerosAleatorios) {
  if (numero > 0) {
    positivos++;
  } else if (numero < 0) {
    negativos++;
  }
}
console.log(`Cantidad de números positivos: ${positivos}`);
console.log(`Cantidad de números negativos: ${negativos}`);

// 2. Cantidad de números cuyo resto al dividirlos en 7 sea 0, 3, 5 o 6
let resto0 = 0;
let resto3 = 0;
let resto5 = 0;
let resto6 = 0;
for (const numero of numerosAleatorios) {
  const resto = Math.abs(numero % 7);
  if (resto === 0) {
    resto0++;
  } else if (resto === 3) {
    resto3++;
  } else if (resto === 5) {
    resto5++;
  } else if (resto === 6) {
    resto6++;
  }
}
console.log(`Cantidad con resto 0 al dividir por 7: ${resto0}`);
console.log(`Cantidad con resto 3 al dividir por 7: ${resto3}`);
console.log(`Cantidad con resto 5 al dividir por 7: ${resto5}`);
console.log(`Cantidad con resto 6 al dividir por 7: ${resto6}`);

// 3. Arreglo de contadores según el anteúltimo dígito
const contadorDecenas = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};
for (const numero of numerosAleatorios) {
  const numeroAbsoluto = Math.abs(numero);
  if (numeroAbsoluto >= 10) {
    const decena = Math.floor((numeroAbsoluto % 100) / 10);
    contadorDecenas[decena]++;
  }
}
console.log('Cantidad de números según su anteúltimo dígito:', contadorDecenas);

// 4. Valor y posición del menor de todos
let menorValor = numerosAleatorios[0];
let menorPosicion = 1;
for (let i = 1; i < numerosAleatorios.length; i++) {
  if (numerosAleatorios[i] < menorValor) {
    menorValor = numerosAleatorios[i];
    menorPosicion = i + 1;
  }
}
console.log(`Valor del menor número: ${menorValor}`);
console.log(`Posición del menor número: ${menorPosicion}`);

// 5. Cantidad de números cuyo signo sea igual al del anterior
let mismoSignoAnterior = 0;
for (let i = 1; i < numerosAleatorios.length; i++) {
  if ((numerosAleatorios[i] > 0 && numerosAleatorios[i - 1] > 0) || (numerosAleatorios[i] < 0 && numerosAleatorios[i - 1] < 0)) {
    mismoSignoAnterior++;
  } else if (numerosAleatorios[i] === 0 && numerosAleatorios[i - 1] === 0) {
    mismoSignoAnterior++;
  }
}
console.log(`Cantidad de números con el mismo signo que el anterior: ${mismoSignoAnterior}`);

// 6. Promedio entero de todos los números que contengan exactamente 6 dígitos
let sumaSeisDigitos = 0;
let cantidadSeisDigitos = 0;
for (const numero of numerosAleatorios) {
  const numeroAbsoluto = Math.abs(numero);
  if (numeroAbsoluto >= 100000 && numeroAbsoluto <= 999999) {
    sumaSeisDigitos += numero;
    cantidadSeisDigitos++;
  }
}
const promedioSeisDigitos = cantidadSeisDigitos > 0 ? Math.round(sumaSeisDigitos / cantidadSeisDigitos) : 0;
console.log(`Promedio entero de números con exactamente 6 dígitos: ${promedioSeisDigitos}`);