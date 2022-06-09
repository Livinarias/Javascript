// arguments traera los parametros enviados si y solo si no hay valores por defecto
function sumar(a=1,b=2) {
    console.log(arguments);
}

sumar();

//Parametro rest
// ...alumnos recibe varios parametros
function agregar_alumno(arr_alumnos, ...alumnos) {
    console.log(arguments);
    for(let i = 1; i < arguments.length; i++){
       arr_alumnos[0].push(alumnos[i]) ;
    }
    return arr_alumnos;
}

let alumnos_arr = ["Fernando"]

let alumnos_arr2 = agregar_alumno(alumnos_arr,"Maria","Carlos","Juan");
console.log(alumnos_arr2);

// restricciones
/*
1. solo puede existir uno
2. debe ir al final
*/