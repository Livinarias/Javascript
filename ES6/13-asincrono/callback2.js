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

const getEmpleado = (id, callback ) => {
    const empleadoDB = empleados.find( empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe ese empleado con id ${id}`);
    }else{
        callback( null, empleadoDB);
    }
};

const getSalario = ( empleado, callback ) => {
    const salarioDB = salarios.find( salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
        callback( null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
};

getEmpleado( 3, (err, empleado) =>{
    if (err) { return console.log(err);}
    console.log("empleado",empleado);
    getSalario( empleado, ( err, resp) =>{
        if (err) { return console.log(err);}
        console.log(resp);
        })
});