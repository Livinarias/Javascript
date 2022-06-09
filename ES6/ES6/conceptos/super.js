// super en JS

//ES5
let persona = {
    saludar(){
        return "Hola";
    }
};

let amigo = {
    saludar(){
        return Object.getPrototypeOf(this).saludar(this) + ", saludos!!!";
    }
};

Object.setPrototypeOf( amigo, persona);
console.log(amigo.saludar());

//ES6

let persona1 = {
    saludar(){
        return "Hola";
    }
};

let amigo1 = {
    saludar(){
        return super.saludar() + " , saludos!!!";
    }
};

Object.setPrototypeOf( amigo1, persona1);
console.log(amigo1.saludar());