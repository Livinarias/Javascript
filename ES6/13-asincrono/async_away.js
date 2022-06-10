const getNombre = async() => {
    return new Promise( ( resolve, reject) => {
        setTimeout(() => {
            resolve('Livin')
        },3000);
    });
}

const saludo = async() => {
    const nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo().then(mensage => console.log(mensage))
// getNombre().then(nombre => console.log(nombre))