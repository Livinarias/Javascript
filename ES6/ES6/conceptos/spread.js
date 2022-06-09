// spread js

//ES5

var numeros = [1,2,3,5,10,500];
var max = Math.max.apply(Math, numeros);

console.log(max);

//ES6

let numeros = [1,2,3,5,10,500];
let max = Math.max(...numeros);

console.log(max);

let persona1 = {
    nombre: 'Fernando',
    edad: 33
}

let persona2 = {
    nombre: 'Juan',
    edad: 18,
    direcciones: "Avenida siempre viva",
    coduce: true,
    vehiculo:true,
    casado:true
};

persona1 = {
    ...persona2,
    ...persona1
}

console.log(persona1);