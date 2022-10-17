function containsObject(obj1, obj2){
    let resultado = true;
    for (let key in obj2){
        if(key in obj1 == false){
            resultado = false;
        }
         
    }
    return resultado;
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

console.log(containsObject(objetoPrueba1, objetoPrueba2));