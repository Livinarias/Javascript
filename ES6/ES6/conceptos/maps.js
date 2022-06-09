//maps Js

let mapa = new Map();

mapa.set("nombre","fernando");
mapa.set("edad",31);
mapa.set("test",);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.get("nombre")); // fernnado
console.log(mapa.has("nombre")); // true
console.log(mapa.has("apellido")); // false

mapa.delete("nombre");
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));

mapa.clear();
console.log(mapa);

// inicializacion

let mapa1 = new Map([["nombre","Fernando"],["edad",31]]);

console.log(mapa1);

// forEach
    
let mapa2 = new Map([["nombre","Fernando"],["edad",31]]);

mapa2.forEach(function(valor, llave, mapaOriginal) {
    console.log(`Llave ${llave}, valor ${valor}`);
    console.log(mapaOriginal);
})

mapa2.forEach((valor, llave, mapaOriginal) =>{console.log(`Llave ${llave}, valor ${valor}`);console.log(mapaOriginal);})
