/* /
 * Escribe una function llamada sumZero que acepte un array de numeros 
 * enteros ordenado. La function deberia encontrar el primer par de 
 * numeros que sumados den 0. Retorna un array que incluya los dos 
 * numeros encontrados o undefined si el par no existe..
 */


// var arr = [1,2,3,0,0,6,7,8]

function sumZero(arr) {
    if (!arr) return 'undefined';
    for (var i = 0; i < arr.length; i++) {
        var result = []
        if (arr[i] + arr[i + 1] === 0) {
            result.push(arr[i], arr[i + 1]);
            return result;
        }

    }
}

console.log(sumZero([1, 2, 3, 4, 5, 6, 7, 8])); //undefined
console.log(sumZero([1, 2, 3, 4, 5, 6, 0, 0])); // [0,0]
console.log(sumZero([1, 2, 0, 0, 5, 6, 7, 8])); // [0,0]
console.log(sumZero([1, 2, 3, 4, 0, 6, 0, 8])); // undefined