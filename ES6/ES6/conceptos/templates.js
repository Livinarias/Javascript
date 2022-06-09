// template literales
let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2);

function ObtenerNombre(){
    return "Maria Perez"
};

let nombreCompleto3 = `El nombre completo es ${ObtenerNombre()}`;
console.log(nombreCompleto3);

let multilinea = `<h1 class="algo">Titulo</h1>
<p>Hola Mundo</p>`;
console.log(multilinea);

function etiqueta(literales, ...substituciones){
    let resultado = "";
    console.log(literales);
    console.log(substituciones);

    for(let i = 0; i < substituciones.length; i++){
        resultado += literales[i];
        resultado += substituciones[i];
    }
    return resultado
}

let unidades = 5;
    costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo_unitario} pesos.`;
console.log(mensaje);

let mensaje2 = `Hola \n Mundo\\`,
    mensaje3 = String.raw`Hola \n Mundo\\`;
console.log(mensaje2);
console.log(mensaje3);