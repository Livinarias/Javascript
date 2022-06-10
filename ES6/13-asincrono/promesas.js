const empleados = [{
    id:1,
    nombre:"Livin"
},{
    id:2,
    nombre:"Carlos"
},{
    id:3,
    nombre:"Juan"
}];

const salarios = [{
    id:1,
    salario: 1000
},{
    id:2,
    salario: 2000
}];

const getEmpleado = (id ) => {

    return promesa = new Promise( ( resolve, reject) => {
    const empleadoDB = empleados.find( empleado => empleado.id === id);
    if (!empleadoDB) {
        reject(`No existe ese empleado con id ${id}`);
    }else{
        resolve( empleadoDB);
    }
    });
};

const getSalario = ( empleado ) => {
    
    return new Promise((resolve , reject) => {
        const salarioDB = salarios.find( salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};

getEmpleado(1)
    .then(getSalario)
    .then(console.log)
.catch( err => console.log(err))