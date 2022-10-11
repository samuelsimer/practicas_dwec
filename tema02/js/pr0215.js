function calc(operando1, operando2, operador){
    let resultado = 0;
    switch (operador){
        case "+":
            resultado = operando1 + operando2;
            break;
        case "-":
            resultado = operando1 - operando2;
            break;
        case "*":
            resultado = operando1 * operando2;
            break;
        case "/":
            if(operando1 > 0 && operando2 > 0){
                resultado = operando1 / operando2;
            }else{
                resultado = "operacion no valida";
            }
            
            break;
        case "%":
            if(operando1 > 0 && operando2 > 0){
                resultado = operando1 % operando2;
            }else{
                resultado = "operacion no valida";
            }
            break;
        case "**":
            if(operando1 > 0 && operando2 > 0){
                resultado = operando1 ** operando2;
            }else{
                resultado = "operacion no valida";
            }
            break;
    }
    return resultado;
}

let repetir = true;
let operacion;
while(repetir){
    operacion = prompt("Introduce una operacion a realizar: ");
    if(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/" || operacion == "%" || operacion == "**"){
        repetir = false;
    }else{
        alert("Las operaciones a realizar solo puedes ser +, -, *, /, %, **");
    }
}
let num1 = prompt("Introduce primer operando: ");
let num2 = prompt("Introduce segundo operando: ");

alert(`El resultado de la operación es: ${calc(num1, num2, operacion)}`);