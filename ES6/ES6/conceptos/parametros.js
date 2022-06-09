//parametros js

function saludo (mensaje, tiempo = 1500){
    //mensaje = mensaje || "Hola Mundo";
    // mensaje = (typeof mensaje !== "undefined") ? mensaje: "Hola Mundo";
    setTimeout(function(){
        console.log(mensaje);
    }, tiempo);
}

saludo();

function saludar(fn = fnTemporal, persona = {nombre:"Fernando"}) {
    console.log(typeof fn);
    if (typeof fn === "undefined") {
        console.error("No es una funcion");
        return;
    }
    fn();
    console.log(persona);
    
}

function fnTemporal(params) {
    console.log("Hola Mundo FN");
}

var persona = {
    nombre:"Juan"
}

saludar(fnTemporal,persona);