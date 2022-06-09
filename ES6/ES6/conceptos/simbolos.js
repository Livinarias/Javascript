// simbolos

let primerNombre = Symbol('primerNombre');
let segundoNombre = Symbol('segundoNombre');

let persona = {
    [segundoNombre]: 'Herrera'
};

persona[primerNombre] = 'Fernando';

console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

//compartiendo simbolos

let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "12345";

let userID2 = Symbol.for("userID");

console.log(userID == userID2);
console.log(userID === userID2);
console.log(Object.is(userID, userID2));

console.log(objeto[userID2]);
console.log(userID2);

//coercion simbolos

let id = Symbol.for("id");
let numerto = 10;

console.log(numerto + String(id));

 
id = Symbol.for("id");
activo = Symbol.for("activo");

 let persona2 = {
     [id] : "123",
     [activo] : "Activo123",
     nombre : "Livingston"
 };

 console.log(Object.keys(persona2));

 for(key in persona2){
     console.log(key, persona2[key]);
 }

 let simbolos = Object.getOwnPropertySymbols(persona2);
 console.log(simbolos);

 for(i in simbolos){
     console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
 }