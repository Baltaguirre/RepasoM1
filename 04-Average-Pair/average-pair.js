/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function averagePair(arr, num) {
    
    for (var i = 0; i < arr.length; i++) {
        var valor = arr[i];  
        if (valor + arr[i+1] === num) {
            valor = arr[i];
        }  
            return valor;
     } 
            
            
    }


console.log(averagePair([1, 2, 3, 7, 5], 4))