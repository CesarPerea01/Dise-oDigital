console.log("Ejercicio 2:")
                    
function PromedioNotas(estudiante){
    promedio=0;
    suma=0;
    for (let i=0; i<4; i++){
        suma=suma+estudiante.notas[i];
    }
    promedio=suma/4;

    return promedio
}

const CalcularPromedioNotas =((alumni)=>{
    let promedio=0;
    alumni.forEach((alumno) => {
        promedio = PromedioNotas(alumno)
        delete alumno.notas
        alumno.promedio = promedio
    });

    return alumni
})
const estudiantes = [{'nombre':'Juancito','notas':[88,70,77,65]},
                    {'nombre':'Luka','notas':[100,94,91,89]},
                    {'nombre':'Roman','notas':[70,66,73,62]},];
console.log(CalcularPromedioNotas(estudiantes))