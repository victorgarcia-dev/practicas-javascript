/* ==========================================================================
   04 — Lógica Mixta | 10 Katas
   Combinás variables, condicionales y bucles.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 31 — FizzBuzz Extendido
   Dado un número, retorná:
   - "Fizz"         si es múltiplo de 3
   - "Buzz"         si es múltiplo de 5
   - "Bazz"         si es múltiplo de 7
   - "FizzBuzz"     si es múltiplo de 3 y 5
   - "FizzBazz"     si es múltiplo de 3 y 7
   - "BuzzBazz"     si es múltiplo de 5 y 7
   - "FizzBuzzBazz" si es múltiplo de 3, 5 y 7
   - El número como string si no cumple ninguna regla. Ej: fizzBuzzExtendido(2) → "2"
-------------------------------------------------------------------------- */
function fizzBuzzExtendido(n) {
  // TU CÓDIGO AQUÍ 
  if(n%3 === 0 && n%5 === 0 && n%7 === 0){
    return 'FizzBuzzBazz';
  } else if(n%3 === 0 && n%5 === 0){
    return 'FizzBuzz';
  } else if(n%3 === 0 && n%7 === 0){
    return 'fizzBazz';
  } else if(n%5 === 0 && n%7 === 0){
    return 'BuzzBazz';
  } else if(n%3 === 0){
    return 'Fizz';
  } else if(n%5 === 0){
    return 'Buzz';
  } else if(n%7 === 0){
    return 'Bazz';
  } else {
    return n;
  }
}

/* --------------------------------------------------------------------------
   KATA 32 — Descuento en Carrito 
   Dado un array de precios, calculá el total.
   Si el total SUPERA 5000, aplicá un descuento del 15%.
   Retorná el precio final a pagar.
-------------------------------------------------------------------------- */
function calcularTotal(precios) {
  // TU CÓDIGO AQUÍ
  let total = 0;
  for (let index = 0; index < precios.length; index++) {
      total = total + precios[index];
  }

  if(total > 5000){
    return total-(total*15)/100;
  } else {
    return total;
  }
} 

/* --------------------------------------------------------------------------
   KATA 33 — Contador de Pares e Impares
   Dado un límite, contá cuántos pares e impares hay del 1 al límite.
   Retorná un objeto: { pares: X, impares: Y }
   Ej: contarParesEImpares(6) → { pares: 3, impares: 3 }
-------------------------------------------------------------------------- */
function contarParesEImpares(limite) {
  // TU CÓDIGO AQUÍ 
  let par=0;
  let impar=0;

  for (let index = 1; index <= limite; index++) {
    if(index%2 === 0){
      par++;
    } else {
      impar++;
    }
  }
  return { pares: par, impares: impar}

}

/* --------------------------------------------------------------------------
   KATA 34 — Palabras en Mayúsculas
   Dado un string con varias palabras, dividílo por espacios y retorná
   un array con cada palabra convertida a mayúsculas.
   Ej: palabrasEnMayusculas("hola mundo") → ["HOLA", "MUNDO"]
-------------------------------------------------------------------------- */
function palabrasEnMayusculas(oracion) {
  // TU CÓDIGO AQUÍ
  const listPalabras = oracion.toUpperCase().split(' ');
  return listPalabras;
}

/* --------------------------------------------------------------------------
   KATA 35 — Clasificar Número
   Dado un número, retorná un objeto con dos propiedades:
   - esPar: true si es par, false si es impar.
   - mayorQueCinco: true si es mayor que 5, false si no.
   Ej: clasificarNumero(8) → { esPar: true, mayorQueCinco: true }
-------------------------------------------------------------------------- */
function clasificarNumero(numero) {
  // TU CÓDIGO 
  
  let verificar = false;
  let mayorCinco = false;
  if(numero%2 === 0){
     verificar = true;
  }

  if( numero > 5){
       mayorCinco = true;
  }
 
  return { esPar: verificar, mayorQueCinco: mayorCinco};
}

/* --------------------------------------------------------------------------
   KATA 36 — Divisibles por 3 pero no por 9
   Dado un límite, retorná un array con todos los números del 1 al límite
   que sean divisibles por 3 pero NO por 9.
   Ej: divisiblesPor3NoNueve(20) → [3, 6, 12, 15]
-------------------------------------------------------------------------- */
function divisiblesPor3NoNueve(limite) {
  // TU CÓDIGO AQUÍ 
  let numberList = [];

  for (let index = 1; index <= limite; index++) {
    if( index%3 === 0 && index%9 !==0 ){
      numberList.push(index);
    }
  }
  return numberList;
}

/* --------------------------------------------------------------------------
   KATA 37 — Conversión de Temperatura
   Dado una temperatura en Celsius, retorná un objeto con:
   - fahrenheit: C * 9/5 + 32  (redondeado a 2 decimales)
   - kelvin: C + 273.15
   Ej: convertirTemperatura(100) → { fahrenheit: 212, kelvin: 373.15 }
-------------------------------------------------------------------------- */
function convertirTemperatura(celsius) {
  // TU CÓDIGO AQUÍ 
  let fahrenheit = (celsius*(9/5)) + 32;
  let kelvin = celsius + 273.15;

  return {fahrenheit: Number(fahrenheit.toFixed(2)), kelvin: kelvin};
}

/* --------------------------------------------------------------------------
   KATA 38 — Contar Tiradas de Dado
   Dado un array de tiradas (números del 1 al 6), retorná un objeto
   que cuente cuántas veces salió cada número (del 1 al 6).
   Ej: contarTiradas([1, 2, 1, 3, 1, 6]) → { 1: 3, 2: 1, 3: 1, 4: 0, 5: 0, 6: 1 }
-------------------------------------------------------------------------- */
function contarTiradas(tiradas) {
  // TU CÓDIGO AQUÍ 
  let uno = dos = tres = cuatro = cinco = seis = 0;

  for (let index = 0; index < tiradas.length; index++) {
    if(tiradas[index] === 1){
      uno++;
    } else if(tiradas[index] === 2){
      dos++;
    } else if(tiradas[index] === 3){
      tres++;
    } else if( tiradas[index] === 4){
      cuatro++;
    } else if(tiradas[index] === 5){
      cinco++;
    } else if(tiradas[index] === 6){
      seis++;
    }  
  }
   return {1: uno, 2: dos, 3: tres, 4: cuatro, 5: cinco, 6: seis}
  }

/* --------------------------------------------------------------------------
   KATA 39 — Divisores de un Número
   Dado un número entero positivo, retorná un array con todos sus divisores
   en orden ascendente.
   Ej: obtenerDivisores(12) → [1, 2, 3, 4, 6, 12]
-------------------------------------------------------------------------- */
function obtenerDivisores(numero) {
  // TU CÓDIGO AQUÍ
  let numberList = [];
  for (let index = 1; index <= numero; index++) {
    if(numero%index === 0){
      numberList.push(index);
    }
  }
  return numberList.sort((a,b) => a -b);
}

/* --------------------------------------------------------------------------
   KATA 40 — DESAFÍO FINAL: Adivina el Número
   Dado un número secreto y un array de intentos, retorná un array
   con el resultado de cada intento:
   - "Demasiado bajo"  si el intento es menor al secreto.
   - "Demasiado alto"  si el intento es mayor al secreto.
   - "¡Correcto!"      si el intento es igual al secreto.
   Ej: adivinarNumero(10, [5, 15, 10]) → ["Demasiado bajo", "Demasiado alto", "¡Correcto!"]
-------------------------------------------------------------------------- */
function adivinarNumero(secreto, intentos) {
  // TU CÓDIGO AQUÍ 
  let result = [];

  for (let index = 0; index < intentos.length; index++) {
    if(secreto > intentos[index]){
      result.push('Demasiado bajo');
    } else if(secreto < intentos[index]){
      result.push('Demasiado alto');
    } else {
      result.push('¡Correcto!');
    }
  }
  return result;
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  fizzBuzzExtendido,
  calcularTotal,
  contarParesEImpares,
  palabrasEnMayusculas,
  clasificarNumero,
  divisiblesPor3NoNueve,
  convertirTemperatura,
  contarTiradas,
  obtenerDivisores,
  adivinarNumero,
};
