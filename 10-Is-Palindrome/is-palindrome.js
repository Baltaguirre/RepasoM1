/**
 * Escribe una funcion llamada isPalindrome que reciba un string.
 * Debe retornar true si la string es un palindromo.
 * Osea si se lee igual de derecha a izquierda, como neuquen.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

function isPalindrome(str) {
    var reves = str.split('').reverse().join('');
    if (str !== reves) {
        return false;
    } 
        return true;
    
}

console.log(isPalindrome('neuquen'))