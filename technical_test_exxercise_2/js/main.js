/*
Ejercicio 2
Escriba un programa en JavaScript que contenga un array con números enteros (del
1 al 5) que pueden estar repetidos y genere en la consola (o en la terminal) un
histograma que represente cuánto se repite cada número. Debe mostrar la
frecuencia para todos los números, incluso si no están presentes en el array.
Puede asumir que el array tendrá una longitud corta (hasta 20 números).
Ejemplo: Mostrará en la consola:

const numeros =
[1,2,1,3,3,1,2,1,5,1];

1: *****
2: **
3: **
4:
5: *

*/
const number = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];
const countNumber = [0];

for (let i = 0; i < number.length; i++) {
    countNumber[number[i]] = countNumber[number[i]] + 1 || 1;

}

console.log(`1: ${'*'.repeat(countNumber[1])}`);
console.log(`2: ${'*'.repeat(countNumber[2])}`);
console.log(`3: ${'*'.repeat(countNumber[3])}`);
console.log(`4: ${'*'.repeat(countNumber[4])}`);
console.log(`5: ${'*'.repeat(countNumber[5])}`);

