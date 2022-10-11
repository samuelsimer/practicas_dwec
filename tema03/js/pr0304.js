function containsObject(obj1, obj2){
    let resultado = true;
    for (let key in obj1){
        if(key in obj2 == false){
            resultado = false;
            break;
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