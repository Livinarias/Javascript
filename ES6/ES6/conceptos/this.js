//uso del this

//ES5

var manejador = {
    id:"123",
    init: function(){
        document.addEventListener("click", (function(event){
            this.clickPagina(event.type);
        }).blind(this),false);
    },

    clickPagina: function(type){
        console.log("Manejando " + type + " para el id " + this.id);
    }
};

manejador.init();

//ES6

var manejador2 = {
    id:"123",
    init: function(){
        document.addEventListener("click",
        event => this.clickPagina(event.type), false);
    },

    clickPagina: function(type){
        console.log("Manejando " + type + " para el id " + this.id);
    }
};

manejador2.init();