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

const getEmpleado = async(id ) => {

    const empleadoDB = empleados.find( empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No se encontro o no existe el empleadocon el id ${id}`)
    } else {
        return empleadoDB;
    }
};

const getSalario = async( empleado ) => {
    
    const salarioDB = salarios.find( salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No se encontro el salario para el empleado ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
};

const getInfornacion = async(id) => {
    const empleado = await getEmpleado(id);
    const resp = await getSalario(empleado);

    return `${empleado.nombre} tiene un saladio de ${resp.salario}`;
}

getInfornacion(1).then(console.log)