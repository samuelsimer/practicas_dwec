function isPangrama(str) {
    abecedario = "qwertyuiopasdfghjklñzxcvbnm";
    str = str.toLowerCase(); 
    for(let i = 1; i <= abecedario.length; i++){
        if(!(str.includes(abecedario.substring(i,i+1)))){
            return false;
        }
    }
    return true;
}

console.log(isPangrama("qqwweeqw ertyuioprrñl asjdhgftasdf ghjklñyuiopxmzzxcvbnmnbcv"));