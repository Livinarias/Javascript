function Persona(nombre) {
    if (typeof new.target !== "undefined") {
        this.nombre = nombre;   
    }else{
        throw new Error('Esta funcion, debe ser utilizada con el new');
    }
}

var persona = new Persona("Fernando");

var noEsPersona = Persona.call(persona,"Fernando");