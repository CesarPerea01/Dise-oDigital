console.log("Ejercicio 3:")
const arreglo = [1,2,3,4,2,6,7,8,4,7,10,14,14,23,45,5,0,16,5];
const encontrarDuplicados = ((arregloNumeros)=>{
    let duplicados =[];
    const temporal = arregloNumeros.sort();
    for(let i=0; i<temporal.length; i++){
        if (temporal[i+1]==arregloNumeros[i]){
            duplicados.push(temporal[i])
        }
    }
    return duplicados.sort(function(a, b){return a - b})
})
console.log(arreglo)
console.log('Duplicados: ', encontrarDuplicados(arreglo));
