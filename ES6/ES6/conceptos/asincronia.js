function tareaAsincrona() {
    let promesa = new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("proceso Asincrono terminado");
            resolve();
        },1300)
    })
    return promesa;
}
                        //resolve                               //reject
tareaAsincrona().then(
    function() { console.log("Todo OK");},
    function() { console.error("Todo Mal");}
    )