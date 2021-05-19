/**
 * Escribe una function llamada BinaryToDecimal que acepte string numerico 
 * y una base.
 * La funcion deberia retornar un numero entero. 
 * La idea es tomar un numero binario y "pasarlo" a un numero entero.
 * La formula para convertir un numero binario en decimal es: N * B ^ I 
 * Donde N es el numero B es la base e I es el indice.
 * Digamos que tenemos el binario "101" la formulara seria asi:
 * 1 * 2 ^ 2  +  0 * 2 ^ 1  +  1 * 2 ^ 0

 *ls
 */

 function BinaryToDecimal(binary, base) {
    var result = 0   
    for (var i = 0; i < binary.length; i++) {
           result = result + binary[i] * Math.pow(base, binary.length - 1 - i);
           }
           return result;
       }
   
   
   console.log(BinaryToDecimal('100', 2))