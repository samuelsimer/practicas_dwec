function removeUndefined(obj1){
    let objetoClonado = {};
    for (let key in obj1){
        if(obj1[key] != undefined){
            objetoClonado[key] = obj1[key];
        }  
    }
    return objetoClonado;
}

objetoPrueba = {
    nombre: 'juan',
    apellidos: undefined,
    edad: 15,
}

clonacion = removeUndefined(objetoPrueba);

for(let key in clonacion){
    console.log(key + ': ' + clonacion[key]);
}