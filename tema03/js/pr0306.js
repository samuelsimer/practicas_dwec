function convertBase(n,basefrom,baseto){
    let base = parseInt(n,basefrom);
    return base.toString(baseto);
}

console.log(convertBase(11, 2, 10));