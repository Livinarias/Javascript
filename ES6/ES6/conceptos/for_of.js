// cliclo for of para colecciones

let numeros = [100,20,30,50,200];

for(i in numeros){
    console.log(numeros[i]);
}

for( let i of numeros){
    console.log(i);
}

let mapa = new Map([["nombre","fernando"],["apellido","herrera"]]);
console.log( mapa.get("nombre") );