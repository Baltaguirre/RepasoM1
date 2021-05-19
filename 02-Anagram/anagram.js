/**
 * Dado dos strings, escribe una function para determinar si el 
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra 
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la 
 * reordenación de las letras de otra palabra. 
 * Como cinema y iceman.

 * @param {string} first - esto es un string.
 * @param {string} second - esto es un string.
 * @returns {boolean} - deberia retornar true o false.
 */

 function validAnagram(first, second) {
    var primero = first.split('');
    var segundo = second.split('');
    
    for (var i = 0; i < segundo.length; i++) {
        let values = primero.indexOf(segundo[i])
        if (values === -1) {
            return false;
        } 
        primero.splice(values,1)
        }
    return true;
    }