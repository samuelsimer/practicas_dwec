function intersectObjects(obj1, obj2){
    let objetoClonado = {};
    for (let key in obj1){
        if(key in obj2){
            objetoClonado[key] = obj1[key];
        }
         
    }
    return objetoClonado;
}

objetoPrueba1 = {
    nombre: 'juan',
    apellidos: 'Rodriguez',
    edad: 15,
}

objetoPrueba2 = {
    nombre: 'Olga',
    edad: 18,
}

resultado = intersectObjects(objetoPrueba1, objetoPrueba2);

for(let key in resultado){
    console.log(key + ': ' + resultado[key]);
}