console.log("Ejercicio 1:")
let frase = 'Dios es del Madrid'
console.log(frase)
console.log()
function contarPalabras(texto) {
    const palabras = texto.split(' ');
    largo = palabras.length;
    console.log('El texto tiene: '+largo+' palabras');
    
   }
contarPalabras(frase)