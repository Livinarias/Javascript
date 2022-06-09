// class js

let nombreMetodo = "gritarNombre"
class Personas{
    constructor(nombre){
        this.nombre = nombre
    }
    //Persona.prototype.decirNombre()
    decirNombre(){
        console.log(this.nombre);
    }

    //metodo computado
    [nombreMetodo](){
        console.log(this.nombre.toUpperCase());
    }
    // se llaman fuera de la clase sin inicializarla
    static crear(nombre){
        return new Personas(nombre);
    }
};

let fernando = new Personas("Fernando");

fernando.decirNombre();

let yo = Personas.crear("Livin");

console.log(yo,nombreMetodo);

//heredar

class Rectangulo{
    constructor( alto, largo){
        this.alto = alto;
        this.largo = largo;
    }

    getArea(){
        return this.alto * this.largo;
    }
}

let rectangulo = new Rectangulo(3,2);

class Cuadrado extends Rectangulo{
    constructor(alto){
        super(alto, alto)
    }

    getArea(){
        // return "Cuadrado: " + (this.alto * this.largo);
        return super.getArea();
    }
}

let cuadrado = new Cuadrado(3);

console.log(cuadrado.getArea());
console.log(rectangulo.getArea());
console.log(cuadrado instanceof Cuadrado);
console.log(cuadrado instanceof Rectangulo);