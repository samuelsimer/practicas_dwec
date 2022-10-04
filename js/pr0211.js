let numero = prompt("Introduce un número para saber si es par o impar: ");
while (numero<=0 || isNaN(numero)){
    numero = prompt("Introduce un número para saber si es par o impar: ");
};

(numero % 2 == 0) ? alert("EL NUMERO ES PAR!!") : alert("EL NUMERO ES IMPAR!!");

