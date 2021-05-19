/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de cada valor del segundo array. 
 * La frecuencia debe ser la misma.
/* 
 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function same(arr1, arr2) {
    if(arr1.length !== arr1.length) return false;
    for (var i = 0; i<arr1.length;i++){
    if(arr1[i] !== (Math.pow(arr2[i],2))) {
                return false;
            } 
        }
       return true;
    }