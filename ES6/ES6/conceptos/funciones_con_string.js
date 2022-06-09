// operaciones con string

var saludo = "Hola Mundo!";
// ES5

//encontrar si la letra se encuentra en una posicion de la variable
console.log(saludo.substring(0,1) === "H");
// si la variable contiene la letra
// si la contiene devuelve posición, de lo contrario devuelve -1
console.log(saludo.indexOf("x"));

// ES6

// si la variable empieza con la palabra escrita
console.log(saludo.startsWith("Hola"));
// si la variable finaliza con la palabra escrita
console.log(saludo.endsWith("!"));
// si la contiene devuelve True, de lo contrario devuelve False
console.log(saludo.includes("o"));
//duplicar string
let texto = "Hola";
console.log(texto.repeat(2));
const ESPACIOS = 12;
let nombres = ["Fernando","Melissa","Juan"]
let telefono = ["99887766","33445566","22334455"]

for (i in nombres){
    let dif = ESPACIOS - nombres[i].length;
    console.log(nombres[i] + " ".repeat(dif) + "|" + telefono[i]);
}
