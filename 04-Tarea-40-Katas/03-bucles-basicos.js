/* ==========================================================================
   03 — Bucles Básicos | 10 Katas
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 21 — Números del 1 al N
   Dado un número n, retorná un array con todos los números del 1 al n.
   Ej: numerosHastaN(5) → [1, 2, 3, 4, 5]
-------------------------------------------------------------------------- */
function numerosHastaN(n) {
  // TU CÓDIGO AQUÍ 
  const numberList = [];

  for (let index = 1; index <= n; index++) {
    numberList.push(index);
  }
  return numberList;
}

/* --------------------------------------------------------------------------
   KATA 22 — Cuenta Regresiva
   Dado un número de inicio, retorná un array con la cuenta regresiva
   hasta 0, y al final el string "¡Despegue! 🚀".
   Ej: cuentaRegresiva(3) → [3, 2, 1, 0, "¡Despegue! 🚀"]
-------------------------------------------------------------------------- */
function cuentaRegresiva(inicio) {
  // TU CÓDIGO AQUÍ 
  let numberList = [];

  for (let index = 0; index <= inicio; index++) {
    numberList.push(index);
  }

  let numbersListReverse = numberList.reverse();
  numbersListReverse.push('¡Despegue! 🚀')
  return numbersListReverse;
}

/* --------------------------------------------------------------------------
   KATA 23 — Tabla de Multiplicar
   Dado un número, retorná un array con los 10 primeros múltiplos en formato string.
   Ej: tablaMultiplicar(7) → ["7 x 1 = 7", "7 x 2 = 14", ..., "7 x 10 = 70"]
-------------------------------------------------------------------------- */
function tablaMultiplicar(numero) {
  // TU CÓDIGO AQUÍ 
  let tablaMultiplicar = [];

  for (let index = 1; index <= 10; index++) {
    
    tablaMultiplicar.push(`${numero} x ${index} = ${numero*index}`);
  }
  return tablaMultiplicar;
}

/* --------------------------------------------------------------------------
   KATA 24 — Factorial
   Dado un número n, calculá y retorná su factorial.
   Ej: factorial(5) → 120   (porque 5 × 4 × 3 × 2 × 1 = 120)
   Definí factorial(0) = 1.
-------------------------------------------------------------------------- */
function factorial(n) {
  // TU CÓDIGO AQUÍ 
  let totalFactorial = 1;

  for (let index = 1; index <=n; index++) {  //inicio en 1 el index por que el factorial de 0=1
     totalFactorial = totalFactorial*index;
  }

  return totalFactorial;
}

/* --------------------------------------------------------------------------
   KATA 25 — Sin Múltiplos de 4
   Dado un límite, retorná un array con los números del 1 al límite
   excluyendo los que son múltiplos de 4.
   Ej: sinMultiplosDe4(8) → [1, 2, 3, 5, 6, 7]
-------------------------------------------------------------------------- */
function sinMultiplosDe4(limite) {
  // TU CÓDIGO AQUÍ 
  let numberList = [];

  for (let index = 1; index <= limite; index++) {
    if( index%4 !== 0){
      numberList.push(index);
    }
  }

  return numberList;
}

/* --------------------------------------------------------------------------
   KATA 26 — Primer Múltiplo de 13 Mayor a 100
   Retorná el primer número que sea múltiplo de 13 y sea estrictamente mayor que 100.
   (No recibe parámetros, la respuesta siempre es la misma)
-------------------------------------------------------------------------- */
function primerMultiploDe13MayorA100() {
  // TU CÓDIGO AQUÍ
  let listnumnbers = []; 
  for (let index = 0; index < 150; index++) {
     if(index%13 === 0){
       listnumnbers.push(index);
     }
  }
  return listnumnbers.find(number => number > 100);
}

/* --------------------------------------------------------------------------
   KATA 27 — Triángulo de Asteriscos
   Dado un número de filas, retorná un array donde cada elemento es una fila.
   Ej: triangulo(3) → ["*", "**", "***"]
-------------------------------------------------------------------------- */
function triangulo(filas) {
  // TU CÓDIGO AQUÍ 
  let triangulo = [];
  let asterisco ='';

  for (let index = 0; index < filas; index++) {
    asterisco=`${asterisco}*`;
    triangulo.push(asterisco);
  }

  return triangulo;
}

/* --------------------------------------------------------------------------
   KATA 28 — Suma del 1 al N
   Dado un número n, retorná la suma de todos los números del 1 al n.
   Ej: sumaHastaN(10) → 55
-------------------------------------------------------------------------- */
function sumaHastaN(n) {
  // TU CÓDIGO AQUÍ 
  let sumatotal = 0;

  for (let index = 1; index <= n; index++) {
    sumatotal = sumatotal + index;
  }

  return sumatotal;
}

/* --------------------------------------------------------------------------
   KATA 29 — Fibonacci
   Dado un número n, retorná un array con los primeros n números
   de la secuencia de Fibonacci.
   Ej: fibonacci(6) → [0, 1, 1, 2, 3, 5]
-------------------------------------------------------------------------- */
function fibonacci(n) {
  // TU CÓDIGO AQUÍ 
  if (n <= 0) return [];

  if (n === 1) return [0];

  let resultado = [0, 1];

  for (let i = 2; i < n; i++) {
    resultado.push(resultado[i - 1] + resultado[i - 2]);
  }

  return resultado;
}

/* --------------------------------------------------------------------------
   KATA 30 — ¿Es Primo?
   Dado un número, retorná true si es primo o false si no lo es.
   Un número primo solo es divisible por 1 y por sí mismo.
   Tip: los números menores o iguales a 1 no son primos.
-------------------------------------------------------------------------- */
function esPrimo(numero) {
  // TU CÓDIGO AQUÍ
 if (numero <= 1) return false;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  numerosHastaN,
  cuentaRegresiva,
  tablaMultiplicar,
  factorial,
  sinMultiplosDe4,
  primerMultiploDe13MayorA100,
  triangulo,
  sumaHastaN,
  fibonacci,
  esPrimo,
};
