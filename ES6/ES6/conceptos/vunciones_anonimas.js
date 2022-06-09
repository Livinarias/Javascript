var saludo1 = function(nombre) {
    return "Hola " + nombre;
    
}("Fernando");

var saludo2 = (nombre => `Hola ${nombre}`)("Melisa");