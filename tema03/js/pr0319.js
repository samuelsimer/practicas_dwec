function max( arr ){
    return arr.reduce((acum, item) => {
        return (acum < item) ? item : acum;
    }, 0);
}

let numeros = [1, 4, 10, 20, 15, 23, 8, 14];
console.log(max(numeros));