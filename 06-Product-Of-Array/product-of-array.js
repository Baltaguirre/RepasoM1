/**
 * Escribe una funcion llamada productOfArray que reciba un array y 
 * mutiplique cada elemento con el siguiente.
 * Debe retornar el total de la multiplicacion de todos los elementos.

 * @param {Array} arr - esto es un array.
 * @returns {Number} - deberia retornar un number.
 */

function productOfArray(arr) {
return arr.reduce(function(curr,acc){
    return acc * curr
})
}


console.log(productOfArray([1,2,3,4,5]))