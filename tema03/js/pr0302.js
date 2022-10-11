function mergeObjects(obj1, obj2){
        let objetoResultado = {};
        for (let key in obj1){
            objetoResultado[key] = obj1[key];
        }
        for (let key in obj2){
            objetoResultado[key] = obj2[key];
       }
        return objetoResultado;
}