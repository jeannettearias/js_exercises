/*
Ejercicio 3
Se precisa que codifique una función en lenguaje JavaScript que reciba como
parámetro un array de letras minúsculas de longitud indeterminada y que devuelva
un objeto con la propiedad “letter” que indique la letra que tenga más ocurrencias
seguidas en el array y la propiedad “count” que contabilice la cantidad de veces que
aparece la letra en esa secuencia.
La función debe analizar el array de izquierda a derecha, de forma que si existen dos
letras que se repiten de forma consecutiva el mismo número de veces, devolverá la
letra que cumpla esta condición por primera vez.
Ejemplo 1: Para el array Devolverá el objeto:

[‘a’, ‘b’, ‘b’, ‘e’, ‘d’, ‘f’,
‘g’, ‘h’, ‘h’, ‘h’]

{
letter: 'h',
count: 3
}

Ejemplo 2: Para el array Devolverá el objeto:

[‘a’, ‘b’, ‘b’, ‘b’, ‘e’, ‘f’,
‘f’, ‘f’, ‘b’, ‘d’]

{
letter: 'b',
count: 3
}

*/
