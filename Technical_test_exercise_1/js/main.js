const numbersArray = [1, 2, 3, 4, 5, 20, 34, 56, 78, 90, 100];
numbersArray.sort((function (a, b) {
    return a - b;

}));
//length = cantidad de elementos del array
console.log(numbersArray[numbersArray.length - 1]);

