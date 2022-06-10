const getUsuarioById = (id, callback) => {
    const usuario = {
        nombre: 'Fernando',
        id
    };
    
    if(id === 20){
        callback(`El usuario con el id ${id}, no existe`);
    }else{
        callback(null , usuario);
    }
};

getUsuarioById(5, (err , user) =>{
    if(err){
        return console.log(err);
    }
    console.log('usuario de base de datos', user);
});