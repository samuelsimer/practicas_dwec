let numero = prompt("Introduce un número para saber si es par o impar: ");
while (numero<=0 || isNaN(numero)){
    numero = prompt("Introduce un número para saber si es par o impar: ");
};
if(numero%2 == 1){
    alert("EL NUMERO ES IMPAR!!")
}else{
    alert("EL NUMERO ES PAR!!")
}