function cloneObject(obj){
    let objetoClonado = {};
    for (let key in obj){
         objetoClonado[key] = obj[key];
    }
    return objetoClonado;
}

objetoPrueba = {
    nombre: 'juan',
    apellidos: 'Rodriguez',
}

clonacion = cloneObject(objetoPrueba);

for(let key in clonacion){
    console.log(key + ': ' + clonacion[key]);
}


