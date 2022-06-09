let ajustes = {
    nombre: "Fernando",
    email: "Fernanado.herrera85",
    facebook: "Fernnado87",
    google: "fernando.her",
    premium: true
};

let {premium:dePago, nombre, email, facebook, google, twitter:cuentaTwi = "fernando.her.85"} = ajustes;

console.log(cuentaTwi );

let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo:{
        archivo:"index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo:{
        subNodo:{
            cursor:{
                linea:11,
                columna:11
            }
        }
    }
};

let {cursor:cursorActivo} = autoGuardado;
console.log(cursorActivo);

let {ultimoArchivo:{cursor:ultimoArchivo}} = autoGuardado;
console.log(ultimoArchivo);

let {otroNodo:{subNodo:{cursor:otroSupernodo}}} = autoGuardado;
console.log(otroSupernodo);

let otroSupernodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSupernodo2);

//arreglos
let frutas = ["banano", "pera", "uva"];

let [ fruta1, fruta2] = frutas;
console.log(fruta1);

console.log(fruta2);

let [,,fruta3] = frutas;

console.log(fruta3);

let [otraFruta] = "manzana";

[otraFruta] = frutas;

console.log(otraFruta);

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

console.log(a,b);

[a,b] = [b,a]

console.log(a,b);

let colores1 = ["rojo",["verde","amarillo"],"morado","naranja"];

let [color1, [color2]] = colores1

console.log(color1, color2);

let colores2 = ["rojo","verde","amarillo","morado","naranja"];

// ... destructuracion operadores rest solo funciona para arreglos

let [colorPrinciopal, colorSecundario, ...demasColores] = colores2;

console.log(colorPrinciopal, colorSecundario ,demasColores);

// destructuracion objetos
let frutas3 = ["banano","pera"];

let [fruta4, fruta5 = "manzana"] = frutas;

console.log(fruta4, fruta5);

let opciones = {
    nombre5:"Fernando"
};

let {nombre5, apellido = "Herrera"} = opciones

console.log(nombre5, apellido);

// destructuracion parametros por defecto

function crearJugador(nickname, 
    {hp, sp, clase} = { hp:100, sp:50, clase:"Mago"}
) {
    //opciones = opciones || {};

    // let hp = opciones.hp,
    //     sp = opciones.sp,
    //     clase = opciones.clase;

    console.log(nickname, hp, sp, clase);

    // codigo para crear el jugador
}

crearJugador("Strider", {
    hp:120,
    sp:80,
    clase:"soldado"
});