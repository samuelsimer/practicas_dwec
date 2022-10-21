function max( arr ){
    acum = 0;
    let maximo = arr.reduce((acum, item) => {
        if(acum < item) acum = item;
        return acum;
    });
    return maximo;
}

let numeros = [1, 4, 10, 20, 15, 23, 8, 14];
console.log(max(numeros));