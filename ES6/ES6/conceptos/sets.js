// sets Js o Strongset
let items = new Set([1,1,1,1,2,3,5,6,4,2,3,"3"]);

items.add(9);

console.log(items);
console.log(items.has(1));

console.log(items.size);
items.delete(1);
console.log(items);

items.clear();
console.log(items);

//forEach

let personas = new Set(["Fernando","Maria","Susana"]);

personas.forEach(function(valor, llave, setOriginal){
    console.log(valor, llave, setOriginal);
    console.log(personas === setOriginal);
})

// set a array

let numeros = [1,2,3,4,5,6,7,3,4,5,6,1,7];

let arrayNumeros = eliminaDuplicados(numeros);
console.log(arrayNumeros);

function eliminaDuplicados(items) {
    return [...new Set(items)];
    
}

//Weekset