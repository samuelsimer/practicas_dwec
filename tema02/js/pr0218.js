function triangulo(a,b,c){
    if(a + b < c || b + c < a || a+c < b){
        posible = false;
    }else{
        posible = true;        
    }

    return posible;
}

    let num1 = prompt("Introduce un número:");
    let num2 = prompt("Introduce un número:");
    let num3 = prompt("Introduce un número:");
if(triangulo(num1, num2, num3)){
    mensaje = "Es posible hacer un triangulo";
}else{
    mensaje = "No es posible hacer un triangulo";
};
alert(mensaje);